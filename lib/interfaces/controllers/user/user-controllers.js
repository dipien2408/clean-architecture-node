const saveOtpToRedis = require("../../../application/use-case/otp/save-otp");
const verifyOtp = require("../../../application/use-case/otp/verify-otp");
const getLoginUser = require("../../../application/use-case/user/get-login-user");
const userValidator = require("../../../application/validators/user/user-validator");
const otpValidator = require("../../../application/validators/otp-validator");

async function sendOTP({ body }) {
  const { phone } = body;
  userValidator.checkPhone(phone);

  await saveOtpToRedis(phone);
}

async function validateOTP({ body }) {
  const { phone, otp } = body;

  userValidator.checkPhone(phone);
  otpValidator.checkOTPLength(otp);

  await verifyOtp(phone, otp);
  return await getLoginUser(phone);
}

async function login() {}

module.exports = { sendOTP, validateOTP, login };
