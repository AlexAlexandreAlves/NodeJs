module.exports = app => {
    const produtoPedidoController = require("../controllers/produto_pedido.controller.js")


    app.post("/produtos_pedidos", produtoPedidoController.create); //rota para criar
    app.get("/produtos_pedidos", produtoPedidoController.getAll); //rota para selecionar todos os itens
    
        app.get("/produtos_pedidos/:produtoPedidoId", produtoPedidoController.findById);
        app.get("/produtos_pedidos/pedidos/:pedidoId", produtoPedidoController.findByPedido);
        app.get("/produtos_pedidos/produtos/:produtoId", produtoPedidoController.findByProduto);
        
   
        app.put("/produtos_pedidos/:produtoPedidoId", produtoPedidoController.updateById);
     /*
        app.delete("/produtos_pedidos/:produtoPedidoId", produtoPedidoController.remove);
        app.delete("/produtos_pedidos/produtos/:produtoId", produtoPedidoController.removeByProduto);
        app.delete("/produtos_pedidos/pedidos/:pedidoId", produtoPedidoController.removeByPedido);
    */
}