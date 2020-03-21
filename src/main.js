const express = require('express');
const pkg = require('../package.json');

const app = express();

app.all('/ping', (req, res) => res.json('pong'));
app.get('/time', (req, res) => res.json({ now: new Date() }));
app.get('/version', (req, res) => res.json({ version: pkg.version }));

module.exports = app;
