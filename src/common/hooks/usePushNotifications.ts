import { atoms } from "common";
import { useAddSubscriptionMutation } from "generated";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useUser } from ".";
import { apn, wp } from "../functions";
import UAParser from "ua-parser-js"


export function usePushNotifications() {
  const [sub, setSub] = useState<{
    subscription: PushSubscription | null | {},
    id: string | null,
    service: 'web' | 'apn' | null,
  }>({
    subscription: null,
    id: null,
    service: 
      wp.isSupported()? 'web':
      apn.isSupported()? 'apn':
      null
  });
  const [loading, setLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useRecoilState(atoms.isSubscribed);
  const [error, setError] = useState<{
    name: string,
    message: string,
    code: string | number,
  }|null>(null);

  const [ add, {  error:addingError } ] = useAddSubscriptionMutation()
  const user = useUser();

  function upsertSub(subInfo: typeof sub){
    // console.log('upsert')
    //Upsert subscription information the server
    if( user && subInfo && subInfo.service && subInfo.id && subInfo.subscription ){
      add({
        variables:{
          subscription:{
            service: subInfo.service,
            id: subInfo.id,
            subscription: JSON.stringify(subInfo.subscription),
            user_id: user?.id,
            platform: JSON.stringify(new UAParser())
          },
        }
      })
    }
  }

  useEffect(() => {
    (async () => {
      if(
        sub?.service &&
        (
          (sub.service==='apn' && !sub.id) || 
          (sub.service==='web' && !sub.subscription)
        )
      ){
        let subInfo;

        //Check if the user has a subscription
        if( sub.service==='web' ){
          const permission = window.Notification.permission;
          // console.log('Current permission', permission);
          if( permission!=='granted' && permission!=='default' ){
            setError({
              name: 'Permission Denied',
              message: 'You must allow push notifications to use this feature.',
              code: 'permission_denied'
            })
            return;
          }
          const existingSubscription = await wp.getSubscription();
          const subId:string|null = existingSubscription && await wp.sendSubscriptionToPushServer(existingSubscription)
          subInfo = existingSubscription && subId? {
            id: subId, 
            subscription: existingSubscription,
            service:'web' as 'web'
          }: null;
        }else{
          const subscriptionId = await apn.checkAPNPermission();
          // console.log('Subscription ID', subscriptionId);
          if(typeof subscriptionId==='string'){
            subInfo = {
              id: subscriptionId,
              subscription: {},
              service: 'apn' as 'apn'
            };
          }else{
            subscriptionId && setError(subscriptionId);
          }
        }

        
        if( subInfo ){
          console.log('Here subscribed')
          setSub(subInfo);
          upsertSub(subInfo);
          setIsSubscribed(true);
        }else{
          //Ask the user to subscribe
          setIsSubscribed(false);
        }
      }else{
        setError({
          name: 'Not supported',
          message: 'Push notifications are not supported on this device',
          code: 0
        })
      }
    })();
  }, [sub.service, sub.id, sub.subscription, user]);

  async function subscribe(){
    const func = (
      sub.service==='web'? wp.subscribeWebpush:
      sub.service==='apn'? apn.subscribeAPN:
      null
    )
    if(func){
      const result = await func();
      if(!result){
        console.log('No result')
        return;
      }
      if(typeof result === 'string'){
        const subInfo = {
          id: result,
          subscription: {},
          service: sub.service
        }
        console.log('subInfo apn', subInfo)
        upsertSub(subInfo);
        setSub(subInfo);
        setIsSubscribed(true);
      }else if(result.subscription && result.subscriptionId){
        const subInfo = {
          id: result.subscriptionId as string,
          subscription: result.subscription as PushSubscription,
          service: sub.service
        }
        console.log('subInfo wp', subInfo)
        upsertSub(subInfo);
        setSub(subInfo);
        setIsSubscribed(true);
      }else{
        console.log('error', result)
        setError(result);
      }
      
      return result;
    }else{
      console.log('No func')
      return;
    }
  }

  return {
    sub,
    isSupported: !!sub.service,
    isSubscribed,
    error,
    subscribe: sub.service && isSubscribed===false && subscribe
  }
}