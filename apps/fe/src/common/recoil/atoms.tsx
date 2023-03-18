import { atom } from 'recoil';
import Cookies from 'universal-cookie'
import type { AnimationOptions } from 'mapbox-gl';
import { UserQuery } from 'generated';
import { Viewport, ViewportChangeMethod } from '@urbica/react-map-gl/src/components/MapGL';

type Specs = import('common/types/map-feature-types').Specs

type FeatureProps<T extends Specs[keyof Specs]> = {
  features: {
    sourceLayer: T['id']
    id: string|undefined
    source: T['table']
    properties: T['properties']
    state: {
      [state:string]:string|number|undefined
    }
    type: "Feature"
    layer: any
    geometry: GeoJSON.Point
  }[]
} 

const cookies = new Cookies()

/** 
 * This is a point, around which initiatives will be searched. 
 * It could be set basing on the actual user location, initial viewport position,
 * or manually set upon user request.
*/
export const focalPoint = atom({
  key: 'userCursor',
  default: undefined as number[]|undefined
}),

user = atom({
  key: 'user',
  default: undefined as UserQuery['users_by_pk'],
});

const defaultFocus:number[]|undefined = cookies.get('focus')

export const viewport = atom({
  key: 'mapViewport',
  default: {
    latitude: defaultFocus?.[1]||50.4501, 
    longitude: defaultFocus?.[0]||30.5234, 
    zoom:15,
    viewportChangeMethod: 'flyTo'
  } as Viewport & { 
    viewportChangeMethod?: ViewportChangeMethod,
    viewportChangeOptions?: AnimationOptions
  }, 
})

export const cursor = atom({
  key: 'mapCursor',
  default: ''
})

export const satellite = atom({
  key: 'mapSatellite',
  default: false
})

export type Entry = (
  GeoJSON.Feature<GeoJSON.Point> &
  Omit<
    FeatureProps<
      Specs[keyof Specs]
    >['features'][number],
    'layer'|'sourceLayer'|'state'|'modified_at'
  >)|null
  
export const selected = atom({
  key: 'mapSelected',
  default: null as Entry
})

export const isSubscribed = atom({
  key: 'isSubscribed',
  default: null as boolean|null
})

export const credentialsLogin = atom({
  key: 'credentialsLogin',
  default: {email:''}  as {email:string, password?:string}
})
