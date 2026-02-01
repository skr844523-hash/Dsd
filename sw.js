const cacheName = 'elite-v1';
const staticAssets = [
  './',
  './index.html',
  './manifest.json'
];

// تثبيت الـ Service Worker وحفظ الملفات الأساسية
self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});

// تشغيل التطبيق وجلب البيانات
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
