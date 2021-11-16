module.exports = app => {
    const produtoController = require("../controllers/produto.controller.js")


    app.post("/produtos", produtoController.create);
    app.get("/produtos", produtoController.getAll);
    app.get("/produtos/:produtoId", produtoController.findById);
    app.put("/produtos/:produtoId", produtoController.updateById);
    app.delete("/produtos/:produtoId", produtoController.remove);
    app.delete("/produtos", produtoController.removeAll);

}