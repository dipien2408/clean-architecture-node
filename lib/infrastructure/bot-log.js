const { ENV, PRODUCTION } = require("../application/utils/constant");
const logger = require("./logger");
const botLog = require("./externals/chat-bot/send-log-service");

function sendToBot({ name, error, info, url }) {
  if (ENV === PRODUCTION) botLog.sendLog({ name, error, info, url });
}

function handleApiServiceError(url, error, params) {
  logger.error(`SERVICE ERROR: [${error}], INFO:[${params}]`);
  sendToBot({ name: "SERVICE ERROR", error, params, url });
}

function handleDatabaseError(error) {
  logger.error(`Mongodb ERROR: [${error}]`);
  sendToBot({ name: "Mongodb ERROR", error });
}

function handleRedisError(error) {
  logger.error(`Redis ERROR: [${error}]`);
  sendToBot({ name: "Redis ERROR", error });
}

function handleFirebaseError(error) {
  logger.error(`Firebase ERROR: [${error}]`);
  sendToBot({ name: "Redis ERROR", error });
}

module.exports = {
  handleDatabaseError,
  handleRedisError,
  handleApiServiceError,
  handleFirebaseError,
};
