const { ENV, PRODUCTION } = require("../../utils/constant");
const otpRepo = require("../../repository/otp/otp-redis");

module.exports = async function saveOtpToRedis(phone) {
  var otp = global.gConfig.sms.otp_test;
  if (ENV === PRODUCTION) otp = otpRepo.genOtp();
  await otpRepo.saveOtp(phone, otp);
};
