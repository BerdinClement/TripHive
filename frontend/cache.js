const { CacheFirst, NetworkFirst, StaleWhileRevalidate } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { ExpirationPlugin } = require('workbox-expiration');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');

module.exports = [
    // Cache les pages HTML pour qu'elles soient accessibles offline
    {
        urlPattern: ({ request }) => request.mode === 'navigate',
        handler: new NetworkFirst({
            cacheName: 'pages-cache',
            plugins: [
                new CacheableResponsePlugin({
                    statuses: [200],
                }),
            ],
        }),
    },
    // Cache les fichiers JS/CSS pour une disponibilité hors ligne
    {
        urlPattern: /\.(?:js|css|woff2)$/,
        handler: new StaleWhileRevalidate({
            cacheName: 'static-resources',
        }),
    },
    // Cache les images pour un affichage offline
    {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
        handler: new CacheFirst({
            cacheName: 'image-cache',
            plugins: [
                new ExpirationPlugin({
                    maxEntries: 100,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 jours
                }),
            ],
        }),
    },
    // Cache les API pour les rendre accessibles hors ligne
    {
        urlPattern: /^https:\/\/your-api-url\.com\//,
        handler: new NetworkFirst({
            cacheName: 'api-cache',
            plugins: [
                new CacheableResponsePlugin({
                    statuses: [200],
                }),
                new ExpirationPlugin({
                    maxEntries: 50,
                    maxAgeSeconds: 24 * 60 * 60, // 24 heures
                }),
            ],
        }),
    },
];
