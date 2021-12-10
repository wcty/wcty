export {}

declare let self: ServiceWorkerGlobalScope

//@ts-ignore
self.__WB_DISABLE_DEV_LOGS = true

// listen to message event from window
self.addEventListener('message', event => {
  console.log(event?.data);
});

function receivePushNotification(event?: PushEvent) {
  console.log("[Service Worker] Push Received.");

  const { image, tag, url, title, text } = event?.data.json();
  console.log('received', image, tag, url, title, text);
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