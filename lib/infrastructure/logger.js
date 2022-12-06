const winston = require("winston");
require("winston-daily-rotate-file");

const options = {
  info: {
    level: "info",
    filename: "./logs/info.log",
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  error: {
    level: "error",
    filename: "./logs/error.log",
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: "info",
    handleExceptions: true,
    json: false,
    colorize: true,
  },
  rotateFile: {
    filename: "./logs/files/file.%DATE%.log",
    datePattern: "YYYY-MM-DD",
    zippedArchive: true,
    maxSize: "5m",
    maxFiles: "14d",
  },
};

const logger = new winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.DailyRotateFile(options.rotateFile),
    new winston.transports.File(options.error),
    new winston.transports.Console(options.console),
  ],
  exitOnError: false, // do not exit on handled exceptions
});

module.exports = logger;
