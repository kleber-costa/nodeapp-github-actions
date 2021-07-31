'use strict';

const express = require('express');
const morgan = require('morgan');
const app = express();

const client = require('prom-client');
const collectDefaultMetrics = client.collectDefaultMetrics;
const Registry = client.Registry;
const register = new Registry();

collectDefaultMetrics({ register });

app.use(morgan('address :remote-addr date [:date[clf]] ":method :url HTTP/:http-version" :status :referrer :user-agent content-lenght :res[content-length] reponse-time :response-time ms'))


app.get('/', (req, res) => {
    const data = {
        message: 'Hello World!',
        name: 'A simple NodeJS example',
        version: '1.0.0'
    }
    res.status(200).send(data);
});

app.get('/health', (req, res) => {
    const data = {
        result: 'OK - Healthy',
        status: '200',
    }
    res.status(200).send(data);
});

app.get('/metrics', async function(req, res) {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
})


module.exports = app;
