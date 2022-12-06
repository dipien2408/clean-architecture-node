const handle = (func) => async (req, res) => {
  try {
    var result = await func(req, res);
    res.handleSuccess(result, res.code);
  } catch (error) {
    res.handleError(error);
  }
};

const handleError = (func) => async (req, res) => {
  try {
    await func(req, res);
  } catch (error) {
    res.handleError(error);
  }
};

const API_PATH = "/api";

module.exports = {
  handle,
  handleError,
  API_PATH,
};
