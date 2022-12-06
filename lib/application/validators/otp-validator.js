const CustomError = require("../utils/custom-error");
const ErrorCode = require("../utils/error-code");

const OTP_LENGTH = global.gConfig.sms.otp_length;

function checkOTPLength(otp) {
  if (!otp || otp.length !== OTP_LENGTH) throw new CustomError.ClientError(ErrorCode.INVALID_OTP);
}

function checkValidOTP(isValid) {
  if (!isValid) throw new CustomError.ClientError(ErrorCode.INCORRECT_OTP);
}

module.exports = {
  checkOTPLength,
  checkValidOTP,
};
