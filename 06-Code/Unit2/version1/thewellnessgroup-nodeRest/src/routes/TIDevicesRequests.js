const express = require("express");
const router = express.Router();
const TIDevicesRequestsSchema = require("../models/repair-request-ti-devices");

// read requests
router.post("/repair-requests-ti-devices", (req, res) => {
  const tiDevicesRequests = TIDevicesRequestsSchema(req.body);
  tiDevicesRequests
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all requests
router.get("/repair-requests-ti-devices", (req, res) => {
  TIDevicesRequestsSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get a request
router.get("/repair-requests-ti-devices/:id", (req, res) => {
  const { id } = req.params;
  TIDevicesRequestsSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


//update a request
router.put("/repair-requests-ti-devices/:id", (req, res) => {
  const { id } = req.params;
  const {idUser, idLocal, idTIDevice, date, description, confirmation} = req.body;
  TIDevicesRequestsSchema.updateOne({_id: id},{$set: {idUser, idLocal, idTIDevice, date, description, confirmation}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//delete a request
router.delete("/repair-requests-ti-devices/:id", (req, res) => {
    const { id } = req.params;
    TIDevicesRequestsSchema.remove({_id: id})
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });



module.exports = router;
