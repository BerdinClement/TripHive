const withPWA = require('next-pwa')({
    dest: 'public',
    scope: '/app',
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development'
})

module.exports = withPWA({
    reactStrictMode: true,
})