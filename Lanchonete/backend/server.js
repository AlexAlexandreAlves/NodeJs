const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

require("./app/routes/produto.routes.js")(app);
require("./app/routes/pedido.routes.js")(app);
require("./app/routes/produto_pedido.routes.js")(app);


app.get("/", (req, res) => {
    res.json({
        message: "Bem vindo á API MVC do Senac"
    })
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
});