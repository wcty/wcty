import { useState, useEffect, MutableRefObject, useRef } from 'react'
import { useRecoilState } from 'recoil'
import { atoms, mapboxToken } from 'common'
import { Map } from 'components'
import App from 'App'

export function useUser(){
  const [user] = useRecoilState(App.user)
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
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export function useAddress(coords:[ number, number ]) {

  const [addressString, setAddress] = useState<string>()

  useEffect(()=>{

    const controller = new AbortController();
    if(coords){
      const { signal } = controller;
      if(!addressString&&coords){
        const request = async ()=>{
          const response = await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${coords[0]},${coords[1]}.json`+
            `?access_token=${mapboxToken}`, { signal })
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
        }
        request()
      }
    }
    return ()=>{
      controller.abort()
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
