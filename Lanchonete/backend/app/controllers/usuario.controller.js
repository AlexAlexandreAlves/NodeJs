const bcrypt = require("bcryptjs");
const usuarioModel = require("../models/usuario.model.js");

exports.sigUp = (req, res) => {
    if (!req.body.email || !req.body.senha || !req.body.tipo) {
        res.status(400).send({
            message: "E-mail, senha ou tipo não enviados."
        });
    } else {
        const usuario = new usuarioModel({
            email: req.body.email,
            senha: bcrypt.hashSync(req.body.senha, 8),
            tipo: req.body.tipo
        });

        usuarioModel.create(usuario, (err, data) =>{
            if (err){
                res.status(500).send({
                    message: err.message || "Ocorreu erro inesperado"
                });
            } else {
                res.send(data);
            }
        });
    }
}
