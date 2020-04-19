const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(helmet())
server.use(express.json());
server.use(cors());

const login = require('./routes/login');
const channel = require('./routes/channels');
const messages = require('./routes/messages');
const replies = require('./routes/replies')

server.use('/login', login);
server.use('/channels', channel)
server.use('/messages', messages)
server.use('/replies', replies)

module.exports = server;