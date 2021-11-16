const produtoPedidoModel = require("../models/produto_pedido.model.js");

//Para criar um novo produto_pedido
exports.create = (req, res) => {
    const produtoPedido = new produtoPedidoModel({
        produtos_idprodutos: req.body.produtos_idprodutos,
        pedidos_idpedidos: req.body.pedidos_idpedidos,
        observacao: req.body.observacao
    });

    produtoPedidoModel.create(produtoPedido, (err, data) => {
        res.send(data);
    });

}
//Para pegar todos os produtos_pedidos
exports.getAll = (req, res) => {
    produtoPedidoModel.getAll((err, data) => {

        res.send(data);

    });
}

exports.findById = (req, res) => {
    produtoPedidoModel.findById(req.params.produtoPedidoId, (err, data) => {

        res.send(data);

    });
}


exports.findByPedido = (req, res) => {
    produtoPedidoModel.findByPedido(req.params.pedidoId, (err, data) => {

        res.send(data);

    });
}

exports.findByProduto = (req, res) => {
    produtoPedidoModel.findByProduto(req.params.produtoId, (err, data) => {

        res.send(data);

    });
}

exports.updateById = (req, res) => {
    const produtoPedido = new produtoPedidoModel({
        pedidos_idpedidos: req.body.produtos.idpedidos,
        produtos_produtos: req.body.produtos_idprodutos,
        observacao: req.body.observacao
    })
    produtoPedidoModel.updateById(req.params.produtoPedidoId, produtoPedido, (req, data) => {
        res.send(data);
    })
}