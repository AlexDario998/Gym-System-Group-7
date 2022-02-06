const express = require("express");
const router = express.Router();
const tiMachinesSchema = require("../models/tiMachines");

// read requests
router.post("/timachines", (req, res) => {
    const tiMachine = tiMachinesSchema(req.body);
    tiMachine
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});
  
//get all requests
router.get("/timachines", (req, res) => {
    tiMachinesSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//get a request
router.get("/timachines/:id", (req, res) => {
const { id } = req.params;
    tiMachinesSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//update a request
router.put("/timachines/:id", (req, res) => {
const { id } = req.params;
const {name, serialNumber, brand, local, owner} = req.body;
    tiMachinesSchema.updateOne({_id: id},{$set: {name, serialNumber, brand, local, owner}})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//delete a request
router.delete("/timachines/:id", (req, res) => {
    const { id } = req.params;
    tiMachinesSchema.remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;