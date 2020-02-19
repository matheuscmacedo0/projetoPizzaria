const express = require('express');
const router = express.Router();

// Importanto o PizzaController
const PizzasController = require('../controllers/PizzasConstroller');

router.get('/', PizzasController.listarPizzas);

router.get('/:id', PizzasController.mostrarPizza);

module.exports = router;