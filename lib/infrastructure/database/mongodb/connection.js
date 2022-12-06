const mongoose = require("mongoose");
const { handleDatabaseError } = require("../../bot-log");

async function init(config) {
  try {
    const db = mongoose.connection;
    //error after initial connection was established
    db.on("error", (err) => handleDatabaseError(err));
    db.on("disconnected", () => handleDatabaseError("Mongodb disconnected"));

    db.once("open", () => console.log("Mongodb CONNECTED"));

    const options = { serverSelectionTimeoutMS: 15000 };
    await mongoose.connect(config, options);

    global.process.on("SIGINT", function () {
      mongoose.connection.close(function () {
        console.log("Mongoose disconnected on app termination");
        global.process.exit(0);
      });
    });
  } catch (error) {
    // initial connection errors
    handleDatabaseError(error);
  }
}

module.exports = { init };
