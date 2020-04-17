const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(helmet())
server.use(express.json());
server.use(cors());

const login = require('./routes/login');
const channel = require('./routes/channels')

server.use('/login', login);
server.use('/channels', channel)

module.exports = server;