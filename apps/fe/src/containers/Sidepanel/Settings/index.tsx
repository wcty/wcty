import { atoms,  useLayout, useUser } from 'common';
import { UserIconRow, List } from "../styles";
import { useInitiativesNearbyListQuery, useMyInitiativeListQuery, useUpdateSettingsMutation } from "generated";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import BurgerFab from 'containers/FloatPanel/BurgerFab';
import { t, Trans } from '@lingui/macro'
import { Checkbox } from '@ui';
import { Settings } from './styles';
import { useSettingsSubscription } from 'generated';

export default function InitiativesDrawer(){
  const user = useUser()
  const layout = useLayout()

  const { data, loading } = useSettingsSubscription({variables:{id: user?.id||''}});
  const [ settings, setSettings] = useState(data?.settings)
  const [ updateSettings ] = useUpdateSettingsMutation();

  useEffect(()=>{
    if(!loading)
    updateSettings({
      variables:{
        id: user?.id||'',
        push_notifications: Boolean(settings?.push_notifications), 
        email_notifications: Boolean(settings?.email_notifications) }})             
  },[settings, loading])

  useEffect(()=>{
    setSettings({
      push_notifications: Boolean(data?.settings?.push_notifications),
      email_notifications: Boolean(data?.settings?.email_notifications)
    })
  },[data?.settings])

  return <>
    <div>
      <UserIconRow>
        <span>
          {layout==='mobile' && <BurgerFab/>}
          <Trans>Settings</Trans>
        </span>
        <span style={{fontSize: 10}}>
          {/* {'1111 initiatives'} */}
        </span>
      </UserIconRow>
      <br/>
      {loading? 'Loading...': <>
      <Settings>
        <Checkbox 
          checked={Boolean(settings?.email_notifications)} 
          value={t`Enable email notifications`}
          onChange={()=>setSettings({
            ...settings, 
            email_notifications: !settings?.email_notifications}) }/>
              <span
                onClick={()=>setSettings({
                  ...settings, 
                  email_notifications: !settings?.email_notifications}) }
              ><Trans>Enable email notifications</Trans></span>
      </Settings>

      <Settings>
      <Checkbox 
          checked={Boolean(settings?.push_notifications)} 
          value={t`Enable push notifications`}
          onChange={()=>setSettings({
            ...settings, 
            push_notifications: !settings?.push_notifications}) }/>
                <span
                  onClick={()=>setSettings({
                    ...settings, 
                    push_notifications: !settings?.push_notifications}) }
                ><Trans>Enable push notifications</Trans></span>
      </Settings>
      </>}
    </div>
  </>
}
