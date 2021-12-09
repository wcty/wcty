import UAParser from "ua-parser-js"


const pushServerPublicKey = "BBgcI28RO8krLOGVcKwaiXQkBz_rKFyjQrxf2746y4QMGlfxrvFw9aM6N-mGhcq6XGQ59_5_XGXs-IOKPQfURGY";
/**
 * checks if Push notification and service workers are supported by your browser
 */
function isPushNotificationSupported() {
  const parser = new UAParser();
  console.log(parser.getResult());
  if (typeof window !== "undefined") {
    // Client-side-only code
    return "serviceWorker" in window.navigator && "PushManager" in window;
  }
}

/**
 * asks user consent to receive push notifications and returns the response of the user, one of granted, default, denied
 */
async function askUserPermission() {
  return await Notification.requestPermission();
}
/**
 * shows a notification
 */
function sendNotification() {
  const img = "/images/jason-leung-HM6TMmevbZQ-unsplash.jpg";
  const text = "Take a look at this brand new t-shirt!";
  const title = "New Product Available";
  const options = {
    body: text,
    // icon: "/images/img.jpg",
    vibrate: [200, 100, 200],
    tag: "new-post",
    image: img,
    // badge: "https://weee.city/icons/android-icon-192x192.png",
    actions: [{ 
      action: "Detail", 
      title: "View", 
      //icon: "/images/img.jpg"
    }]
  };
  navigator.serviceWorker.ready.then(function(serviceWorker) {
    serviceWorker.showNotification(title, options);
  });
}


// function registerServiceWorker() {
//   return navigator.serviceWorker.register("/sw.js");
// }

/**
 *
 * using the registered service worker creates a push notification subscription and returns it
 *
 */
async function createNotificationSubscription() {
  //wait for service worker installation to be ready
  const serviceWorker = await navigator.serviceWorker.ready;
  // subscribe and return the subscription
  return await serviceWorker.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: pushServerPublicKey
  });
}

/**
 * returns the subscription if present or nothing
 */
function getUserSubscription() {
  //wait for service worker installation to be ready, and then
  return navigator.serviceWorker.ready
    .then(function(serviceWorker) {
      return serviceWorker.pushManager.getSubscription();
    })
    .then(function(pushSubscription) {
      return pushSubscription;
    });
}

export {
  isPushNotificationSupported,
  askUserPermission,
  // registerServiceWorker,
  sendNotification,
  createNotificationSubscription,
  getUserSubscription
};