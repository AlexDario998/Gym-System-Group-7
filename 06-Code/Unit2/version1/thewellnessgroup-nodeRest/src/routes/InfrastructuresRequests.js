const express = require("express");
const router = express.Router();
const InfrastructuresRequestsSchema = require("../models/repair-request-infrastructures");

// read requests
router.post("/repair-request-infrastructures", (req, res) => {
  const infrastructuresRequests = InfrastructuresRequestsSchema(req.body);
  infrastructuresRequests
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all requests
router.get("/repair-request-infrastructures", (req, res) => {
  InfrastructuresRequestsSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get a request
router.get("/repair-request-infrastructures/:id", (req, res) => {
  const { id } = req.params;
  InfrastructuresRequestsSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get only completed requests
router.get("/repair-request-infrastructures-true", (req, res) => {
  InfrastructuresRequestsSchema.find({confirmation: true})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
 
});

//get only no completed requests
router.get("/repair-request-infrastructures-false", (req, res) => {
  InfrastructuresRequestsSchema.find({confirmation: false})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
 
});

//get the number of completed requests
router.get("/repair-request-infrastructures-true/count", (req, res) => {
  InfrastructuresRequestsSchema.find({confirmation: true})
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

//get the number of no completed requests
router.get("/repair-request-infrastructures-false/count", (req, res) => {
  InfrastructuresRequestsSchema.find({confirmation: false})
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
router.put("/repair-request-infrastructures/:id", (req, res) => {
  const { id } = req.params;
  const {idUser, idLocal, date, description, confirmation} = req.body;
  InfrastructuresRequestsSchema.updateOne({_id: id},{$set: {idUser, idLocal, date, description, confirmation}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//delete a request
router.delete("/repair-request-infrastructures/:id", (req, res) => {
    const { id } = req.params;
    InfrastructuresRequestsSchema.remove({_id: id})
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  module.exports = router;

