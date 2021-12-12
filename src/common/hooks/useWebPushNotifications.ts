import { useAddSubscriptionMutation } from "generated";
import { useState, useEffect } from "react";
import { useUser } from ".";
import { wp } from "../functions";

export function useWebPushNotifications() {
  const [sub, setSub] = useState<{
    subscription: PushSubscription | null,
    id: string | null,
    service: 'web' | 'apn' | null,
  }|null>(null);

  const [ add ] = useAddSubscriptionMutation()
  const user = useUser();

  useEffect(()=>{
    if(user && sub && sub.subscription && sub.id){
      add({
        variables:{
          subscription:{
            id: sub.id,
            subscription: JSON.stringify(sub.subscription),
            user_id: user?.id 
          },
        }
      })
    }
  },[user, sub])

  useEffect(()=>{
    if(user?.subscriptions.length){
      const current = user.subscriptions.find(subscription=>subscription.subscription===JSON.stringify(subscription))
      if(current){
        setSub(s=>s?({...s, id: current.id}):{id: current.id, subscription: null, service: 'web'})
        console.log('Subscription exists')
      }
    }
  }, [user?.subscriptions])

  useEffect(() => {
    (async () => {
      const existingSubscription = await wp.getSubscription();
      setSub(s=>s? {...s, subscription: existingSubscription}: {subscription: existingSubscription, id: null, service: 'web'});
    })();
  }, []);


  return {
    sub,
    isWPSupported: wp.isSupported
  }
}