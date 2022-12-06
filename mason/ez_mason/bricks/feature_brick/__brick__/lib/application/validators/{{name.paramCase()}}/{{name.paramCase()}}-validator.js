const CustomError = require("../../utils/custom-error");
const ErrorCode = require("../../utils/error-code");

function exampleValid() {
  throw new CustomError.ClientError(ErrorCode.SYSTEM_ERROR);
}

module.exports = {
  exampleValid,
};
