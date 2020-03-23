const express = require('express');
const pkg = require('../package.json');

const app = express();

app.get('/ping', (req, res) => res.json('pong'));
app.get('/time', (req, res) => res.json({ now: new Date() }));
app.get('/version', (req, res) => res.json({ version: pkg.version }));

// Error handling
app.use((req, res, next) => res.status(404).json({ message: 'Sorry cant find that!' }));

module.exports = app;
