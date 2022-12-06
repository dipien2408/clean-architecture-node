const botLog = require("../../infrastructure/bot-log");
const smsLogsRepo = require("../../repository/sms-log-repo");
const hash = require("../utils/crypto");
const axios = require("axios");
const instance = axios.create({
  timeout: global.gConfig.sms.timeout_in_millisecond,
});

const TEMPLATE = global.gConfig.sms.template;
const PRODUCT = global.gConfig.sms.product;
const PUBLIC_KEY = global.gConfig.sms.public_key;
const PRIVATE_KEY = global.gConfig.sms.private_key;

const CONFIG = {
  headers: {
    "content-type": "application/json",
    "x-product": PRODUCT,
    "x-token": PUBLIC_KEY,
    "x-signature": "",
  },
};

const URL_SEND_OTP = `${global.gConfig.sms.url}`;

async function sendOtp(phone, otp) {
  const body = {
    content: TEMPLATE.replace("[OTP]", otp),
    recipients: phone,
    platform: "mobile",
    account: "ngocdung.cskh",
  };

  const smsLogsData = { phone, body, result: null };
  const signature = hash.sha256(PRIVATE_KEY + JSON.stringify(body));

  CONFIG.headers["x-signature"] = signature;

  return instance
    .post(URL_SEND_OTP, body, CONFIG)
    .then((response) => {
      smsLogsData.result = response.data;
      return response.data;
    })
    .catch((err) => {
      const error = { error: err.message };
      smsLogsData.result = error;
      botLog.handleApiServiceError(URL_SEND_OTP, error, body);
    })
    .finally(() => {
      smsLogsRepo.create(smsLogsData);
    });
}

function verifySendOtp(resp) {
  return resp && resp.status == 1;
}

module.exports = {
  sendOtp,
  verifySendOtp,
};
