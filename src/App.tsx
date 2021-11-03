import { atom } from 'recoil'
import { useI18nDictionary, useLayout, User, useUserData, useWindowDimensions } from 'common'
import { AppWrapper, GlobalStyle } from './styles'
import Routing from 'containers/Routing/'

export default function App() {

  useUserData()
  useI18nDictionary()
  const layout = useLayout()
  
  return <>
    <GlobalStyle/>
    <AppWrapper>
      <Routing/>
    </AppWrapper>
  </>
}

App.user = atom({
  key: 'user',
  default: undefined as User,
});
