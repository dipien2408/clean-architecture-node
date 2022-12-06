module.exports = class {{name.pascalCase()}}Model {
  constructor({ _id, title, sort, active, created_time, updated_time }) {
    this.id = _id;
    this.title = title;
    this.sort = sort;
    this.active = active;
    this.created_time = created_time;
    this.updated_time = updated_time;
  }
};
