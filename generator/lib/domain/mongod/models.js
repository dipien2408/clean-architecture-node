const mongoose = require("mongoose");
const COLLECTION = require("./collections");

module.exports = {
  SMSLogModel: mongoose.model(COLLECTION.sms_log, require("./schemas/sms-schema")),
  UserModel: mongoose.model(COLLECTION.user, require("./schemas/user-schema")),
  BannerModel: mongoose.model(COLLECTION.user, require("./schemas/banner-schema")),
};
