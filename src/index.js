const express = require('express');
const package = require('../package.json');

const app = express();
const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? parseInt(process.env.PORT, 10) || 80 : 3000;

app.all('/ping', (req, res) => res.send('pong'));
app.get('/time', (req, res) => res.json({ now: new Date() }));
app.get('/version', (req, res) => res.json({ version: package.version }));

app.listen(port, () => console.log('Say "hello" to my little frind!'));
