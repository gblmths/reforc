var CACHE_NAME = 'greem+-v1.0';

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll([
                '/',

                'index.html',

                'css/index.css',

                'css/bootstrap.min.css',

                '.js/bootstrap.min.js',

                '.js/jquery.min.js',

                '.js/index.js',


                'images/icons/icon-32x32.png',
                'images/icons/icon-72x72.png',
                'images/icons/icon-96x96.png',
                'images/icons/icon-144x144.png',
                'images/icons/icon-152x152.png',
                'images/icons/icon-167x167.png',
                'images/icons/icon-180x180.png',
                'images/icons/icon-192x192.png',
                'images/icons/icon-512x512.png',
            ]);
        })
    )
});

self.addEventListener('activate', function activator(event) {
    event.waitUntil(
        caches.keys().then(function(keys) {
            return Promise.all(keys
                .filter(function(key) {
                    return key.indexOf(CACHE_NAME) !== 0;
                })
                .map(function(key) {
                    return caches.delete(key);
                })
            );
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(cachedResponse) {
            return cachedResponse || fetch(event.request);
        })
    );
});