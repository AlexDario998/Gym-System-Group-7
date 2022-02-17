const express = require("express");
const router = express.Router();
const gymsSchema = require("../models/gyms");

// read requests
router.post("/gyms", (req, res) => {
    const gym = gymsSchema(req.body);
    gym
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});
  
//get all requests
router.get("/gyms", (req, res) => {
    gymsSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//get a request
router.get("/gyms/:id", (req, res) => {
const { id } = req.params;
    gymsSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//update a request
router.put("/gyms/:id", (req, res) => {
const { id } = req.params;
const {namegym, city} = req.body;
    gymsSchema.updateOne({_id: id},{$set: {namegym, city}})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//delete a request
router.delete("/gyms/:id", (req, res) => {
    const { id } = req.params;
    gymsSchema.remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;