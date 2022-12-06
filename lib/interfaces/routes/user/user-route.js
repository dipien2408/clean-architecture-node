const express = require("express");
const router = express.Router();
const route = require("../../route");
const userController = require("../../controllers/user/user-controllers");

const USER_PATH = "/users";

const SEND_OTP = `${USER_PATH}/send-otp`;
router.post(
  SEND_OTP,
  route.handle(async (req) => await userController.sendOTP(req))
);

const VALIDATE_OTP = `${USER_PATH}/validation-otp`;
router.post(
  VALIDATE_OTP,
  route.handle(async (req) => await userController.validateOTP(req))
);

const LOGIN = `${USER_PATH}/login`;
router.post(
  LOGIN,
  route.handle(async (req) => await userController.login(req))
);

module.exports = router;
