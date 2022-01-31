import type { Map } from 'mapbox-gl'
import { createContext } from 'react'

export default createContext({map:undefined as Map|undefined})
