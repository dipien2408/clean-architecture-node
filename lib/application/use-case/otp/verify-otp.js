const otpRepo = require("../../repository/otp/otp-redis");
const otpValidator = require("../../validators/otp-validator");

module.exports = async function verifyOtp(phone, otp) {
  const isValid = await otpRepo.verifyOtp(phone, otp);
  otpValidator.checkValidOTP(isValid);
};
