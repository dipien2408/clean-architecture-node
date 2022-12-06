const mongoose = require("mongoose");
const COLLECTION = require("../collections");

module.exports = new mongoose.Schema(
  {
    phone: { type: String, index: true },
    date: { type: Date, default: () => new Date() },
    body: { type: Object },
    result: { type: Object },
  },
  { collection: COLLECTION.sms_log }
);
