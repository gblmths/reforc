var cacheName = 'Greem reforc';

self.addEventListener('install', function(event) {

    self.skipWaiting();

    event.waitUntil(
        caches.open(cacheName)
        .then(cache => cache.addAll([

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

        ]))
    );
});

self.addEventListener('message', function(event) {
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});

self.addEventListener('fetch', function(event) {
    //Atualizacao internet
    /* event.respondWith(async function () {
       try {
         return await fetch(event.request);
       } catch (err) {
         return caches.match(event.request);
       }
     }());*/

    //Atualizacao cache
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );

});