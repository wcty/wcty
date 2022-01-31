import { useState, useEffect, MutableRefObject, useRef, useLayoutEffect, useCallback, RefObject } from 'react'
import { useRecoilState } from 'recoil'
import { atoms, auth, mapboxToken } from 'common'
import { useUserQuery } from 'generated'
import { useRouter } from 'next/router'
import { useNhostAuth } from '@nhost/react-auth'


export * from './useUploader'
export * from './usePushNotifications'

export function useUser(){
  const [user, setUser] = useRecoilState(atoms.user)
  return user
}

const defaultSettings = {
  enableHighAccuracy: false,
  timeout: Infinity,
  maximumAge: 0,
};

export const useGeolocation = (watch = false, settings = defaultSettings) => {
  type Position = {
    latitude: number
    longitude: number
    // accuracy: number
    // speed: number|null
    // timestamp: number
  }
  const [position, setPosition] = useState<Position|undefined>(undefined);
  const [error, setError] = useState<string|null>(null);

  const onChange:PositionCallback = ({coords, timestamp}) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
      // accuracy: coords.accuracy,
      // speed: coords.speed,
      // timestamp,
    });
  };

  const onError:PositionErrorCallback = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    if (!navigator || !navigator.geolocation) {
      setError('Geolocation is not supported');
      return;
    }

    let watcher = null as null|number;
    if (watch) {
      watcher =
        navigator.geolocation.watchPosition(onChange, onError, settings);
    } else {
      navigator.geolocation.getCurrentPosition(onChange, onError, settings);
    }

    return () => {watcher && navigator.geolocation.clearWatch(watcher)};
  }, [
    settings.enableHighAccuracy,
    settings.timeout,
    settings.maximumAge,
  ]);

  return (!error&&position) && position;
};

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({width: 0, height: 0});
  
  useEffect(() => {
    function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height
      };
    }
    setWindowDimensions(getWindowDimensions());
    
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export function useAddress(coords:[ number, number ], watch = false) {

  const [addressString, setAddress] = useState<string>()
  const lang = useLang()  
  useEffect(()=>{

    const controller = new AbortController();
    if(coords){
      const { signal } = controller;
      if((!addressString||watch)&&coords){
        const request = async ()=>{
          try{
            const response = await fetch(
              `https://api.mapbox.com/geocoding/v5/mapbox.places/${coords[0]},${coords[1]}.json`+
              `?access_token=${mapboxToken}&language=${lang}`, { signal })

            if(signal.aborted) return;
            const address:any = await response.json()

            if(signal.aborted) return;
            
            setAddress(
              address.features[0]?.properties.address ?
              (address.features[0]?.properties.address+', ') :
              ''+(address.features[1]?address.features[1].text:'') +
              ', '+(address.features[3]?address.features[3].text:'')
            )
            return;
          }catch(e){
            console.log(e)
          }
        }
        request()
      }
    }
    return ()=>{
      //controller.abort()
    }
  }, [addressString, setAddress, coords])

  return addressString
}

export function usePrevious<T>(
  value: T,
): MutableRefObject<T | undefined>['current'] {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

export function useLayout(){
  const { width, height } = useWindowDimensions()
  return (width<960)? 'mobile': 'desktop'
}

interface Size {
  width: number
  height: number
}

interface Ref {
  ref: RefObject<HTMLDivElement>
}

// Hook to get the size of a ref and to update it when the ref changes
export const useSize = (): Size&Ref => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  const updateSize = useCallback(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth)
      setHeight(ref.current.offsetHeight)
    }
  }, [ref])

  // useLayoutEffect(() => {
  //   updateSize()
  // }, [updateSize])

  useEffect(() => {
    updateSize()
  }, [updateSize])

  useEffect(() => {
    if(ref.current) {
      const observer = new ResizeObserver((entries) => {
        updateSize()
      })
      observer.observe(ref.current)
      return () => observer.disconnect()
    }
  }, [ref, updateSize])

  return { ref, width, height }
}

export function useLang(){
  const locale = useRouter().locale
  
  return (locale==='pseudo'? 'en': locale) || 'en' 
}

export function useQuery(){
  const query = useRouter().query
  return query
}
