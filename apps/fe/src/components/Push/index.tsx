import { usePushNotifications } from "common";
import React from "react";
import { useUserData } from '@nhost/nextjs';

export default function PushNotificationDemo() {
  const user = useUserData()
  const {
    isSupported,
    isSubscribed,
    subscribe,
    error
  } = usePushNotifications();


  return (
    
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
    
  );
}
