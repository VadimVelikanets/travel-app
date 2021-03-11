const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express()
app.use(express.json({extended: true}))
app.use('/api/auth', require('./routes/auth.routes'))
// app.use('/api/link', require('./routes/links.routes'))

app.use('/api/country', require('./routes/country.routes'))
const PORT = config.get('port') || 5000


app.use(
    '/api',
    createProxyMiddleware({
        target: 'http://localhost:5000',
        changeOrigin: true,
    })
);

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()
