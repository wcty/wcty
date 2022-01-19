
const host = "https://admin.weee.city";
const pushServerPublicKey = "BBgcI28RO8krLOGVcKwaiXQkBz_rKFyjQrxf2746y4QMGlfxrvFw9aM6N-mGhcq6XGQ59_5_XGXs-IOKPQfURGY";

function post(path:string, body:any) {
  return fetch(`${host}${path}`, {
    credentials: "omit",
    headers: { "content-type": "application/json;charset=UTF-8", "sec-fetch-mode": "cors" },
    body: JSON.stringify(body),
    method: "POST",
    mode: "cors"
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return data;
    });
}

function get(path:string) {
  return fetch(`${host}${path}`, {
    credentials: "omit",
    headers: { "content-type": "application/json;charset=UTF-8", "sec-fetch-mode": "cors" },
    method: "GET",
    mode: "cors"
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return data;
    });
}

export function isSupported() {

  if (typeof window !== "undefined") {
    // Client-side-only code
    return 'Notification' in window && "serviceWorker" in window.navigator && "PushManager" in window;
  }
}

export async function getSubscription() {

  const serviceWorker = await navigator.serviceWorker?.ready
  const pushSubscription = await serviceWorker.pushManager.getSubscription();

  return pushSubscription;
}

export const askPermission = async () => {
  const consent = await window.Notification?.requestPermission();
  if (consent !== "granted") {
    return {
      name: "Consent denied",
      message: "You denied the consent to receive notifications",
      code: 0
    }
  }
  return consent
};

const susbribeToPushNotification = async () => {

  try{
    const serviceWorker = await navigator.serviceWorker?.ready;

    return await serviceWorker?.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: pushServerPublicKey
    });
  }catch(err:any){
    console.error("Couldn't create the notification subscription", err, "name:", err.name, "message:", err.message, "code:", err.code);
    return err;
  };
};

export async function sendSubscriptionToPushServer(subscription:PushSubscription | null) {
  try{
    const response = await post("/web/subscription", subscription)
    return response.id;
  }catch(err:any){
    return err;
  };
};

export async function subscribeWebpush() {
  if (isSupported()) {
    const consent = await askPermission()
    if(consent==='granted'){
      const subscription = await susbribeToPushNotification()
      if(subscription instanceof PushSubscription){
        const subscriptionId = await sendSubscriptionToPushServer(subscription)
        if(typeof subscriptionId === 'string'){
          return {
            subscriptionId,
            subscription
          }
        }else{
          return subscriptionId
        }
      }else{
        return subscription;
      }
    }else{
      return consent;
    }
  }else{
    return {
      name: "Not supported",
      message: "Your browser doesn't support push notifications",
      code: 0
    }
  }
}
