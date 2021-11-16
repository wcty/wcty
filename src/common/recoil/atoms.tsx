import { User } from 'common';
import { atom } from 'recoil';
import { defineLang } from '../i18n'
import Cookies from 'universal-cookie'
import type { FeatureProps, Specs, Viewport, ViewportChangeMethodProps } from '@urbica/react-map-gl';
import type { AnimationOptions } from 'mapbox-gl';

const cookies = new Cookies()

export const lang = atom({
  key: 'language',
  default: defineLang(), 
})

/** 
 * This is a point, around which initiatives/organisations will be searched. 
 * It could be set basing on the actual user location, initial viewport position,
 * or manually set upon user request.
*/
export const focalPoint = atom({
  key: 'userCursor',
  default: undefined as number[]|undefined
}),

user = atom({
  key: 'user',
  default: undefined as User,
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
    viewportChangeMethod?: ViewportChangeMethodProps,
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

export const layers_list = ['initiative', 'organization'] as ('initiative'|'organization')[]

export const layers = atom({
  key: 'mapLayers',
  default: layers_list
})


