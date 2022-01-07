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
module.exports = router;

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

