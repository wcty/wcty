import { Helmet } from "react-helmet";

export default function Fonts(){
  return <Helmet>
    <link href='https://api.mapbox.com/mapbox-gl-js/v2.5.1/mapbox-gl.css' rel='stylesheet' />
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" cross-origin/>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=Montserrat:wght@400;600&display=swap" rel="stylesheet"/>     
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>     
  </Helmet>
}