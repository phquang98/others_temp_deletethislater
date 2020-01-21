// controller: logic that binds our endpoints/routes that we are going to define soon to what action or operation they will perform on an incoming request.

// ..../plantattribute is called API endpoints or API routes
const PlantAttribute = require("../models/PlantAttribute");
const mongoose = require("mongoose");

// HTTP GET req
exports.listAllPlantAttributes = (req, res) => {
  PlantAttribute.find({}, (err, docEntry) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(docEntry);
  });
};

exports.createNewPlantAttribute = (req, res) => {
  let newTask = new PlantAttribute(req.body);
  newTask.save((err, docEntry) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(docEntry);
  });
};

exports.readPlantAttribute = (req, res) => {
  // const id = new mongoose.Types.ObjectId(req.params.plantattributeId);
  // mongoshell su dung object id voi string type la khac nhau ->
  PlantAttribute.findById(req.params.plantAttributeId, (err, task) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log(req.params.plantAttributeId);
    console.log("at here ...");
    res.status(200).json(task);
  });
};

// get HTTP to child node using childnodeid -> get a bunch of data from diff time
exports.readByChildn = (req, res) => {
  PlantAttribute.find({ _id: req.params._id }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(data);
  })
    .sort({ time: -1 })
    .limit(7);
};

exports.updatePlantAttribute = (req, res) => {
  //---
  PlantAttribute.updateMany(
    { isUploaded: false },
    {
      $set: {
        isUploaded: true
      }
    },
    { multi: true, new: false }
  )
    .then(result => {
      res.status(200).json({ message: "Updated all read entries." });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
  //---
};

exports.deletePlantAttribute = (req, res) => {
  PlantAttribute.remove({ _id: req.params.taskid }, (err, task) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Task successfully deleted" });
  });
};
