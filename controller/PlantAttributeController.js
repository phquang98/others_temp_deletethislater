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
  PlantAttribute.find({ childnodeid: req.params.childnodeid }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(data);
  })
    .sort({ time: -1 })
    .limit(7);
};

exports.updatePlantAttribute = (req, res) => {
  PlantAttribute.findOneAndUpdate(
    { _id: req.params.taskid },
    req.body,
    { new: true },
    (err, task) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(task);
    }
  );
};

exports.deletePlantAttribute = (req, res) => {
  PlantAttribute.remove({ _id: req.params.taskid }, (err, task) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Task successfully deleted" });
  });
};
