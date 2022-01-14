const express = require("express");
const router = express.Router();
const TIDevicesRequestsSchema = require("../models/repair-request-ti-devices");

// read requests
router.post("/repair-request-ti-devices", (req, res) => {
  const tiDevicesRequests = TIDevicesRequestsSchema(req.body);
  tiDevicesRequests
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all requests
router.get("/repair-request-ti-devices", (req, res) => {
  TIDevicesRequestsSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get only completed requests
router.get("/repair-request-ti-devices-true", (req, res) => {
  TIDevicesRequestsSchema.find({confirmation: true})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
 
});

//get only no completed requests
router.get("/repair-request-ti-devices-false", (req, res) => {
  TIDevicesRequestsSchema.find({confirmation: false})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
 
});

//get the number of completed requests
router.get("/repair-request-ti-devices-true/count", (req, res) => {
  TIDevicesRequestsSchema.find({confirmation: true})
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
router.get("/repair-request-ti-devices-false/count", (req, res) => {
  TIDevicesRequestsSchema.find({confirmation: false})
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

//get a request
router.get("/repair-request-ti-devices/:id", (req, res) => {
  const { id } = req.params;
  TIDevicesRequestsSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//update a request
router.put("/repair-request-ti-devices/:id", (req, res) => {
  const { id } = req.params;
  const {idUser, idLocal, idTIDevice, date, description, confirmation} = req.body;
  TIDevicesRequestsSchema.updateOne({_id: id},{$set: {idUser, idLocal, idTIDevice, date, description, confirmation}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//delete a request
router.delete("/repair-request-ti-devices/:id", (req, res) => {
    const { id } = req.params;
    TIDevicesRequestsSchema.remove({_id: id})
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });



module.exports = router;
