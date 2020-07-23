self.addEventListener('push', e => {
  const data = e.data.json();
  self.registration.showNotification(data.title, {
    body: 'Notified by Ran Tayar',
    icon: './img/icons/icon-128x128.png',
  });
});