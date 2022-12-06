const ErrorCode = require("../../application/utils/error-code");

async function authorization(req, res, next) {
  const product = req.header("product");
  const token = req.header("token");

  const auth = global.gConfig.auth[product];

  var error = ErrorCode.SYSTEM_ERROR;

  if (!auth) {
    error = ErrorCode.INVALID_PRODUCT;
    return res.handleError(error, error.status);
  }
  if (token !== auth.token) {
    error = ErrorCode.INVALID_TOKEN;
    return res.handleError(error, error.status);
  }

  return next();
}

module.exports = { authorization };
