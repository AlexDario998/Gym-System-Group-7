const express = require("express");
const router = express.Router();
const GymRequestsSchema = require("../models/repair-request-gym-machines");

// read requests
router.post("/repair-request-gym-machines", (req, res) => {
  const gymRequests = GymRequestsSchema(req.body);
  gymRequests
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all requests
router.get("/repair-request-gym-machines", (req, res) => {
  GymRequestsSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get only completed or no completed requests
router.get("/repair-request-gym-machines/:state", (req, res) => {
  const {state} = req.params
  GymRequestsSchema.find({confirmation: state})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
 
});

//get a request
router.get("/repair-request-gym-machines/:id", (req, res) => {
  const { id } = req.params;
  GymRequestsSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get only completed requests
router.get("/repair-request-gym-machines-true", (req, res) => {
  GymRequestsSchema.find({confirmation: true})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
 
});

//get only no completed requests
router.get("/repair-request-gym-machines-false", (req, res) => {
  GymRequestsSchema.find({confirmation: false})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
 
});

//get the number of no completed requests
router.get("/repair-request-gym-machines-true/count", (req, res) => {
  GymRequestsSchema.find({confirmation: true})
    .then((data) => 
      {
        var numberOfRegisters = 0

        for (var i = 0; i < data.length; i++) {
          if (data[i].confirmation === true) {
            numberOfRegisters++
          }
        }
        res.json(numberOfRegisters)
      })
    .catch((error) => res.json({ message: error }));
 
});

//get the number of completed requests
router.get("/repair-request-gym-machines-false/count", (req, res) => {
  GymRequestsSchema.find({confirmation: false})
    .then((data) => 
      {
        var numberOfRegisters = 0

        for (var i = 0; i < data.length; i++) {
          if (data[i].confirmation === false) {
            numberOfRegisters++
          }
        }
        res.json(numberOfRegisters)
      })
    .catch((error) => res.json({ message: error }));
 
});

//update a request
router.put("/repair-request-gym-machines/:id", (req, res) => {
  const { id } = req.params;
  const {idUser, idLocal, idGymMachine, date, machineType, gymZone, description, confirmation} = req.body;
  GymRequestsSchema.updateOne({_id: id},{$set: {idUser, idLocal, idGymMachine, date, machineType, gymZone, description, confirmation}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//delete a request
router.delete("/repair-request-gym-machines/:id", (req, res) => {
    const { id } = req.params;
    GymRequestsSchema.remove({_id: id})
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });



module.exports = router;
