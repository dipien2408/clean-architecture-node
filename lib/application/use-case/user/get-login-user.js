const ProfileModel = require("../../models/user/profile-model");
const userMongodRepo = require("../../repository/user/user-mongod");

module.exports = async function getLoginUser(phone) {
  var user = await userMongodRepo.selectOneByCondition({ phone });
  if (!user) user = await userMongodRepo.create({ phone, username: phone });

  return new ProfileModel(user);
};
