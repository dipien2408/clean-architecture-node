const CustomError = require("../../utils/custom-error");
const ErrorCode = require("../../utils/error-code");

function checkPhone(phone) {
  const isValid = phone && phone.length == 10 && !isNaN(phone) && phone.charAt(0) === "0";
  if (!isValid) throw new CustomError.ClientError(ErrorCode.INVALID_PHONE);
}

module.exports = {
  checkPhone,
};
