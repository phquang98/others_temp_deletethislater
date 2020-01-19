// Import 3rd party modules
const Router = require("express").Router;
const router = Router();

// Import custom modules
const plantAttributeController = require("../controller/PlantAttributeController");

// API Endpoints _/plantAttribute/

// GET HTTP Req
router.get("/", plantAttributeController.listAllPlantAttributes);

// POST HTTP Req
router.post("/", plantAttributeController.createNewPlantAttribute);

// API Endpoints _/plantAttribute/:plantAttributeId

// GET HTTP Req
router.get("/:plantAttributeId", plantAttributeController.readPlantAttribute);

// GET HTTP Req for childnodeid
router.get("/childnode/:childnodeid", plantAttributeController.readByChildn);

// PUT HTTP Req
router.put("/:plantAttributeId", plantAttributeController.updatePlantAttribute);

// DELETE HTTP Req
router.delete(
  "/:plantAttributeId",
  plantAttributeController.deletePlantAttribute
);

module.exports = router;
