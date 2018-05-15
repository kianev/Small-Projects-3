console.log('Service worker loaded');

self.addEventListener('push', e => {
  const data = e.data.json();
  console.log('Push received');

  self.registration.showNotification(data.title, {
    body: 'Notified by NodeJS',
    icon: 'https://www.challengemarine.com.au/wp-content/uploads/2017/04/push-notifications.png'
  });
});