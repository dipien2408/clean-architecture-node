const botLog = require("../../infrastructure/bot-log");
const axios = require("axios");
const instance = axios.create({ timeout: 10000 });

const MOBILE_ND_API = global.gConfig.mobile_ngocdung.url;
const token = global.gConfig.mobile_ngocdung.token;
const key = global.gConfig.mobile_ngocdung.key;
const config = {
  headers: { "Content-Type": "application/json", token: token, key: key },
};

async function pushNotification(body) {
  const url = `${MOBILE_ND_API}/api/notify/push`;

  return await instance
    .post(url, body, config)
    .then((res) => {
      const responseData = res.data;
      if (responseData.status === 200 && responseData.error_code === 1) {
        return responseData.data;
      }
    })
    .catch((error) => {
      botLog.handleApiServiceError(url, JSON.stringify(error), body);
    });
}

async function getUserInfo(user_id) {
  const url = `${MOBILE_ND_API}/api/profile`;
  config.params = { customer_id: user_id };

  return await instance
    .get(url, config)
    .then((res) => {
      const responseData = res.data;

      if (responseData.status === 200 && responseData.error_code === 1) {
        return responseData.data;
      }
    })
    .catch((error) => {
      botLog.handleApiServiceError(url, JSON.stringify(error), config.params);
    });
}

module.exports = { pushNotification, getUserInfo };
