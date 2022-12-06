const mongoose = require("mongoose");
const COLLECTION = require("../collections");

module.exports = new mongoose.Schema(
  {
    username: { type: String, index: true },
    password: { type: String },
    name: { type: String },
    avatar: { type: String },
    active: { type: Boolean, default: true },
    created_by: { type: Object },
    product: { type: String },
    phone: { type: String },
    dob: { type: Date },
    created_time: { type: Date, default: () => new Date() },
    updated_time: { type: Date, default: () => new Date() },
  },
  { collection: COLLECTION.user }
);
