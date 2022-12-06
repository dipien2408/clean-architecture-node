const BannerModel = require("../../models/banner/banner-model");
const bannerMongodRepo = require("../../repository/banner/banner-mongod");

module.exports = async function getBannerList(condition) {
  const data = await bannerMongodRepo.selectManyByCondition(condition);
  const items = data.map((item) => new BannerModel(item));

  return { items };
};
