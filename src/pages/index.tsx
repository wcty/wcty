import FloatButtons from 'containers/FloatButtons'
import Slides from 'containers/Slides'
import { useI18nDictionary, useLayout, useUserData } from 'common'
import FloatPanel from 'containers/FloatPanel'
import Sidepanel from 'containers/Sidepanel'
import ClientOnly from 'components/ClientOnly'
import Auth from 'components/Auth'

function RootPath(){

  return <>
    <FloatButtons/>
    <FloatPanel/>
    <Slides/>
    <Sidepanel/>
  </>
}

export default RootPath