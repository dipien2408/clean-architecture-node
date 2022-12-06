const express = require("express");
const router = express.Router();
const route = require("../../route");
const {{name.camelCase()}}Controller = require("../../controllers/{{name.paramCase()}}/{{name.paramCase()}}-controllers");

const {{name.constantCase()}}_PATH = "/{{name.paramCase()}}";
router.get(
  {{name.constantCase()}}_PATH,
  route.handle(async (req) => await {{name.camelCase()}}Controller.get{{name.pascalCase()}}(req))
);

module.exports = router;
