const get{{name.pascalCase()}}List = require("../../../application/use-case/{{name.paramCase()}}/get-{{name.paramCase()}}-list");

async function get{{name.pascalCase()}}() {
  const data = await get{{name.pascalCase()}}List();
  
  return { items: data };
}

module.exports = { get{{name.pascalCase()}} };
