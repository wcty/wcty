import type { Map } from 'mapbox-gl/index'
import { createContext } from 'react'

export default createContext({map:undefined as Map|undefined})
