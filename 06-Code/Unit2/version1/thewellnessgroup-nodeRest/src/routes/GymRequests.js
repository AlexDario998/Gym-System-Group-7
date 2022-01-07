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

//get a request
router.get("/repair-request-gym-machines/:id", (req, res) => {
  const { id } = req.params;
  GymRequestsSchema.findById(id)
    .then((data) => res.json(data))
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
