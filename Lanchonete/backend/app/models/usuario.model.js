const { resume } = require("./db.js");
const sql = require("./db.js");
//Construtor
const Usuario = function (usuario) {
    this.email = usuario.email;
    this.senha = usuario.senha;
    this.tipo = usuario.tipo;
}

Usuario.create = (usuario, result) => {
    sql.query("INSERT INTO usuarios SET ?", usuario, (err, res) => {
        if (err) {
            console.log("Erro: ", err);
        } else {
            result(null, "Usuario criado com sucesso");
        }
    })
}

Usuario.findByEmail = (emailUsuario, result) => {
    sql.query("SELECT * FROM usuarios WHERE email = ?", emailUsuario, (err, res) => {
        console.log(res);
        if (err) {
            result(err, null);
        } else if (res.length) {
            result(null, res[0]);
        } else {
          
            result({ kind: "not_found" }, null);
        }
    })
}

Usuario.findById = (idUsuario, result) => {
    sql.query("SELECT * FROM usuarios WHERE idsuarios = ?", idUsuario, (err, res) => {
        if (err) {
            result(err, null);
        } else if (res.lenght) {
            result(null, res[0]);
        } else {
            result({ kind: "not_found" }, null);
        }
    })
}

module.exports = Usuario;