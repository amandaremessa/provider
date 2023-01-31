const express = require('express');
const SessionController = require('./controllers/SessionController');
const FoodController = require('./controllers/FoodController')

const routes = express.Router();

routes.post('/users', SessionController.store);
routes.post('/food', FoodController.store);

module.exports = routes;