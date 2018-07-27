const { Client } = require('klasa');
const { token } = require('./config');

Client.use(require('../src/index.js').Client);


new Client().login(token);
