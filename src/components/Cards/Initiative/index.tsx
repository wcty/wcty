import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography, IconButton, Box } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { People, LocationOn, ExpandLess } from '@material-ui/icons'
import { useParams } from 'react-router-dom'
import { Helmet } from "react-helmet"
import { atoms, useGeolocation, useI18n } from 'misc'
import distance from '@turf/distance'

import InitiativeExpanded from './InitiativeExpanded'
import addImage from 'assets/images/addImage.png'
import ArrowNavigation from  '../ArrowNavigation'
import { InitiativeFieldsFragment } from 'generated'
import { InitiativeContainer, InitiativeWrapper, Info, InitiativeImg } from './styles'


export default ({ initiative }:{ initiative: InitiativeFieldsFragment })=>{
  //const initiative  = useState(initiativeRef)
  const { initiativeID, postID } = useParams<{initiativeID:string, postID:string}>()
  const location = useGeolocation()
  const [expanded, setExpanded] = useState<boolean>()
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [lockKeys, setLock] = useRecoilState(atoms.lockKeys)
  const i18n = useI18n()

  useEffect(()=>{
    if( !( initiative.id===initiativeID ) && expanded ){
      setExpanded(false)
    }
    if( initiative.id===initiativeID && expanded ){
      setLock(true)
      console.log('locked')

    }
    if( initiative.id===initiativeID && !expanded ){
      setLock(false)
      console.log('unlocked')
    }
  }, [initiative, initiativeID, expanded ])

  useEffect(()=>{
    if(initiative.id===initiativeID && postID){ 
      setExpanded(true) 
    }else{ 
      setExpanded(false) 
    }
  }, [initiativeID, setExpanded])

  return (
    <InitiativeContainer data-expanded={expanded}>
      <InitiativeWrapper data-expanded={expanded}> 
      { !expanded && <ArrowNavigation /> }
      <div id="wrapper">
        <Helmet>
          <title>{"We.city: " + initiative.name}</title>
          <meta property="og:title" content={initiative.name||undefined} />
          <meta property="og:site_name" content="We.city" />
          <meta property="og:description" content={initiative.description||undefined} />
          <meta property="og:url" content={"https://weee.city/initiative/" + initiative.id} />
          <meta property="og:image" content={initiative.image || addImage} />
        </Helmet>

        {/* Header Image */}
        <InitiativeImg
          about="Cover of the initiative"
          style={{backgroundImage: `url(${initiative.image || addImage})`}}
          data-expanded={expanded}
          onClick={()=>{
            console.log('clicked on img')
            if(expanded && initiativeID){
              setIsViewerOpen(true)
              console.log('open', isViewerOpen)
            }else{
              setExpanded(true)
            }
          }}>
        </InitiativeImg>

        {/* Actual Initiative */}
        <Info
          style={{position:'relative'}}
          onClick={()=>{
            console.log('clicked on card')
            setExpanded(!expanded)
          }}>
          {location && initiative.geom.coordinates && (
          <span>
            <LocationOn style={{fontSize: 'large'}} />
            {
              (distance([location.longitude, location.latitude], Object.values(initiative.geom.coordinates)))<1 ? 
              (distance([location.longitude, location.latitude], Object.values(initiative.geom.coordinates))*1000).toFixed(0) +i18n('initiativeDistanceFromMeM'):
              ((distance([location.longitude, location.latitude], Object.values(initiative.geom.coordinates)))<10 ? 
              (distance([location.longitude, location.latitude], Object.values(initiative.geom.coordinates))).toFixed(1) +i18n('initiativeDistanceFromMeKM'):
              (distance([location.longitude, location.latitude], Object.values(initiative.geom.coordinates))).toFixed(0) +i18n('initiativeDistanceFromMeKM'))
            } 
          </span>)}
          {/* <span style={{float:'right'}}> <ExpandLess /></span> */}
          <span style={{marginLeft: location?"2rem":undefined}}>
            <People style={{fontSize: 'large'}} /> 
            {initiative.initiative_members.length}
          </span>
          <Typography variant="h6">
            {initiative.name? initiative.name: "Name is not set"}
          </Typography>
          <IconButton 
            aria-label="return"
            style={{
              position:"absolute", right:'2rem', top:"0rem",
              transitionDuration: '0.3s', transform: expanded?'rotate(180deg)':'rotate(0deg)'
            }}
            onClick={()=>{
              setExpanded(!expanded)
            }}
          >
            <ExpandLess />
          </IconButton>

          {/* Expanded view additions*/}

        </Info>
        { expanded && initiativeID===initiative.id && <InitiativeExpanded initiative={initiative} isViewerOpen={isViewerOpen} setIsViewerOpen={setIsViewerOpen} /> }
      </div>
    </InitiativeWrapper>
  </InitiativeContainer>
)}
