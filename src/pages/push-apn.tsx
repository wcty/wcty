import { subscribeAPN, useAPNPushNotifications, useUser } from "common";
import ClientOnly from "components/ClientOnly";
import React from "react";


function PushNotificationDemo() {
  
  const user = useUser()
  const sub_id = useAPNPushNotifications()
  console.log(sub_id, 'here')
  return (
    <main>

      <button onClick={subscribeAPN}>
        {"Subscribe"}
      </button>
   
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