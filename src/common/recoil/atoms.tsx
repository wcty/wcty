import { atom } from 'recoil';
import { defineLang } from '../i18n'

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
})

