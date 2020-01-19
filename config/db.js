// Import 3rd party modules
const mongoose = require("mongoose");

// Import custom modules
require("../models/PlantAttribute");
require("dotenv/config"); // import data from .env

// Declares options values for DB connection
const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(process.env.DB_CONNECTION, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

// require any models
