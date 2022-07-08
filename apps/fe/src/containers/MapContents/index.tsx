import { lazy, Suspense } from 'react';
import { MapContext } from  '@urbica/react-map-gl'
import { MapboxGeoJSONFeature } from 'mapbox-gl';

const Sources = lazy(()=>import('./Sources'));
const Layers = lazy(()=>import('./Layers'));

export function waitForFeatures(func: ()=>MapboxGeoJSONFeature[]|null){

  return new Promise<MapboxGeoJSONFeature[]>((resolve) => {
    (function iter(f: ()=>MapboxGeoJSONFeature[]|null, prev:MapboxGeoJSONFeature[]|null, iterations){
      const features = f();
      if((JSON.stringify(prev)!==JSON.stringify(features) || !features?.length) && iterations<20){
        setTimeout(()=>iter(f, features, iterations+1), 250)
      }else{
        resolve(features||[])
      }
    })(func, [], 0)
  })
}

export function waitForLoaded(func: ()=>boolean){

  return new Promise<boolean>((resolve) => {
    (function iter(f: ()=>boolean, iterations:number){
      const isLoaded = f();
      if(!isLoaded && iterations<20){
        setTimeout(()=>iter(f, iterations+1), 250)
      }else{
        resolve(true)
      }
    })(func, 0)
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
