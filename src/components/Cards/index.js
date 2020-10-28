import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Paper, Typography, useTheme } from '@material-ui/core'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { useUser } from 'reactfire'
import { usePrevious } from 'global/Hooks'
import { Route, useParams, useHistory, useLocation } from 'react-router-dom'
import { useQuery, useMutation, useLazyQuery } from '@apollo/client'
import { getInitiative, addVisitMutation, lastInitiatives } from 'global/Queries'
import * as Atoms from 'global/Atoms'
import SwipeableViews from 'react-swipeable-views'
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils'
import { querySize } from 'config'
import Initiative from './Initiative/'
import CreateInitiative from 'components/Cards/CreateInitiative'
import Explore from './Explore'
import LoadMore from  './LoadMore'
import { nearbyInitiatives, ownInitiatives } from 'global/Queries'
import { reverseArray, getFeed, rearrangeCards, explore } from 'global/Misc'

const EnhancedSwipeableViews = virtualize(SwipeableViews)

const useStyles = makeStyles((theme) => ({
  swipeableViews:{
    minHeight: "250px",
    minWidth: "100%",
    zIndex: 10,
    [theme.breakpoints.up('sm')]: {
      maxWidth: "400px",
		},
  },
  slide: {
    overflow:'visible', 
    height:'250px', 
    minHeight: "250px", 
    minWidth: "100%",
    zIndex: 10
  },
  sidebar: {
    marginTop: `100%`,
    width: "100%",
    maxHeight: `100%`,
    minHeight: "100%",
    bottom: "0",
    right: "0",
    minHeight: "250px",
    zIndex: 16,
    position: "absolute",
    overflow: "visible",
    [theme.breakpoints.up("sm")]: {
      marginTop: 0,
      width: "50%",
      maxWidth: 400,
      justify: "flex-end",
      float: "right"
    }
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
}))

const InitiativeFeed = ({ mapRef, loaded, getMarker }) => {
  const [slideIndex, setSlideIndex] = useRecoilState(Atoms.indexAtom)
  const classes = useStyles()
  const { initiativeID } = useParams()
  const [next, setNext] = useRecoilState(Atoms.nextAtom)
  const [last, setLast] = useRecoilState(Atoms.lastAtom)
  const history = useHistory()
  const [loadMoreLast, setLoadMoreLast] = useRecoilState(Atoms.loadMoreLast)
  const [loadMoreNext, setLoadMoreNext] = useRecoilState(Atoms.loadMoreNext)
  const user = useUser()
  const [addVisit] = useMutation(addVisitMutation)
  const [feed, setFeed] = useRecoilState(Atoms.initiativeFeed)
  const [location] = useRecoilState(Atoms.locationAtom)
  const locationRef = useRef(location)
  const [own, setOwn] = useRecoilState(Atoms.ownAtom)
  const view = useRecoilValue(Atoms.viewAtom)
  const [offset, setOffset] = useRecoilState(Atoms.offsetAtom)
  //const [baseIndex, setBase] = useRecoilState(Atoms.baseAtom)
  const [lockKeys, setLock] = useRecoilState(Atoms.lockKeys)
  
  useEffect(()=>{
    function Keys (event) {
      if(!lockKeys){
        const callback = {
          "ArrowLeft"  : ()=>setSlideIndex(i=>i-1),
          "ArrowRight" : ()=>setSlideIndex(i=>i+1),
          "Left"  : ()=>setSlideIndex(i=>i-1),
          "Right" : ()=>setSlideIndex(i=>i+1)
        }[event.key]?.()
      }
    }
    window.addEventListener('keydown', Keys);
    return ()=>{
      window.removeEventListener('keydown', Keys);
    }
  },[lockKeys])

  useEffect(()=>{
    locationRef.current = location
  }, [location])



  const varsNext = useRef({ 
    variables: {
      nearInitiativesInput:{ 
        point: location?[location.longitude, location.latitude]:Object.values(view), 
        limit: querySize,
        ...(user&&!user.isAnonymous? { user: user.uid }: {}) 
      }
    },
    fetchPolicy: "no-cache"
  })
  const { loading:nextLoading, data:nextData, refetch:refetchNext } = useQuery(nearbyInitiatives, varsNext.current);

  const varsOwn = useRef({ 
    variables: {
      nearInitiativesInput:{ 
        point: location?[location.longitude, location.latitude]:Object.values(view), 
        minDistance: 0, 
        own: true,
        user: user.uid
      }
    }
  })
  const { loading:ownLoading, data:ownData, refetch:refetchOwn } = useQuery(ownInitiatives, varsOwn.current);
  
  const varsLast = useRef({ 
    variables: {
      user: user.uid,
      limit: querySize
    }
  })
  const { loading:lastLoading, data:lastData, fetchMore:fetchMoreLast } = useQuery(lastInitiatives, varsLast.current);
  
  const [loadInitiative, { called, loading, error, data:initiative }] = useLazyQuery(getInitiative);
  
  //Load next
  useEffect(()=>{
    //Upload next values
    if( !nextLoading && loadMoreNext ){
      setLoadMoreNext(false)
      refetchNext({ 
        variables: {
          nearInitiativesInput:{ 
            point: location?[location.longitude, location.latitude]:Object.values(view), 
            limit: querySize,
            ...( user && !user.isAnonymous? { user: user.uid }: {}) 
          }
        }
      })
    }
  },[ nextLoading, loadMoreNext]) 
  
  //Loadlast
  useEffect(()=>{
    //load last initiatives
    if(last.features.length>0 && loadMoreLast ){
      setLoadMoreLast(false)
      //console.log('try fetch more last')

      fetchMoreLast({
        variables: {
          user: user.uid,
          limit: querySize,
          ...(last.features?.[0]?.visits?.[0] ?{startAt: last.features[0].visits[0].createdAt}:{})
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult || fetchMoreResult.lastInitiatives.length===0) {
            return prev;
          }
          return Object.assign({}, prev, {
            lastInitiatives: [...prev.lastInitiatives, ...fetchMoreResult.lastInitiatives]
          });
        }
      })
    }
  },[next, last, loadMoreLast])

  //Update global states
  useEffect(()=>{
    if(nextData && !nextLoading && lastData && !lastLoading && ownData && !ownLoading ) {
      setLast({type:"FeatureCollection", features: reverseArray(lastData.lastInitiatives)})
      setNext({type:"FeatureCollection", features: nextData.nearInitiatives.filter((o) => last.features.map(f=>f.properties.uid).indexOf(o.properties.uid) === -1) })
      setOwn({type:"FeatureCollection", features: ownData.ownInitiatives})
    }
  },[nextData, nextLoading, lastData, lastLoading, ownData, ownLoading])
  
  useEffect(()=>{
    const index = feed.map(f=>f.properties.uid).indexOf(initiativeID)
    if(initiativeID && index===-1 && initiativeID!=='explore'){
      console.log('forward somewhere')
      loadInitiative({variables:{UID:initiativeID}})
    }else{
      //setLoadMoreNext(true)
      //setLoadMoreLast(true)
      // if(feed[index].properties.uid!==initiativeID){
      //   console.log('redirect to other')
      // }
    }

  }, [])


  //Set feed when one initiative selected
  useEffect(()=>{
    // Handling special initiatives
    if(initiative?.initiative){
      setFeed([initiative.initiative])
      setSlideIndex(1)
      const map = mapRef.current.getMap()
      setTimeout(()=>map.flyTo({ center:initiative.initiative.geometry.coordinates, offset: [0, -125], zoom: 16 }),1000)
    }else if(error){
      //setSlideIndex(baseIndex)
      console.log('error special selected', error)
    }
  },[initiative?.initiative, error, explore])

  //Fly to selected
  useEffect(()=>{
    if( initiativeID==='explore' && feed.length!==1 ){
      if(locationRef.current){
        const map = mapRef.current.getMap()
        const center = [locationRef.current.longitude, locationRef.current.latitude]
        map.flyTo({ center, offset: [0, -125], zoom: 16 })    
      }
    }else{
      const map = mapRef.current.getMap()
      const center = feed.find(f=>f.properties.uid===initiativeID)?.geometry?.coordinates
      if(center) map.flyTo({ center, offset: [0, -125], zoom: 16 })
    }
  }, [ mapRef, initiativeID, feed])

  //Update feed
  useEffect(()=>{
    //Here we update feed after new data is loaded
    setFeed(prev=>{
      //console.log(prev, slideIndex, offset)
      if(prev.length===1 && prev[0]?.properties.uid!=='explore'){
        //leave the same feed
        return prev
      }else{
        //console.log('setFeed')

        const newFeed = getFeed({ next, last })
        return newFeed.length>1 && !loading ? newFeed : prev
      }
    })
  },[ next, last, loading ])

  // useEffect(()=>{
  //   setBase(offset + feed.map(f=>f.properties.uid).indexOf('explore'))

  // },[offset, feed])

  useEffect(()=>{
    //Load more last or next features on the end of the  list
    const baseIndex = offset + feed.map(f=>f.properties.uid).indexOf('explore') || 0
    const entry = feed[baseIndex+slideIndex]
    if(entry){
      //Regular swipes
      if(feed.length!==1){
        //console.log('explore', feed)
        history.push(`/initiative/${entry.properties.uid}`)
      }
      if(baseIndex!==0 && baseIndex - offset + slideIndex<=3){
        //Swipe near the back edge of previous initiatives
        setLoadMoreLast(true)
      }
      if( next.features.length==2){
        //Swipe near the front edge of previous initiatives
        setLoadMoreNext(true)
        console.log('load  next')
      }
    }else if(feed.length!==1){
      //Swipes on the edge cases
      if(slideIndex>0){
        setLoadMoreNext(true)
        const lastFeature = feed[baseIndex+slideIndex-1]
        if(lastFeature && lastFeature.properties.uid!=='explore'){
          //This is to clear the feed, when everything new is watched
          addVisit({
            "variables": {
              "visit": {
                "initUID": lastFeature.properties.uid,
                "user": user.uid
              }
            }
          })
          setLoadMoreLast(true)
          setLoadMoreNext(true)
          setOffset(o=>o-1)
          console.log('finished', offset)
        }
        setSlideIndex(i=>i-1)
      }else{
        setLoadMoreLast(true)
        setSlideIndex(i=>i+1)
      }
    }else{
      console.log('ind',slideIndex)
      if(slideIndex!==0 && feed.length!==1){
        console.log('setFeed')
        setFeed(getFeed({last, next}))
      }
    }

  }, [feed, slideIndex])

  const onTransitionEnd = ()=>{
    //Mark initiatives, that were already seen, and rearrange last cards
    const baseIndex = offset + feed.map(f=>f.properties.uid).indexOf('explore') || 0
    if(user && !user.isAnonymous){
      if( slideIndex+offset >1){
        const previous = feed[baseIndex + slideIndex - 1]
        if(previous && previous.properties.uid!=='explore'){
          const { uid } = previous.properties
          addVisit({
            "variables": {
              "visit": {
                "initUID": uid,
                "user": user.uid
              }
            }
          })
          rearrangeCards({ uid, setNext, setLast })
          setOffset(o=>o-1)
        }
      }
    } 
  }

  const slideRenderer = ({key, index})=>{
    const baseIndex = offset + feed.map(f=>f.properties.uid).indexOf('explore') || 0
    //if(feed.map(f=>f.properties.uid).indexOf('explore')){
      const entry = feed[baseIndex+index]
      if( entry && entry.properties.uid==='explore' ){
        return <Explore mapRef={mapRef} key={key} />
      }else if( entry ){
        return <Initiative initiative={entry} mapRef={mapRef} key={key}/>   
      }else{
        return <LoadMore key={key} />
      }
    /*}else{
      if(slideIndex==index&&feed[0].properties.uid!=='explore'){
        return <Initiative initiative={feed[0]} mapRef={mapRef} key={key}/>   
      }else if(feed[0].properties.uid!=='explore'){
        return <Explore mapRef={mapRef} key={key} />    
      }else{
        return <LoadMore key={key} />
      }
    }*/
  }
  return <Box className={classes.sidebar}> 
    <EnhancedSwipeableViews
      overscanSlideBefore={2}
      overscanSlideAfter={1}
      index={slideIndex}
      onTransitionEnd={onTransitionEnd}
      onChangeIndex={(i)=>{
        setSlideIndex(i)
        if(feed.length===1){
          console.log('reload')
          setFeed(getFeed({last,next}))
        }
      }}
      slideRenderer={slideRenderer}
      slideClassName="swipeSlide"
      style={{overflow: 'visible', position:'absolute', bottom: 0}}
      className={classes.swipeableViews}
      slideClassName={classes.slide}
      enableMouseEvents
      resistance
    />
  </Box>
}

export default ({ mapRef, loaded, getMarker }) => {
  const setIsCreating = useSetRecoilState(Atoms.creatingAtom)
  const history = useHistory()
  
  return (<>
    <Route path='/initiative/:initiativeID' >
      <InitiativeFeed mapRef={mapRef} loaded={loaded} getMarker={getMarker} />
    </Route>
    <Route path="/create-initiative" 
      render={()=>loaded && 
      <CreateInitiative 
        getMarker={getMarker} 
        loaded={loaded} 
        mapRef={mapRef} 
        cancel={()=>{setIsCreating(false); history.push('/') }} 
      />}
    />
  </>)
}
