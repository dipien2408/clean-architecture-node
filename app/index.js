const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const path = require("path");
const appRouter = require("./router");
const response = require("../lib/infrastructure/response");
const consoleLog = require("../lib/infrastructure/console-log");
const { PRODUCTION, ENV } = require("../lib/application/utils/constant");
const { authorization } = require("../lib/infrastructure/security/authorization");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(path.resolve(), "views"));
app.set("view engine", "pug");
app.use("/", require("../lib/interfaces/routes/index-route"));

response(app);
if (ENV === PRODUCTION) app.use(consoleLog.writeLog);
app.use(authorization);
app.use(logger("dev"));
appRouter(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError.NotFound());
});

// error handler
app.use(function (err, req, res) {
  console.error(err.message);

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

global.process.env.UV_THREADPOOL_SIZE = 128;

module.exports = app;
