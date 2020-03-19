const express = require('express');

const RecipeRouter = require('./data/recipes/recipes-model.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipeRouter);

module.exports = server;