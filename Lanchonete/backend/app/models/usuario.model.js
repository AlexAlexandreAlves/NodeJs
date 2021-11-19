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
        }else{
            result(null, "Usuario criado com sucesso");
        }
    })
}