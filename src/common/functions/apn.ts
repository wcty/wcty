
const APN_ID = 'web.city.weee.admin'

export function subscribeAPN() {
  // @ts-ignore
  if ('safari' in window && 'pushNotification' in window.safari) {
    console.log('<p>Browser is safari and has support for push notifications</p>');
    // @ts-ignore
    var permissionData = window.safari.pushNotification.permission(APN_ID);
    return checkRemotePermission(permissionData);
  } else {
    console.log('<p>Browser is not safari, use safari to proceed. If you are using safari you might not have support for push notifications enabled.</p>');
  }
}

export function checkRemotePermission(permissionData:any) {
  console.log('Checking permission for push notification');

  if (permissionData.permission === 'default') {
    console.log('Permission is <strong>default</strong> (first time)</p>');
    console.log('Validating push package before showing request popup...</p>');
    // @ts-ignore
    window.safari.pushNotification.requestPermission(
      'https://admin.weee.city/apn',      // The web service URL.
      APN_ID,          // The Website Push ID.
      {"user_id": 'user_id'},       // Data that you choose to send to your server to help you identify the user.
      checkRemotePermission         // The callback function.
    );
  }
  else if (permissionData.permission === 'denied') {
    console.log('Permission is <strong>denied</strong></p>');
  }
  else if (permissionData.permission === 'granted') {
    console.log('Permission is <strong>granted</strong></p>');
    console.log('User device token is: <strong>' + permissionData.deviceToken + '</strong></p>');
    return permissionData.deviceToken;
  }
}

export function checkAPNPermission() {
  console.log('Checking permission for push notification');
  // @ts-ignore
  var permissionData = window.safari.pushNotification.permission(APN_ID);

  if (permissionData.permission === 'default') {
    console.log('Permission is <strong>default</strong> (first time)</p>');
  }
  else if (permissionData.permission === 'denied') {
    console.log('Permission is <strong>denied</strong></p>');
  }
  else if (permissionData.permission === 'granted') {
    console.log('Permission is <strong>granted</strong></p>');
    console.log('User device token is: <strong>' + permissionData.deviceToken + '</strong></p>');
    return permissionData.deviceToken;
  }
}

