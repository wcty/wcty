import { subscribeAPN, useUser } from "common";
import ClientOnly from "components/ClientOnly";
import React from "react";


function PushNotificationDemo() {
  
  const user = useUser()

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