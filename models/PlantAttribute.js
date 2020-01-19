const mongoose = require("mongoose");

// Create a schema - how a post should look like (a description)
const PlantAttriSchema = mongoose.Schema({
  temp: {
    type: Number,
    required: true
  },
  light: {
    type: Number,
    required: true
  },
  humidity: {
    type: Number,
    required: true
  },
  tvoc: {
    type: Number,
    required: true
  },
  water: {
    type: Number,
    required: true
  },
  co2: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  isUploaded: {
    type: Boolean,
    default: false
  },
  childnodeid: {
    type: String,
    required: true
  }
});

// 1st arg show up on Mongo Atlas, 2nd arg will give the 1st arg the schema that it should use
module.exports = mongoose.model("childnode_data", PlantAttriSchema);
