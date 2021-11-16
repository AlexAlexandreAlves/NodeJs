const { resume } = require("../models/db.js");
const produtoModel = require("../models/produto.model.js");

exports.create = (req, res) => {

    if (!req.body.nome || !req.body.valor) {
        res.status(400).send({
            message: "Conteúdo do corpo de requisição vazia"
        });
    } else {

        const produto = new produtoModel({
            nome: req.body.nome,
            valor: req.body.valor
        });

        produtoModel.create(produto, (err, data) => {

            if (err) {
                res.status(500).send({
                    message: err.message || "Ocorreu algum erro desconhecido!"
                });

            } else {
                res.send(data);
            }
        })
    }
};

exports.findById = (req, res) => {

    produtoModel.findById(req.params.produtoId, (err, data) => {
        if (err) {
            if (err.type == "not_found") {
                res.status(404).send({
                    message: "Produto não encontrado! ID: " + req.params.produtoId
                });

            } else {
                res.status(500).send({
                    message: "Erro ao retornar o produto com o ID " + red.params.produtoId
                });
            }
        } else {
            res.send(data);
        }
    })

};

exports.getAll = (req, res) => {
    produtoModel.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Ocorreu algum erro desconhecido!"
            })
        } else {
            res.send(data);
        }
    })
};

exports.updateById = (req, res) => {
    if (!req.body.nome || !req.body.valor) {
        res.status(400).send({
            message: "Conteúdo do corpo de requisição vazia"
        });
    } else {

        const produto = new produtoModel({
            nome: req.body.nome,
            valor: req.body.valor
        });
    };
    produtoModel.updateById(req.params.produtoId, produto, (err, data) => {
        if (err) {
            if (err.type == "not_found") {
                res.status(404).send({
                    message: "Produto não encontrado."
                });
            } else {
                res.status(500).send({
                    message: "Erro ao atualizar o produto."
                })
            }
        } else {
            res.send(data);
        }
    })

};

exports.remove = (req, res) => {
    produtoModel.remove(req.params.produtoId, (err, data) => {
        if (err) {
            if (err.type == "not found") {
                res.status(404).send({
                    message: "Produto não encontrado."
                });
            } else {
                res.status(500).send({
                    message: "Erro ao excluir o produto."
                });
            }
        } else {
            res.send({ message: "Produto deletado com sucesso. " });

        }
    })

};

exports.removeAll = (req, res) => {
    produtoModel.removeAll((err, data) => {
        if (err) {
            res.status(500).send({ message: "Erro ao deletar o prouto!" });
        } else {
            res.send({ message: "Todos os produtos teletados com sucesso!" })
        }
    })
};