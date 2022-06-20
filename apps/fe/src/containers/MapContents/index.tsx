import { lazy, Suspense } from 'react';
import { MapContext } from  '@urbica/react-map-gl'
import { MapboxGeoJSONFeature } from 'mapbox-gl';

const Sources = lazy(()=>import('./Sources'));
const Layers = lazy(()=>import('./Layers'));

export function waitForFeatures(func: ()=>MapboxGeoJSONFeature[]|null){

  return new Promise<MapboxGeoJSONFeature[]>((resolve) => {
    (function iter(f: ()=>MapboxGeoJSONFeature[]|null, iterations=0){
      const features = f();
      if(!features?.length && iterations<10){
        setTimeout(()=>iter(f, iterations+1), 500)
      }else{
        resolve(features||[])
      }
    })(func)
  })
}


export default function MapContents(){
  return <>
    <Suspense fallback={null}>
      <MapContext.Consumer>
        {(map) => map && <>
          <Suspense fallback={null}>
            <Sources {...{map}}/>
          </Suspense>
          <Suspense fallback={null}>
            <Layers {...{map}}/>
          </Suspense>
        </> }
      </MapContext.Consumer>
    </Suspense>
  </>
}
