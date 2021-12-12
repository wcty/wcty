import { usePushNotifications, useUser } from "common";
import ClientOnly from "components/ClientOnly";
import React from "react";

export default function PushNotificationDemo() {
  const user = useUser()


  const {
    isSupported,
    isSubscribed,
    subscribe,
    error
  } = usePushNotifications();


  return (
    <ClientOnly>
      <main>
        {(!isSupported)? 
          "Your device is not supported":
          (!user)?
          "You are not authorized":
          isSubscribed===true?
          "You are already subscribed":
          error?
          error.message:
          subscribe?
            <button onClick={async ()=>{
              const result = await subscribe();
              console.log(result);
            }}>
              {"Subscribe"}
            </button>:
          "There was an error"
        }
      </main>
    </ClientOnly>
  );
}