module.exports = app => {
  const aeroportos = require("../controllers/aeroporto.controller.js");
  const contas = require("../controllers/conta.controller.js");

  var router = require("express").Router();

  router.post("/contas/cadastro", contas.create);

  router.get("/aeroportos/buscar", aeroportos.findAll);
  // router.get("/conta/buscar", conta.findAll);
  router.get("/aeroportos/buscar/:id", aeroportos.findOne);

  app.use('/api', router);
};
