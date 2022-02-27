const express = require("express");
const router = express.Router();
const InfrastructureSchema = require("../models/infrastructure");

// read requests
router.post("/infrastructure", (req, res) => {
    const infrastructure = InfrastructureSchema(req.body);
    infrastructure
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  //get all requests
  router.get("/infrastructure", (req, res) => {
    InfrastructureSchema.find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  //get a request
  router.get("/infrastructure/:id", (req, res) => {
    const { id } = req.params;
    InfrastructureSchema.findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  module.exports = router;
  
  //update a request
  router.put("/infrastructure/:id", (req, res) => {
    const { id } = req.params;
    const {name, gym} = req.body;
    InfrastructureSchema.updateOne({_id: id},{$set: {name, gym}})
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
  
  //delete a request
  router.delete("/infrastructure/:id", (req, res) => {
      const { id } = req.params;
      InfrastructureSchema.remove({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
    });
  
    module.exports = router;
  
  