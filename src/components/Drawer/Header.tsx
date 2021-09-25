import { Suspense, useState } from 'react'
import { useTheme } from '@material-ui/core/styles'
import { ListItem, ListItemAvatar, ListItemText, Toolbar, Avatar, CircularProgress } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { useRecoilState } from 'recoil';
import { ReactComponent as Logo } from 'assets/images/wecityLogoBlack.svg'
import { useHistory, Link } from 'react-router-dom'
import { atoms, useI18n, auth } from 'misc'
import { StyledAvatar, StyledCircularProgress } from './styles';

const LogIn = (props:any)=>{
  const i18n = useI18n()
  const [user]:any = useRecoilState(atoms.user);
  const history = useHistory()


  return !user ?
    <ListItem button style={{height:'5rem'}} onClick={()=>{console.log('google signin'); history.push('/login'); props.setState(false)}}>        
      <ListItemAvatar>
        <AccountCircle color='primary'/>
      </ListItemAvatar> 
      <ListItemText 
        secondary={i18n('enter')}
        secondaryTypographyProps={{style: {color: "#ffffff", fontWeight: "lighter"}}}
      />
    </ListItem>
    :
    <ListItem>
      <ListItemAvatar>
        <StyledAvatar
          alt={user?.display_name||undefined}
          src={user?.avatar_url||undefined}
          onClick={()=>history.push('/settings')} 
        />
      </ListItemAvatar>         
      <ListItemText 
        primary={user?.display_name}
        secondary={i18n('exit')}
        primaryTypographyProps={{component: Link, to: "/settings", style: {color: "#ffffff", fontWeight: "normal", textTransform: "uppercase", textDecoration:"none"}}}
        secondaryTypographyProps={{component: Link, to:"#", onClick: ()=>auth.logout(), style: {color: "#ffffff", fontWeight: "lighter"}}}
      />
    </ListItem>
}

export default (props:any)=>{
  const i18n = useI18n()
  const [showBar] = useRecoilState(atoms.showBarAtom)
  const [drawer, setDrawer] = useState(false)
  const theme = useTheme()

  return (
    <>
      <Toolbar >
        <Logo style={{ height:"20px"}}></Logo>
      </Toolbar>
      <div
        style={{backgroundColor: theme.palette.primary.dark }}
      >
        <Suspense fallback={ 
          <ListItem>
            <ListItemAvatar>
              <StyledCircularProgress size={24}/>
            </ListItemAvatar>         
            <ListItemText 
              primary={i18n('loading')}
              primaryTypographyProps={{style: {color: "#ffffff", fontWeight: "lighter"}}}
            />
          </ListItem>
        }>
          <LogIn {...props} />
        </Suspense>
      </div>
    </>
    )
}