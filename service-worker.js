const CACHE_NAME = 'my-health-app-cache-v1';
const urlsToCache = [
  'suckhoecuatoi.html',
  '/', // Hoặc đường dẫn gốc của bạn nếu host
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
  // Thêm các tệp icon của bạn vào đây
  'icon-192x192.png', 
  'icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});