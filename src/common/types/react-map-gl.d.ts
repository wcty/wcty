declare module '@urbica/react-map-gl' {

  export default class MapGL extends React.Component<MapGLProps, any> {}
  export class AttributionControl extends React.Component<any & any, any> {}
  export class Layer extends React.Component<AnyLayer, any> {}
  export class Source extends React.Component<AnySource, any> {}
  export class CustomLayer extends React.Component<{layer:mapboxgl.CustomLayerInterface}, any> {}
  export class FeatureState extends React.Component<FeatureStateProps, any> {}
  export class Filter extends React.Component<FilterProps, any> {}
  export class Image extends React.Component<ImageProps, any> {}
  export class Popup extends React.Component<PopupProps, any> {}

  type PopupProps = {
    children: React.ReactNode
    latitude: number,
    longitude: number,
    anchor?: 'top'|'bottom'|'left'|'right'|'top-left'|'top-right'|'bottom-left'|'bottom-right'
    className?: string
    closeButton?: boolean
    closeOnClick?: boolean
    maxWidth?: string
    offset?: number[]
    onClose?: Function
  }

  type ImageProps = {
    id: string
    image: HTMLImageElement| ImageData| string
    pixelRatio?: number
    sdf?: boolean
  }

  export class MapContext extends React.Context<mapboxgl.Map> {
    static Consumer: IntrinsicAttributes
    static children?: ((map:mapboxgl.Map)=>void)
  }

  export interface Viewport {
    latitude: number
    longitude: number
    zoom: number
  }

  type AnySource = {id?:string,volatile?:boolean}&(mapboxgl.GeoJSONSourceRaw|mapboxgl.VectorSource|mapboxgl.RasterSource)  

  type Specs = import('./map-feature-types').Specs

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

  type LayerComponent<K> = {
    [K in keyof Specs]:{
      'source-layer'?: K
      before?: string, 
      onClick?:	(e: FeatureProps<Specs[K]> & mapboxgl.MapMouseEvent & mapboxgl.EventData)=>void 
      onEnter?: (e: FeatureProps<Specs[K]> & mapboxgl.MapMouseEvent & mapboxgl.EventData)=>void 
      onHover?: (e: FeatureProps<Specs[K]> & mapboxgl.MapMouseEvent & mapboxgl.EventData)=>void
      onLeave?: Function
    }
  }[K]

  type AnyLayer = LayerComponent<keyof Specs> & (mapboxgl.CircleLayer|mapboxgl.LineLayer|mapboxgl.RasterLayer|mapboxgl.FillLayer|mapboxgl.FillExtrusionLayer|mapboxgl.HeatmapLayer|mapboxgl.SymbolLayer)

  type FeatureStateProps = {
    id: string|number
    source: string
    sourceLayer?: string
    state: Object
  }

  type FilterProps = {
    filter: any
    layerId: string
    validate?: boolean
  }

  type AttributionControlProps = {
    compact: boolean
    customAttribution: string | Array<string>
    position: 'top-left'| 'top-right'| 'bottom-left'| 'bottom-right'
  }

  export type ViewportChangeMethodProps =	'jumpTo'| 'easeTo'| 'flyTo'| undefined

  interface MapGLProps {
    latitude: number
    longitude: number
    zoom: number
    accessToken?:	string|null
    antialias?:	boolean
    attributionControl?:	boolean
    bearing?:	number
    bearingSnap?:	number
    bounds?:	LngLatBoundsLike|null
    boxZoom?:	boolean
    children?: React.ReactNode;
    className?:	string|null
    collectResourceTiming?:	boolean
    crossSourceCollisions?:	boolean
    cursorStyle?:	string|null
    doubleClickZoom?: boolean
    dragPan?:	boolean
    dragRotate?:	boolean
    fadeDuration?:	number
    failIfMajorPerformanceCaveat?:	boolean
    hash?:	boolean
    keyboard?:	boolean
    localIdeographFontFamily?:	boolean
    locale?:	string|null
    logoPosition?:	'top-left'|'top-right'|'bottom-left'|'bottom-right'| undefined
    mapStyle?:	string|Style
    maxBounds?:	LngLatBoundsLike
    maxTileCacheSize?:	number
    maxZoom?:	number
    minZoom?:	number
    onLoad?:	Function
    onClick?:	Function
    onViewportChange?:	(viewport: Viewport) => void
    pitch?:	number
    pitchWithRotate?:	boolean
    preserveDrawingBuffer?:	boolean
    refreshExpiredTiles?:	boolean
    renderWorldCopies?:	boolean
    scrollZoom?:	boolean | Object
    showTileBoundaries?:	boolean
    style?:	{ [CSSProperty: string]: any }
    trackResize?:	boolean
    transformRequest?:	( url: string, resourceType: string ) => { url: string, headers?: Object, credentials?: string }
    viewportChangeMethod?:	ViewportChangeMethodProps
    viewportChangeOptions?:	AnimationOptions
  }
}

