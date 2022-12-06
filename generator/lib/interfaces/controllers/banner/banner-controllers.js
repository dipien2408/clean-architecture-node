const getBannerList = require("../../../application/use-case/banner/get-banner-list");

async function getBanner() {
  return await getBannerList();
}

module.exports = { getBanner };
