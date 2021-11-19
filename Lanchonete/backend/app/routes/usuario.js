module.exports = app => {
    const usuarioController = require("../controllers/usuario.controller.js");

    //Caso possua cadastro
    //app.post("/sigin", usuarioController.sigIn);
    //Caso não possua cadastro
    app.post("/sigup", usuarioController.sigUp);

    /*  app.post("/usuarios", usuarioController.create);
      app.get("/usuarios", usuarioController.findAll);
      app.get("/usuarios/:pedidoId", usuarioController.findById);
      app.put("/usuarios/:pedidoId", usuarioController.update);
      app.delete("/usuarios/:pedidoId", usuarioController.delete);
      app.delete("/usuarios", usuarioController.deleteAll);*/
}