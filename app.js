require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./app/routers');
const errorHandlers = require('./handlers/errorHandlers');

app.use(express.json({ limit: '1mb', extended: true }));
app.use(express.urlencoded({ extended: false }));

app.use('/api', router);

if (app.get('NODE_ENV') === 'development') {
    app.use(errorHandlers.devErrorsCollector);
} else {
    app.use(errorHandlers.prodErrorsCollector);
}

app.set('port', process.env.PORT);
app.set('base_url', process.env.BASE_URL);

module.exports = app;
