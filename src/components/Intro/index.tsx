import { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { ArrowRightAlt } from '@material-ui/icons'
import { Box, Paper, Divider, Toolbar, MobileStepper, IconButton, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { ReactComponent as Logo } from 'assets/images/wecityLogoBlack.svg'
import WecityGroups from 'assets/images/wecity_groups_512.png'
import WecityInterfacesZoomed from 'assets/images/wecity_interfaces_zoomed.png'
import WecityChat from 'assets/images/wecity_chat_512.png'
import TAB from 'assets/images/logos/tab.png'
import CreativeEurope from 'assets/images/logos/creativeeurope.png'
import UCF from 'assets/images/logos/ucf.png'
import { useI18n, atoms } from 'shared'
import LangSelect from './LangSelectShort'
import SwipeableViews from 'react-swipeable-views';
import { useRecoilState } from 'recoil'
import { Intro, Sidebar, Stepper, Wrapper } from './styles'
import App from 'App'


export default ()=> {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 4
  const theme = useTheme()
  const i18n = useI18n()
  const [user] = useRecoilState(App.user)
  const history = useHistory()

  return <>
      <Sidebar> 
        <Intro>
          <Toolbar >
            <Logo style={{ height:"20px"}}></Logo>
            <Box style={{marginLeft: 'auto'}}><LangSelect /></Box>
          </Toolbar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={(i)=>setActiveStep(i)}
            enableMouseEvents
          >
            <Wrapper>
              <img src={WecityGroups} style={{width:'70%', position:'relative', marginLeft:'auto', marginRight:'auto' }} alt="Networking" />
              <Typography style={{position:"relative", marginTop:'1rem'}} variant="h6">{i18n('introGreetings')}</Typography>
              <Typography style={{position:"relative"}} variant="body1">{i18n('introGreetingsDescription')}</Typography>
            </Wrapper>
            <Wrapper>
              <div style={{position:"relative", width:"100%", height: 250}}>
                <svg width="250px" height="250px" style={{position:'absolute', marginLeft:'auto', marginRight:'auto', left:"0", right:"0", top:0}} >
                  <circle cx="125" cy="125" r="125" fill="#93CBA0" />
                </svg>
                <img src={TAB} style={{width:'40%', position:'absolute', marginLeft:'auto', marginRight:'auto', left:"0", right:"0", top:"8.5rem"}} alt="TAB" />
                <img src={UCF} style={{width:'30%', position:'absolute', left:"2rem", top:"2rem"}} alt="UCF" />
                <img src={CreativeEurope} style={{width:'40%', position:'absolute', right:"2rem", top:"2rem"}} alt="CreativeEurope" />
              </div>
              <Typography style={{position:"relative", marginTop:'1rem'}} variant="h6">{i18n('introPartners')}</Typography>
              <Typography style={{position:"relative"}} variant="body1">{i18n('introPartnersDescription')}</Typography>
            </Wrapper>
            <Wrapper>
              <img src={WecityInterfacesZoomed} style={{width:'80%', position:'relative', marginLeft:'auto', marginRight:'auto' }} alt="Interfaces" />
              <Typography style={{position:"relative", marginTop:'1rem'}} variant="h6">{i18n('introFunctions')}</Typography>
              <Typography style={{position:"relative"}} variant="body1">{i18n('introFunctionsDescription')}</Typography>
            </Wrapper>
            <Wrapper>
              <img src={WecityChat} style={{width:'80%', position:'relative', marginLeft:'auto', marginRight:'auto' }} alt="Interfaces" />
              <Typography style={{position:"relative"}} variant="h6">{i18n('introLogin')}</Typography>
              <Typography style={{position:"relative"}} variant="body1">{i18n('introLoginDescription')}</Typography>
            </Wrapper>           
          </SwipeableViews>
        </Intro>

      </Sidebar>
      <Stepper>
          <Divider style={{ zIndex:15, position: 'relative', opacity: 0.5 }}/>
          <MobileStepper
            steps={maxSteps}
            style={{ 
              position:'absolute', 
              zIndex:10, 
              background:"#ffffff", 
              width: '100%', 
              top: 0,
              boxSizing: "border-box",
              padding: '0.5rem 1.5rem'}}
            position="static"
            variant='dots'
            activeStep={activeStep}
            backButton={undefined}
            nextButton={ 
              <IconButton 
                onClick={()=>{
                  if(activeStep===maxSteps-1) {
                    if( !user ) {
                      console.log(user)
                      //signInWithGoogle(auth)
                    }
                    history.push('/initiative/explore')
                  }
                  setActiveStep(step=>step<maxSteps-1?step+1:0)
                }}
                style={{
                  backgroundColor:theme.palette.primary.dark,
                  color: theme.palette.primary.light
              }}>
                <ArrowRightAlt />
              </IconButton> 
            }
          />
          <IconButton size="medium" 
            onClick={()=>{
              if(activeStep==0 && user ) history.push('/')
              setActiveStep(step=>step>0?step-1:0)
            }}
            style={{position:"absolute", zIndex:15, margin: '0.5rem 1.5rem' }}
          >
            <svg width="24px" height="24px"></svg>
          </IconButton>
        </Stepper>
    </>
}