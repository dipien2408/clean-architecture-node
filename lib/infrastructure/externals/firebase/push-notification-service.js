const botLog = require("../../bot-log");
const gcm = require("node-gcm");
const _ = require("lodash");

const API_KEY = global.gConfig.fcm.server_key;
const RETRY_COUNT = global.gConfig.fcm.retry_count;
const TIMEOUT = global.gConfig.fcm.timeout_in_millisecond;

function sendNotification({ recipients, content }, callback) {
  const requestOptions = { timeout: TIMEOUT };
  const sender = new gcm.Sender(API_KEY, requestOptions);
  const message = new gcm.Message(content);
  var registrationTokens = [recipients];
  if (_.isArray(recipients)) {
    registrationTokens = recipients;
  }

  const tokens = { registrationTokens };

  try {
    sender.send(message, tokens, RETRY_COUNT, callback);
  } catch (error) {
    botLog.handleFirebaseError("firebase push notify", error, tokens);
  }
}

module.exports = {
  sendNotification,
};
