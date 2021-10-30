import { atom } from 'recoil'
import { useI18nDictionary, User, useUserData } from 'common'
import { AppWrapper, GlobalStyle } from './styles'
import { useDeviceSelectors } from 'react-device-detect';
import DesktopVersion from 'containers/Desktop/'
import MobileVersion from 'containers/Mobile/'

export default function App() {
  const [{isMobile}, data] = useDeviceSelectors(window.navigator.userAgent)
  useUserData()
  useI18nDictionary()
  
  return <>
    <GlobalStyle/>
    <AppWrapper>
      {isMobile ? <MobileVersion/>: <DesktopVersion/> }
    </AppWrapper>
  </>
}

App.user = atom({
  key: 'user',
  default: undefined as User,
});
