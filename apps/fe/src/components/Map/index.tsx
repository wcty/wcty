import MapGL, {
  AttributionControl,
  Layer,
  MapContext,
} from '@urbica/react-map-gl';
import type { Map as MapType } from 'mapbox-gl';
import { atoms, mapboxToken, useLang } from 'common';
import { useRecoilState } from 'recoil';
import LocationIcon from './LocationIcon';
import LoadIcons from './LoadIcons';
import Satellite from './Satellite';
import mapStyle from './mapStyle.json';
import {
  ReactNode,
  startTransition,
  Suspense,
  useContext,
  useEffect,
  useState,
} from 'react';
// import { MapGL } from './styles'
import { useRouter } from 'next/router';
import ContextProvider from './ContextProvider';
import Cookies from 'universal-cookie';
import centroid from '@turf/centroid';
import within from '@turf/points-within-polygon';

const cookies = new Cookies();
export default function Map({ children }: { children?: ReactNode }) {
  const [viewport, setViewport] = useRecoilState(atoms.viewport);
  const [satellite] = useRecoilState(atoms.satellite);
  const [cursor] = useRecoilState(atoms.cursor);
  const [selected, setSelected] = useRecoilState(atoms.selected);
  const lang = useLang();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (selected?.geometry?.coordinates)
      cookies.set('focus', selected.geometry.coordinates, { path: '/' });
  }, [selected]);

  useEffect(() => {
    return () => {
      setLoaded(false);
    };
  }, []);

  const router = useRouter();

  return (
    <>
      <MapGL
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          outline: 'none',
        }}
        mapStyle={mapStyle}
        accessToken={mapboxToken}
        onViewportChange={(v: any) => setViewport({ ...viewport, ...v })}
        attributionControl={false}
        cursorStyle={cursor}
        locale={lang}
        minZoom={2}
        refreshExpiredTiles={true}
        onLoad={() => {
          startTransition(() => setLoaded(true));
        }}
        // hash
        {...viewport}
        onClick={(e: any) => {
          if (!router.pathname.includes('/create-initiative')) {
            router.push('/');
            setSelected(null);
          }
        }}
      >
        {loaded && (
          <>
            <ContextSetter />
            <AttributionControl
              compact={true}
              position="bottom-left"
              customAttribution={`© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>`}
            />
            <>{children}</>
            <LoadIcons />
            <>{satellite && <Satellite />}</>
            <Suspense fallback={null}>
              <LocationIcon />
            </Suspense>
          </>
        )}
      </MapGL>
    </>
  );
}

Map.Context = ContextProvider;

function ContextSetter() {
  const map = useContext(MapContext);
  const context = useContext(Map.Context);
  const [viewport] = useRecoilState(atoms.viewport);
  const [label, setLabel] = useRecoilState(atoms.label);

  useEffect(() => {
    if (map) {
      context.map = map;
    } else {
      console.log('unmounting');
      context.map = undefined;
    }
    return () => {
      if (!map) {
        console.log('unmounting');
        context.map = undefined;
      }
    };
  }, [map, context]);

  useEffect(() => {
    const d = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [100, 60] },
        },
      ],
    } as GeoJSON.FeatureCollection;

    if (map) {
      const r = map.queryRenderedFeatures(undefined, {
        layers: ['russia-is-a-terrorist-state'],
      });

      if (r?.[0]?.geometry) {
        const col = {
          type: 'FeatureCollection',
          features: r.map((d) => ({
            type: 'Feature',
            geometry: d.geometry,
            properties: {},
          })),
        } as any;
        const l = centroid(col);
        const w = !!within(l, col)?.features?.length;
        if (w) {
          setLabel({ type: 'FeatureCollection', features: [l] });
        } else {
          setLabel(d);
        }
      } else {
        setLabel(d);
      }
    }
  }, [viewport]);

  return null;
}
