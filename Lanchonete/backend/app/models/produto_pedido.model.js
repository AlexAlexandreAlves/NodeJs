const sql = require("./db.js");

//Cria um novo produtos_pedidos
const ProdutoPedido = function (produtoPedido) {
    this.produtos_idprodutos = produtoPedido.produtos_idprodutos;
    this.pedidos_idpedidos = produtoPedido.pedidos_idpedidos;
    this.observacao = produtoPedido.observacao;
}

ProdutoPedido.create = (produtoPedido, result) => {

    sql.query("INSERT INTO produtos_pedidos SET ?", produtoPedido, (err, res) => {
        console.log(res);
        result(null, { idprodutospedidos: res.insertId, ...produtoPedido })
    });
}

//Seleciona todos os produtos_pedidos
ProdutoPedido.getAll = result => {
    sql.query(`SELECT * FROM produtos_pedidos INNER JOIN produtos ON produtos_pedidos.produtos_idprodutos = produtos.idprodutos 
    INNER JOIN pedidos ON produtos_pedidos.pedidos_idpedidos = pedidos_idpedidos`, (err, res) => {
        if (err) {
            console.log("Errro encontrado: ", err);
            result(null, err);
            return;
        }

        console.log("produtos_pedidos: ", res);
        result(null, res);
    })
};

ProdutoPedido.findById = (produtoPedidoId, result) => {
    sql.query(`SELECT * FROM produtos_pedidos 
    INNER JOIN produtos ON produtos_pedidos.produtos_idprodutos = produtos.idprodutos 
    INNER JOIN pedidos ON produtos_pedidos.pedidos_idpedidos = pedidos.idpedidos WHERE produtos_pedidos.idprodutos_pedidos = 
    ${produtoPedidoId}`, (err, res) => {
        if (err) {
            console.log("Errro encontrado: ", err);
            result(null, err);
            return;
        }

        console.log("produtos_pedidos: ", res);
        result(null, res);
    })
};

ProdutoPedido.findByPedido = (pedidosId, result) => {
    sql.query(`SELECT * FROM produtos_pedidos 
    INNER JOIN produtos ON produtos_pedidos.produtos_idprodutos = produtos.idprodutos 
    INNER JOIN pedidos ON produtos_pedidos.pedidos_idpedidos = pedidos.idpedidos WHERE produtos_pedidos.pedidos_idpedidos = 
    ${pedidosId}`, (err, res) => {
        if (err) {
            console.log("Errro encontrado: ", err);
            result(null, err);
            return;
        }

        console.log("pedidosId: ", res);
        result(null, res);
    })
};

ProdutoPedido.findByProduto = (produtosId, result) => {
    sql.query(`SELECT * FROM produtos_pedidos 
    INNER JOIN produtos ON produtos_pedidos.produtos_idprodutos = produtos.idprodutos 
    INNER JOIN pedidos ON produtos_pedidos.pedidos_idpedidos = pedidos.idpedidos WHERE produtos_pedidos.produtos_idprodutos = 
    ${produtosId}`, (err, res) => {
        console.log(produtosId);
        if (err) {
            console.log("Errro encontrado: ", err);
            result(null, err);
            return;
        }

        console.log("produtosId: ", res);
        result(null, res);
    })
};


ProdutoPedido.updateById = (produtoPedidoId, produtoPedido, result) => {
    sql.query(`UPDATE produtos_pedidos SET pedidos_idpedidos = ?, produtos_idprodutos = ?,
    observacao = ? WHERE idprodutos_pedidos = ?`,
        [produtoPedido.pedidos_idpedidos, produtoPedido.produtos_idprodutos, produtoPedido.observacao, produtoPedidoId], (err, res) => {
            result(null, { idprodutos_pedidos: produtoPedidoId, ...produtoPedido });
        });
}

ProdutoPedido.removeByProduto = (produtoId, result) => {
    sql.query("DELETE FROM produtos_pedidos WHERE produtos_idprodutos = ?", produtoId, (err, res) => {
        if (err) {
            console.log("Erro: ", err);
            result(err, null);

        } else if (res.affectedRows == 0) {
            result({ kind: "not_found" })
        } else {
            result(null, res);
        }
    })
}

ProdutoPedido.removeByPedido = (pedidoId, result) => {
    sql.query("DELETE FROM produtos_pedidos WHERE produtos_idpedidos = ?", pedidoId, (err, res) => {
        if (err) {
            console.log("Erro: ", err);
            result(err, null);

        } else if (res.affectedRows == 0) {
            result({ kind: "not_found" })
        } else {
            result(null, res);
        }
    })
}

ProdutoPedido.remove = (produtoPedidoId, result) => {
    sql.query("DELETE FROM produtos_pedidos WHERE idprodutos_pedidos = ?", produtoPedidoId, (err, res) => {
        if (err) {
            console.log("Erro: ", err);
            result(err, null);

        } else if (res.affectedRows == 0) {
            result({ kind: "not_found" })
        } else {
            result(null, res);
        }
    })
}

ProdutoPedido.removeAll = (result) => {
    sql.query("DELETE FROM produto_pedidos", (err, res) => {
        if (err) {
            result(err);
        } else {
            result(null);
        }
    })
};



module.exports = ProdutoPedido;
