import { atom } from 'recoil'
import { useI18nDictionary, useLayout, User, useUserData, useWindowDimensions } from 'common'
import { AppWrapper, GlobalStyle } from './styles'
import { useDeviceSelectors } from 'react-device-detect';
import DesktopVersion from 'containers/Desktop/'
import MobileVersion from 'containers/Mobile/'

export default function App() {

  useUserData()
  useI18nDictionary()
  const layout = useLayout()
  
  return <>
    <GlobalStyle/>
    <AppWrapper>
      { layout==='mobile' ? <MobileVersion/>: <DesktopVersion/> }
    </AppWrapper>
  </>
}

App.user = atom({
  key: 'user',
  default: undefined as User,
});
