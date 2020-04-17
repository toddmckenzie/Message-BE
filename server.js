const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(helmet())
server.use(express.json());
server.use(cors());

const login = require('./routes/login');

server.use('/login', login);


module.exports = server;