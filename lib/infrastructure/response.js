const ErrorCode = require("../application/utils/error-code");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.handleSuccess = (data = {}, errorCode = ErrorCode.SUCCESS, status = 200) => {
      return res.json(assignResp(res, data, errorCode.message, errorCode.code, status));
    };

    res.error = (errorCode = ErrorCode.SYSTEM_ERROR, status = 500) => {
      return res.json(assignResp(res, {}, errorCode.message, errorCode.code, status));
    };

    res.handleError = (error) => {
      console.error(error);
      if (!error || !error.code) error = ErrorCode.SYSTEM_ERROR;
      return res.error(error, error.status);
    };

    function assignResp(res, data, message, code, status) {
      res.data = { status: status, code: code, message: message, data: data };

      return res.data;
    }

    next();
  });
};
