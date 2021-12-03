const cors = require('cors');
const bodyParser = require('body-parser'); 
const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    app.use(cors());
    next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


require("./app/routes/produto.routes.js")(app);
require("./app/routes/pedido.routes.js")(app);
require("./app/routes/produto_pedido.routes.js")(app);
require("./app/routes/usuario.routes.js")(app);


app.get("/", (req, res) => {
    res.json({
        message: "Bem vindo á API MVC do Senac"
    })
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
});