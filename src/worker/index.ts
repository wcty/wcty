import { util } from './util';

declare let self: ServiceWorkerGlobalScope

// To disable all workbox logging during development, you can set self.__WB_DISABLE_DEV_LOGS to true
// https://developers.google.com/web/tools/workbox/guides/configure-workbox#disable_logging
//
// self.__WB_DISABLE_DEV_LOGS = true
//@ts-ignore
self.__WB_DISABLE_DEV_LOGS = true
util();

// listen to message event from window
self.addEventListener('message', event => {
  // HOW TO TEST THIS?
  // Run this in your browser console:
  //     window.navigator.serviceWorker.controller.postMessage({command: 'log', message: 'hello world'})
  // OR use next-pwa injected workbox object
  //     window.workbox.messageSW({command: 'log', message: 'hello world'})
  console.log(event?.data);
});

// self.addEventListener('push',  (event) => {
//   const data = JSON.parse(event?.data.text() || '{}')
//   event?.waitUntil(
//     self.registration.showNotification(data.title, {
//       body: data.message,
//       icon: '/icons/android-chrome-192x192.png'
//     })
//   )
// })

// self.addEventListener('notificationclick',  (event) => {
//   event?.notification.close()
//   event?.waitUntil(
//     self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (clientList) {
//       if (clientList.length > 0) {
//         let client = clientList[0]
//         for (let i = 0; i < clientList.length; i++) {
//           if (clientList[i].focused) {
//             client = clientList[i]
//           }
//         }
//         return client.focus()
//       }
//       return self.clients.openWindow('/')
//     })
//   )
// })

function receivePushNotification(event?: PushEvent) {
  console.log("[Service Worker] Push Received.");

  const { image, tag, url, title, text } = event?.data.json();

  const options = {
    data: url,
    body: text,
    icon: image,
    vibrate: [200, 100, 200],
    tag: tag,
    image: image,
    badge: "https://spyna.it/icons/favicon.ico",
    actions: [{ action: "Detail", title: "View", icon: "https://via.placeholder.com/128/ff0000" }]
  };
  event?.waitUntil(self.registration.showNotification(title, options));
}

function openPushNotification(event?: NotificationEvent) {
  console.log("[Service Worker] Notification click Received.", event?.notification.data);
  
  event?.notification.close();
  event?.waitUntil(self.clients.openWindow(event.notification.data));
}

self.addEventListener("push", receivePushNotification);
self.addEventListener("notificationclick", openPushNotification);