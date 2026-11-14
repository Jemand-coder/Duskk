// Minimaler Service Worker: macht Duskk auf Android installierbar. Lädt immer frisch vom Server.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
