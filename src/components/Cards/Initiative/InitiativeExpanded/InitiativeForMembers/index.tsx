import SwipeableViews from 'react-swipeable-views';
import { useState } from 'react'
import { withStyles, useTheme } from '@material-ui/core/styles';
import { Divider, Tabs, Tab, Typography, Box} from '@material-ui/core';
import { atoms, useI18n } from 'misc'
import { Route } from 'react-router-dom'
import InitiativeChat from './InitiativeChat'
import InitiativeTopic from './InitiativeChat/InitiativeTopic'
import { InitiativeFieldsFragment } from 'generated';
import { useRecoilValue } from 'recoil';
import s from './styles.module.scss'

function TabPanel({ children=<></> as React.ReactNode, value='' as string|number, index=0 as string|number, ...other }) {

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      style={{paddingTop: '0.25rem'}}
      {...other}
      key={index}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index:string|number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const AntTabs = (withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
}) as (v:any)=>any)(Tabs);

const AntTab = (withStyles((theme:any) => ({
  root: {
    textTransform: 'none',
    minWidth: 36,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(0),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
})) as (v:any)=>any)((props:{label:string}) => <Tab {...props} />);

export default function FullWidthTabs({initiative}:{initiative:InitiativeFieldsFragment}) {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const i18n = useI18n()
  const user = useRecoilValue(atoms.user)

  const handleChange = (event:any, newValue:number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index:number) => {
    setValue(index);
  };


  return (<>
    {user && initiative.members.find(m=>m.user_id===user.id) && 
      <Route path={'/initiative/:initiativeID/post/:postID'} >
        <InitiativeTopic initiative={initiative} />
      </Route>
    }
    <div className={s.root}>
      <Divider/>
      <Box>
        <AntTabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <AntTab label={i18n('initiativeGroupChat')} {...a11yProps(0)} />
          <AntTab label={i18n('initiativeGroupMembers')} {...a11yProps(1)} />
          <AntTab label={i18n('initiativeGroupProjects')} {...a11yProps(2)} />
          <AntTab label={i18n('initiativeGroupResources')} {...a11yProps(3)} />

        </AntTabs>
      </Box>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{paddingTop:0}}
      >
        <TabPanel key={0} value={value} index={0} dir={theme.direction} className={s.tab}>
            {/* <InitiativeChat initiative={initiative}/> */}
        </TabPanel>
        <TabPanel key={1} value={value} index={1} dir={theme.direction} className={s.tab}>
            <Typography variant="h6"> 
              {i18n('initiativeGroupMembers')}
            </Typography>
            <Typography variant="caption"> 
              In active development
            </Typography>
        </TabPanel>
        <TabPanel key={2} value={value} index={2} dir={theme.direction} className={s.tab}>
          <Typography variant="h6"> 
            {i18n('initiativeGroupProjects')}
          </Typography>
          <Typography variant="caption"> 
            In active development
          </Typography>
        </TabPanel>
        <TabPanel key={3} value={value} index={3} dir={theme.direction} className={s.tab}>
          <Typography variant="h6"> 
            {i18n('initiativeGroupResources')}
          </Typography>
          <Typography variant="caption"> 
            In active development
          </Typography>
        </TabPanel>
      </SwipeableViews>
    </div>
  </>
  );
}
