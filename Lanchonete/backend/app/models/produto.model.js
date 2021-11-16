const sql = require("./db.js");

//Método Construtor

const ProdutoModel = function (produto) {
    this.nome = produto.nome;
    this.valor = produto.valor;
}

//Cria novo método no banco de dados
ProdutoModel.create = (produto, result) => {
    sql.query("INSERT INTO produtos SET ?", produto, (err, res) => {
        if (err) {
            console.log("Erro: ", err);
            result(err, null);
            return;
        }
        console.log("Produto criado: ", { idprodutos: res.insertId, ...produto });
        result(null, { idprodutos: res.insertId, ...produto });

    })


};

//Seleciona produto por ID
ProdutoModel.findById = (produtoId, result) => {

    sql.query("SELECT * FROM produtos where idprodutos = " + produtoId, (err, res) => {
        if (err) {
            console.log("Errro encontrado: ", err);
            result(null, err);
            return;
        }
        if (res.length) {
            console.log("Produto Encontrado: ", res[0]);
            result(null, res[0]);
        } else {
            result({ type: "not_found" }, null);
            console.log("Produto não encontrado");
        }
    });
};
//Seleciona todos os produtos
ProdutoModel.getAll = result => {
    sql.query("SELECT * FROM produtos", (err, res) => {
        if (err) {
            console.log("Errro encontrado: ", err);
            result(null, err);
            return;
        }

        console.log("produtos: ", res);
        result(null, res);
    })
};

//Atualizar o registro
ProdutoModel.updateById = (produtoId, produto, result) => {
    sql.query("UPDATE produtos SET nome = ?, valor = ? WHERE idprodutos = ?",
        [produto.nomem, produto.valor, produtoId], (err, ess) => {
            if (err) {
                console.log("Erro: ", err);
                result(null, err);
                return;

            } else if (res.affectedRows == 0) {
                result({ type: "not_found" }, null);
                return;
            } else {
                console.log("Produto Atualizado: ", { idprodutos: produtoId, ...produto });
                result(null, { idprodutos: produtoId, ...produto });
            }
        });
};

//Remover produto por ID
ProdutoModel.remove = (produtoId, result) => {
    sql.query("DELETE FROM produtos WHERE idprodutos = ?", produtoId, (err, res) => {
        if (err) {
            result(err, null);
        } else if (res.affectedRows == 0) {
            result({ type: "not_found" }, null);
        } else {
            result(null, res);
        }

    })
};

//Remover todos produtos 
ProdutoModel.removeAll = (result) => {
    sql.query("DELETE FROM produtos", (err, res) => {
        if (err) {
            result(err);
        } else {
            result(null);
        }
    })
};

module.exports = ProdutoModel;