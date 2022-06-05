import { lazy, Suspense } from 'react';
import { MapContext } from  '@urbica/react-map-gl'

const Sources = lazy(()=>import('./Sources'));
const Layers = lazy(()=>import('./Layers'));

export default function MapContents(){
  return <>
    <Suspense fallback={null}>
      <Suspense fallback={null}>
        <MapContext.Consumer>
          {(map) => map && <>
            <Sources {...{map}}/>
            <Layers {...{map}}/>
          </> }
        </MapContext.Consumer>
      </Suspense>

    </Suspense>
  </>
}
