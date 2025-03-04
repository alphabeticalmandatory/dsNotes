const CACHE_NAME = "quiz-cache-v1";
const urlsToCache = [
    "index.html",
    "script.js",
    "manifest.json",
    "icon-192.png",
    "icon-512.png"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Caching app files");
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
