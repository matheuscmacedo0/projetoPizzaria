// Importando o express
const express = require('express');

// Criando o app
const app = express();

// Importando arquivos de rotas
const pizzasRoutes = require('./routes/pizzasRoutes');

// Associando as rotas
app.use('/pizzas', pizzasRoutes); 

// Libera a porta

app.listen(3000);