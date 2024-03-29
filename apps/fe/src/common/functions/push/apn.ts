const APN_ID = 'web.city.weee.admin'

export function isSupported() {

  if (typeof window !== "undefined") {
    // @ts-ignore
    return 'safari' in window && 'pushNotification' in window.safari;
  }
}

export async function subscribeAPN() {
  // @ts-ignore
  if (isSupported()) {
    // @ts-ignore
    const permissionData = await window.safari.pushNotification.permission(APN_ID);
    const result = await requestPermissions(permissionData);
    console.log('subscribeAPN result', result);
    return result;
  } else {
    console.log('Browser not supported')
    return {
      message: 'Browser is not safari, use safari to proceed. If you are using safari you might not have support for push notifications enabled.',
      name: 'Not safari',
      code: 0
    }
  }
}

async function requestPermissions(permissionData:any){
  return new Promise((resolve, reject)=> 
    requestRemotePermission(permissionData, resolve, reject)
  )
};

export function requestRemotePermission(
  permissionData:any, 
  resolve:(value:unknown)=>void, 
  reject:(reason:any)=>void
){

  if (permissionData.permission === 'default') {
    console.log('Permission is default - first time request');
    // @ts-ignore
    window.safari.pushNotification.requestPermission(
      'https://admin.weee.city/apn',
      APN_ID,          
      {"user_id": 'user_id'},       // Data that you choose to send to your server to help you identify the user.
      (prop:any)=>{
        console.log('Request permission callback', prop);
        requestRemotePermission(prop, resolve, reject)
      }
    );
  }
  else if (permissionData.permission === 'denied') {
    console.log('Rejected - Permission denied')
    reject({
      name: 'Permission is denied',
      message: 'Permission is denied',
      code: 1
    })
  }
  else if (permissionData.permission === 'granted') {
    console.log('Resolved - Permission is granted');
    resolve(permissionData.deviceToken);
  }
}

export async function checkAPNPermission() {
  // console.log('Checking permission for push notification');
  // @ts-ignore
  const permissionData = await window.safari?.pushNotification.permission(APN_ID);

  if (permissionData.permission === 'default') {
    console.log('Permission is default');
    return null;
  }
  else if (permissionData.permission === 'denied') {
    console.log('Permission is denied');
    return {
      name: 'Permission is denied',
      message: 'Permission is denied',
      code: 0
    }
  }
  else if (permissionData.permission === 'granted') {
    console.log('Permission is granted');
    console.log('User device token is: ' + permissionData.deviceToken);
    return permissionData.deviceToken as string;
  }
}
