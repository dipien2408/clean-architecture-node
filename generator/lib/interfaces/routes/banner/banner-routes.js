const express = require("express");
const router = express.Router();
const route = require("../../route");
const bannerController = require("../../controllers/banner/banner-controllers");

const BANNER_PATH = "/banner";
router.get(
  BANNER_PATH,
  route.handle(async (req) => await bannerController.getBanner(req))
);

module.exports = router;
