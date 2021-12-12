import { useState, useEffect } from "react";
import { useUser } from ".";
import { apn } from "../functions";
import { useAddSubscriptionMutation } from "generated";


export function useAPNPushNotifications() {

  const [pushServerSubscriptionId, setPushServerSubscriptionId] = useState<string>();
  const user = useUser();
  const [add] = useAddSubscriptionMutation();

  useEffect(()=>{
    if(!pushServerSubscriptionId && user){
      const subscriptionId = apn.checkAPNPermission();
      if(typeof subscriptionId === "string"){
        setPushServerSubscriptionId(subscriptionId)
        console.log('subscription exists')
        add({variables:{subscription:{service: 'apn', id: subscriptionId, user_id: user.id, subscription: '{}'}}})
      }
    }
  }, [user?.subscriptions, pushServerSubscriptionId])
  

  return {
    pushServerSubscriptionId
  };
}