const express = require("express");
const router = express.Router();
const gymMachinesSchema = require("../models/gymMachines");

// read requests
router.post("/machines", (req, res) => {
    const gymMachine = gymMachinesSchema(req.body);
    gymMachine
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});
  
//get all requests
router.get("/machines", (req, res) => {
    gymMachinesSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//get a request
router.get("/machines/:id", (req, res) => {
const { id } = req.params;
    gymMachinesSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//update a request
router.put("/machines/:id", (req, res) => {
const { id } = req.params;
const {name, gym, serialNumber, mark, zone} = req.body;
    gymMachinesSchema.updateOne({_id: id},{$set: {name, gym, serialNumber, mark, zone}})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//delete a request
router.delete("/machines/:id", (req, res) => {
    const { id } = req.params;
    gymMachinesSchema.remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;