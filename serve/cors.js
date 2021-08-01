const cors = require('cors')

module.exports = cors({
    origin: [
        'http://localhost:8080',
        'https://localhost:8080',
        'http://localhost:8081',
    ],
    exposedHeaders: ['Content-Type', 'Accept', 'X-Requested-With'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
})