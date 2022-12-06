module.exports = (app) => {
  app.use("/api", require("../lib/interfaces/routes/user/user-route"));
};
