const Pizzas = [
    {
        "nome": "Pepperoni",
        "ingredientes": [
            "mussarela",
            "pepperoni"
        ]
    },
    {
        "nome": "Marguerita",
        "ingredientes": [
            "mussarela",
            "tomare",
            "manjericao"
        ]
    }
]
function listarPizzas(req, res) {
    return res.send(Pizzas)
}

function mostrarPizza(req, res) {
    if (req.params.id < Pizzas.length) {
        return res.send(Pizzas[req.params.id]);
    } else {
        return res.send({"erro": "Pizza não encontrada"});
    }
}

module.exports =  {listarPizzas, mostrarPizza};