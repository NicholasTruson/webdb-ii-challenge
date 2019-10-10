const express = require('express');
const helmet = require('helmet');

const carRouter = require('../cars/carRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('./cars', carRouter);

module.exports = server;