import { useLayout } from 'common'
import Initiative from 'containers/Initiative'
import { Burger, ContentWrapper } from 'containers/Routing/styles'
import Sidepanel from 'containers/Sidepanel'
import { useRouter } from 'next/router'

export default function DynamicInitiative() {
  const router = useRouter()
  const { id } = router.query
  const layout = useLayout()

  return <> 
    {layout==='mobile' && <Burger style={{marginLeft:'1.5rem'}}/>}
    <Sidepanel/>
    {layout==='desktop'?
      <ContentWrapper>
        <Initiative.Desktop/>
      </ContentWrapper>:
      <Initiative.Mobile/>}
  </>
}