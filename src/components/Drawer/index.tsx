import clsx from 'clsx';
import { SwipeableDrawer, List, Divider, Box, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { MapOutlined, PeopleOutline, SettingsApplicationsOutlined, FeedbackOutlined, InfoOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import LangSelect from './LangSelect'
import { useI18n, atoms } from 'misc'
import Header from './Header'
import { useRecoilValue } from 'recoil';
import s from './styles.module.scss'

export default ({ state, setState }:any)=>{
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const history = useHistory()
  const user = useRecoilValue(atoms.user)
  
  const toggleDrawer = (open:any) => (event:any) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };

  const i18n = useI18n()
  const menuTop = 
    [
      {
        id:'map',
        text: i18n('initiativeMap')
      }, 
      {
        id:'initiatives',
        text: i18n('myInitiatives')
      },
      {
        id: 'settings',
        text:i18n('settings')
      }, 
      {
        id: 'about',
        text:i18n('about')
      },
      {
        id: 'feedback',
        text:i18n('feedback')
      }
    ]


  const list = (anchor:any) => {
    return <>
      <Header {...{state, setState}} />
      <div className={clsx(s.list, {[s.fullList]: anchor === 'top' || anchor === 'bottom' })}>
        <List  
          disablePadding       
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          { user && menuTop.map((val, index) => (
            <ListItem button key={val.id} onClick={()=>{
              if(val.id==='map'){
                history.push('/initiative/explore')
              }else if(val.id==='initiatives'){
                history.push('/initiatives')
              }else if(val.id==='settings'){
                history.push('/settings')
              }else if(val.id==='about'){
                history.push('/intro')
              }else if(val.id==='feedback'){
                history.push('/feedback')
                console.log('feedback')
              }
            }}>
              <ListItemIcon>
                {val.id==='map' && <MapOutlined /> }
                {val.id==='initiatives' && <PeopleOutline /> }
                {val.id==='settings' && <SettingsApplicationsOutlined /> }
                {val.id==='about' && <InfoOutlined/> }
                {val.id==='feedback' && <FeedbackOutlined /> }

              </ListItemIcon>
              <ListItemText primary={val.text} />
            </ListItem>
          ))}
        </List>
        <List 
          disablePadding
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
        <Box style={{padding:'0.5rem 1rem'}}><Divider /></Box>
        </List>
        
        <LangSelect variant="standard" toggleDrawer={()=>{setState(false)}} style={{ padding:'1rem', widht:'100%' }} />
      </div>
    </>
  };

  return (
    <>          
        <SwipeableDrawer
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          disableBackdropTransition={true}//!iOS} 
          disableDiscovery={iOS}
          //backdropelement="test"
        >
          {list('left')}
        </SwipeableDrawer>
    </>
  );
}