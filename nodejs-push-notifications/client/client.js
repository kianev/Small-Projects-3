const publicVapidKey = 'BPIf7Ydk8G5oaCkQidJZGWPKY6Vm6uN5e0eq3XOprktgGav2dURmVDgPBrAMU6C6XMu5LiY2rYY400u0cibVK5k';

//check for service worker
if('serviceWorker' in navigator) {
  send().catch(err => console.error(err));
}

//register SW, register push, send push
async function send() {
  //registering service worker
  console.log('Registering Service Worker');
  const register = await navigator.serviceWorker.register('./worker.js', {
    scope: '/'
  });

  console.log('Service Worker registered');

  //register push
  console.log('Registering push');
  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
  });

  console.log('Push registered');

  //Send push notification
  console.log('Sending push');
  await fetch('/subscribe', {
    method: 'POST',
    body: JSON.stringify(subscription),
    headers: {
      'content-type': 'application/json'
    }
  });
  console.log('Push sent');
}

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}