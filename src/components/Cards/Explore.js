import React, { useState, useEffect, useMemo, useRef } from 'react'
import {ReactComponent as ActiveMarker} from 'assets/images/markerActive.svg'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography, Box, Button, Card, CardActions, CardContent, CardActionArea, useTheme } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { useUser } from 'reactfire'
import { useI18n } from 'global/Hooks'
import { useParams, useHistory } from 'react-router-dom'
import { Helmet } from "react-helmet"
import { useMutation } from '@apollo/client'
import { addVisitMutation, deleteVisitMutation } from 'global/Queries'
import WecityGroups from 'assets/images/wecity_groups_512.png'
import * as Atoms from 'global/Atoms'
import { mapboxConfig } from 'config/index'
import ArrowNavigation from  './ArrowNavigation'
import { setSourceMapRange } from 'typescript'

const useStyles = makeStyles((theme) => ({
  paper:{
    minHeight: "250px",
    minWidth: "100%",
    zIndex: 10,
    [theme.breakpoints.up('sm')]: {
      maxWidth: 400,
		},
  },
  swipeArea:{
    minWidth: "100%",
    [theme.breakpoints.up('sm')]: {
      maxWidth: 400,
      minWidth: "50%",
		},
  },
  img: {
    height: '160px',
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
    margin: "auto",
    verticalAlign: 'middle',
    objectFit: 'cover'
  },
  info: {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  }
}));

export default ({ mapRef })=>{
  const [next] = useRecoilState(Atoms.nextAtom)
  // const [index] = useRecoilState(Atoms.indexAtom)
  const [location] = useRecoilState(Atoms.locationAtom)
  const [feed] = useRecoilState(Atoms.initiativeFeed)
  const classes = useStyles();
  const i18n = useI18n()
  const theme = useTheme()
  const distance = useMemo(()=>next?.features[0]?.properties?.distance?.toFixed(0), [next])
  const history = useHistory()
  const [addressString, setAddress] = useState()
  const [slideIndex, setSlideIndex] = useRecoilState(Atoms.indexAtom)

  useEffect(()=>{
    if(next?.features[0]){
      const coords = next?.features[0]?.geometry.coordinates
      const request = async ()=>{
        const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${coords[0]},${coords[1]}.json?access_token=${mapboxConfig.accessToken}`)
        const address = await response.json()
        setAddress(address.features[0]?.properties.address?
          (address.features[0]?.properties.address+', '+(address.features[1]?address.features[1].text:'')+', '+(address.features[3]?address.features[3].text:'')):
          (address.features[1]?address.features[1].text:'')+', '+(address.features[3]?address.features[3].text:''))
      }
      request()
    }
  }, [next.features[0], setAddress])

  const onStart = ()=>{setSlideIndex(i=>i+1)}
  
  return <div style={{ position:"absolute", padding: '1rem', overflow: 'visible', bottom: 0, width: 'calc( 100% - 2rem )' }}>
  <Paper 
      className={classes.paper} 
      style={{
        cursor: 'pointer', 
        borderRadius: "5px",
        overflowY: 'visible',
        minHeight: '250px',
        maxHeight: '400px',
        width: '100%',
        bottom: "1rem",
        right: "1rem",
        // position: "absolute",
        minWidth: "calc( 100% - 2rem )"
      }}
    >   
      <ArrowNavigation/>
      <div id="wrapper">
        <Helmet>
          <title>{"We.city: explore initiatives" }</title>
          <meta property="og:title" content="Explore initiatives" />
          <meta property="og:site_name" content="We.city" />
          <meta property="og:description" content="Platform for urban networking around common cases" />
          <meta property="og:url" content={"https://weee.city/initiative/explore"} />
          <meta property="og:image" content={WecityGroups} />
        </Helmet>

        {next.features.length>0 ? <Box className={classes.info} 
          style={{position:'relative', textAlign:'center'}}
        >
          <Typography variant="h6">
            { location ? <>Ви знаходитесь тут</> : <>Звідси все почнется</> }
          </Typography>
          <Typography variant="body1">
            { location ? <>
              { next?.features[0]?.properties?.distance && <> 
                Найближча від вас нова ініціатива в {distance<1000?distance+' m':(distance/1000).toFixed(0)+' km'}</> }
              </> : <>
              { next?.features[0]?.properties?.distance && <> 
                Будь ласка, увімкніть геолокацію щоб скористуватися всіма функціями.
                Найближча від Майдану Незалежності нова ініціатива в {distance<1000?distance+' m':(distance/1000).toFixed(0)+' km'}.
               </> }
            </> }
          </Typography>
          <Card variant="outlined" style={{width:'100%'}}>
            <CardActionArea onClick={onStart} style={{background: theme.palette.primary.light}}>
              <CardContent>
                <ActiveMarker style={{margin:'0 auto'}} />
                <Typography variant="body1">
                  {addressString}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActionArea onClick={onStart} style={{background: theme.palette.primary.main, color: theme.palette.primary.light}}>
              <CardActions>
                  <Typography variant="button" style={{margin:'0 auto'}}>
                    Переглянути ініціативу
                  </Typography>
              </CardActions>
            </CardActionArea>
          </Card>
            або
          <Button onClick={()=>history.push('/create-initiative')} variant="outlined" style={{width:'100%', marginTop:'0.2rem'}}>
            Запропонувати нову
          </Button>
        </Box> :        
        <Box className={classes.info} 
          style={{position:'relative', textAlign:'center'}}
        >
          <Typography variant="h6">
            Додайте ініціативу
          </Typography>
          <Typography variant="body1">
            Будь ласка, запропонуйте нову ініціативу - створіть нову відмітку на мапі та  
            можливо саме її підтримають ваші сусіди по місту
          </Typography>
          <Card variant="outlined" style={{width:'100%'}}>
            <CardActionArea onClick={()=>history.push('/create-initiative')} style={{background: theme.palette.primary.light}}>
              <CardContent>
                <ActiveMarker style={{margin:'0 auto'}} />
                <Typography variant="body1">
                  Запропонувати нову ініціативу
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>}
      </div>
  </Paper>
  </div>
}