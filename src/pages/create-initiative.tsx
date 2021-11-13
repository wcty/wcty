import FloatButtons from 'containers/FloatButtons'
import Creation from 'containers/Creation'
import FloatPanel from 'containers/FloatPanel'
import Sidepanel from 'containers/Sidepanel'
import ClientOnly from 'components/ClientOnly'
import Auth from 'components/Auth'

function CreateInitiative(){

  return <>
    <FloatButtons bottom/>
    <FloatPanel/>
    <Creation/>
    <Sidepanel/>
  </>
}

export default CreateInitiative
