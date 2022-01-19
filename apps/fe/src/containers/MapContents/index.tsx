import { lazy, Suspense } from 'react';
const Sources = lazy(()=>import('./Sources'));
const Layers = lazy(()=>import('./Layers'));

export default function MapContents(){
  return <>
    <Suspense fallback={null}>
      <Sources/>
      <Suspense fallback={null}>
        <Layers/>
      </Suspense>
    </Suspense>
  </>
}
