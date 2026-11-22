const CACHE_NAME = 'defter-cache-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Estrategia simple: ir a la red, si falla, buscar en caché (opcional)
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});