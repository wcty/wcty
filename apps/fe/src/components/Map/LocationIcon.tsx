import { Suspense, useContext, useEffect, useRef, useState, useTransition } from 'react'
import { Source, Layer, MapContext } from '@urbica/react-map-gl'
import { Map as MapType, CustomLayerInterface, GeoJSONSource } from 'mapbox-gl'
import { useGeolocation } from 'common'
import { useRouter } from 'next/router'
import Map from './'
import { theme } from '@ui/common'
import { colorToRgba } from '@react-spring/shared'

type PulsingDot = CustomLayerInterface & {
  width:number,
  height: number,
  data: any,
  context?: CanvasRenderingContext2D,
}

const pulsingDot = (map:MapType):PulsingDot =>{
  const size = 60;
  
  // implementation of CustomLayerInterface to draw a pulsing dot icon on the map
  // see https://docs.mapbox.com/mapbox-gl-js/api/#customlayerinterface for more info
  return {
    width: size,
    height: size,
    data: new Uint8Array(size * size * 4),
    context: undefined,

    id: 'pulsingDot',
    type: 'custom',

    // get rendering context for the map canvas when layer is added to the map
    onAdd: function() {
      const canvas = document.createElement('canvas');
      canvas.width = this.width;
      canvas.height = this.height;
      this.context = canvas.getContext('2d')||undefined;
    },
    
    // called once before every frame where the icon will be used
    render: function() {
      const duration = 3000;
      const t = (performance.now() % duration) / duration;
      
      const radius = (size / 2) * 0.5;
      const outerRadius = (size / 2) * 0.7 * t + radius;
      const context = this.context;
      
      if(context){
        // draw outer circle
        context.clearRect(0, 0, this.width, this.height);
        context.beginPath();
        context.arc(
          this.width / 2,
          this.height / 2,
          outerRadius,
          0,
          Math.PI * 2
        );
        context.fillStyle = colorToRgba(theme.colors.secondary).replace(' 1)', (1 - t) + ')');
        context.fill();
        
        // draw inner circle
        context.beginPath();
        context.arc(
          this.width / 2,
          this.height / 2,
          radius,
          0,
          Math.PI * 2
        );
        context.fillStyle = colorToRgba(theme.colors.secondary);
        context.strokeStyle = 'white';
        context.lineWidth = 2 + 4 * (1 - t);
        context.fill();
        context.stroke();
        
        // update this image's data with data from the canvas
        this.data = context.getImageData(
          0,
          0,
          this.width,
          this.height
        ).data;
      }

      // continuously repaint the map, resulting in the smooth animation of the dot
      map.triggerRepaint();
      
      // return `true` to let the map know that the image was updated
      return true;
    }
  }
}

export default function UsePulsingDot (){
  const location = useGeolocation()
  const loadedRef = useRef(false)
  const [loaded, setLoaded] = useState(false)
  const context = useContext(Map.Context)
  const [isPending, startTransition] = useTransition();
  
  useEffect(()=>{
    if(context.map){
      const map = context.map
      if(map && !loaded && !loadedRef.current ){
        map.addImage('pulsing-dot', pulsingDot(map), { pixelRatio: 2 });
        loadedRef.current=true
        startTransition(()=>{ setLoaded(true) })
      }
    }
  },[context.map])
  
  return (loaded && context.map) ? <PointsLayer map={context.map}/>: null
}


function PointsLayer({map}:{map:MapType}){
  const location = useGeolocation()

  return <>
    <Source
      id='points'
      type='geojson'
      data={{
        type: 'FeatureCollection',
        features: location?[
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [location.longitude, location.latitude]
            },
            properties:{}
          }
        ]:[]
      }}
    />
    <Layer
      id='points'
      type='symbol'
      source='points'
      layout={{
        'icon-image': 'pulsing-dot',
      }}
      before='markers'
    />
  </>
}