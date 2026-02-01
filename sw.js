const cacheName = 'elite-v2';
const assets = [
  './',
  './index.html',
  './manifest.json'
];

// تثبيت ملفات التطبيق في الذاكرة ليعمل بسرعة
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// تشغيل التطبيق وجلب البيانات
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
