const express = require('express');
const SessionController = require('./controllers/SessionController');
const FoodController = require('./controllers/FoodController')

const routes = express.Router();

routes.post('/users', SessionController.store);


routes.post('/food', FoodController.store);
routes.get('/foods', FoodController.getAll);
routes.get('/food/:id', FoodController.getById);

module.exports = routes;