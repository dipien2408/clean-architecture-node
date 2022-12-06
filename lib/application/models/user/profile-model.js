const userHelper = require("../../helpers/user-helper");

module.exports = class Profile {
  constructor({ id, username, phone, active, name, gender, avatar }) {
    this.id = id;
    this.username = username;
    this.phone = phone;
    this.name = name || userHelper.DEFAULT_NAME;
    this.gender = gender === userHelper.MALE ? "Nữ" : "Nam";
    this.active = active;
    this.avatar = avatar || userHelper.DEFAULT_AVATAR;
  }
};
