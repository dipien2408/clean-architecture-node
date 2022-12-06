const botLog = require("../../bot-log");
const redis = require("redis");

const redisServer = redis.createClient(global.gConfig.cache);
redisServer.on("connect", function () {
  global.redisConnected = true;
  console.log("Redis CONNECTED");
});

redisServer.on("error", function (error) {
  global.redisConnected = false;
  botLog.handleRedisError(error);
});

module.exports = redisServer;
