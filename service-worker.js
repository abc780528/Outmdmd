
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('qr-cache').then(function(cache) {
      return cache.addAll(['/', '/index.html', '/qr_full.jpg']);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
