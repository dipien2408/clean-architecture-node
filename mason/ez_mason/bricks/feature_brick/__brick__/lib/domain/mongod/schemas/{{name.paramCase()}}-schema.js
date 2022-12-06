const mongoose = require("mongoose");
const COLLECTION = require("../collections");

module.exports = new mongoose.Schema(
  {
    title: { type: String },
    image: { type: String },
    sort: { type: Number },
    active: { type: Boolean },
    created_time: { type: Date, default: () => new Date() },
    updated_time: { type: Date, default: () => new Date() },
  },
  { collection: COLLECTION.{{name.snakeCase()}} }
);
