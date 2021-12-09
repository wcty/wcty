
export function subscribeAPN() {
  // @ts-ignore
  if ('safari' in window && 'pushNotification' in window.safari) {
    console.log('<p>Browser is safari and has support for push notifications</p>');
    // @ts-ignore
    var permissionData = window.safari.pushNotification.permission('web.city.weee');
    checkRemotePermission(permissionData);
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
      'http://localhost:4000', // The web service URL.
      'web.city.weee',                    // The Website Push ID.
      {user_id:'id'},                                         // Data that you choose to send to your server to help you identify the user.
      checkRemotePermission                       // The callback function.
    );
  }
  else if (permissionData.permission === 'denied') {
    console.log('Permission is <strong>denied</strong></p>');
  }
  else if (permissionData.permission === 'granted') {
    console.log('Permission is <strong>granted</strong></p>');
    console.log('User device token is: <strong>' + permissionData.deviceToken + '</strong></p>');
  }
}
