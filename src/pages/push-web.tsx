import { usePushNotifications, useUser } from "common";
import ClientOnly from "components/ClientOnly";
import { useAddSubscriptionMutation } from "generated";
import React, { useEffect } from "react";

const Loading = ({ loading=true }) => (loading ? <div className="app-loader">Please wait, we are loading something...</div> : null);
const Error = ({ error }:{ error:null|false|{name:string, message:string, code:number} }) =>
  error ? (
    <section className="app-error">
      <h2>{error.name}</h2>
      <p>Error message : {error.message}</p>
      <p>Error code : {error.code}</p>
    </section>
  ) : null;

function PushNotificationDemo() {
  const {
    userConsent,
    pushNotificationSupported,
    userSubscription,
    onClickAskUserPermission,
    onClickSusbribeToPushNotification,
    onClickSendSubscriptionToPushServer,
    subscribeWebpush,
    pushServerSubscriptionId,
    error,
    loading
  } = usePushNotifications();
  const user = useUser()
  const [addSubscription] = useAddSubscriptionMutation({
    variables:{
      subscription:{
        id: pushServerSubscriptionId,
        subscription: JSON.stringify(userSubscription),
        user_id: user?.id 
      },
    }
  })

  console.log(user, userSubscription, pushServerSubscriptionId)
  useEffect(()=>{
    if(user && userSubscription && pushServerSubscriptionId){
      console.log('sent subscription', user, userSubscription, pushServerSubscriptionId)
      addSubscription()
    }
  },[user, userSubscription, pushServerSubscriptionId])

  const isConsentGranted = userConsent === "granted";

  return (
    <main>

      <button onClick={subscribeWebpush}>
        {"Subscribe to web push"}
      </button>
      {/* <button onClick={onClickAskUserPermission}>
        {"Request Ask user permission"}
      </button>

      <button onClick={onClickSusbribeToPushNotification}>
        {"Create Notification subscription"}
      </button>

      <button onClick={onClickSendSubscriptionToPushServer}>
        {"Send subscription to push server"}
      </button> */}

    </main>
  );
}

export default function PushText(){

  return (
    <ClientOnly>
      <PushNotificationDemo />  
    </ClientOnly>
  )
}