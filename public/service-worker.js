self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open('pl4y-v1').then(c=>c.addAll([
    '/', '/index.html', '/actions.json', '/assets.json'
  ])));
});
self.addEventListener('activate', e => { self.clients.claim(); });
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});