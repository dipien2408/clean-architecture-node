const {{name.pascalCase()}}Model = require("../../models/{{name.paramCase()}}/{{name.paramCase()}}-model");
const {{name.camelCase()}}MongodRepo = require("../../repository/{{name.paramCase()}}/{{name.paramCase()}}-mongod");

module.exports = async function get{{name.pascalCase()}}List(condition) {
  const data = await {{name.camelCase()}}MongodRepo.selectManyByCondition(condition);
  return data.map((item) => new {{name.pascalCase()}}Model(item));

};
