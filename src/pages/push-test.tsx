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
      <Loading loading={loading} />

      <p>Push notification are {!pushNotificationSupported && "NOT"} supported by your device.</p>

      <p>
        User consent to recevie push notificaitons is <strong>{userConsent}</strong>.
      </p>

      <Error error={error} />

      <button disabled={!pushNotificationSupported || isConsentGranted} onClick={onClickAskUserPermission}>
        {isConsentGranted ? "Consent granted" : " Ask user permission"}
      </button>

      <button disabled={!pushNotificationSupported || !isConsentGranted || !!userSubscription} onClick={onClickSusbribeToPushNotification}>
        {userSubscription ? "Push subscription created" : "Create Notification subscription"}
      </button>

      <button disabled={!userSubscription || !!pushServerSubscriptionId} onClick={onClickSendSubscriptionToPushServer}>
        {pushServerSubscriptionId ? "Subscrption sent to the server" : "Send subscription to push server"}
      </button>

      {pushServerSubscriptionId && (
        <div>
          <p>The server accepted the push subscrption!</p>
          <button onClick={()=>{
            fetch('http://localhost:4000/notifications/new-post')
            .then(res => res.text())
            .catch(err => console.log(err))
          }}>Send a notification</button>
        </div>
      )}

      <section>
        <h4>Your notification subscription details</h4>
        <pre>
          <code>{JSON.stringify(userSubscription, null, " ")}</code>
        </pre>
      </section>
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