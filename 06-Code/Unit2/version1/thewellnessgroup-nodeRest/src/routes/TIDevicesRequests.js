const express = require("express");
const nodemailer = require("nodemailer")
const router = express.Router();
const RequestTiDevice = require("../models/repair-request-ti-devices");
require('dotenv').config

// read requests
router.post("/repair-request-ti-devices", (req, res) => {
  let request = req.body
  let tiDevicesRequest = new RequestTiDevice(
    {
      "idUser": request.idUser,
      "idLocal": request.idLocal,
      "idTIDevice": request.idTIDevice,
      "date": request.date,
      "description": request.description,
      "confirmation": request.confirmation
    }
  )

  tiDevicesRequest.save((err, requestDB) => {
    if (err) {
      res.json({
        result: false,
        message: "No se pudo realizar la solicitud de arreglo.",
        err
      })
    }else {
      res.json({
        result: true,
        message: "Se realizo al solicitud.",
        requestDB
      })

      let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "seatvelastegui@gmail.com",
          pass: "seat_jose"
        }
      })
      
      let mailOptions = {
        from: 'seatvelastegui@gmail.com',
        to: 'elkin.cadena2015@gmail.com',
        subject: 'Hola, bienvenido',
        html: `
          <h3>Encargado: ${request.idUser}</h3>
          <h4>Fecha de encargo: ${request.date}</h4>
          <p>Descripción: ${request.description}</p>
        `
      }
      
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
        }else {
            console.log("El correo se envio correctamente " + info.response)
        }
      })
    }
  })
});

//get all requests
router.get("/repair-request-ti-devices", (req, res) => {
  RequestTiDevice.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get only completed or no completed requests
router.get("/repair-request-ti-devices/:state", (req, res) => {
  const {state} = req.params
  RequestTiDevice.find({confirmation: state})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
 
});

//get the number of completed requests
router.get("/repair-request-ti-devices-true/count", (req, res) => {
  RequestTiDevice.find({confirmation: true})
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
  RequestTiDevice.find({confirmation: false})
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
  RequestTiDevice.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//update a request
router.put("/repair-request-ti-devices/:id", (req, res) => {
  const { id } = req.params;
  const {idUser, idLocal, idTIDevice, date, description, confirmation} = req.body;
  RequestTiDevice.updateOne({_id: id},{$set: {idUser, idLocal, idTIDevice, date, description, confirmation}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//delete a request
router.delete("/repair-request-ti-devices/:id", (req, res) => {
    const { id } = req.params;
    RequestTiDevice.remove({_id: id})
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

module.exports = router;
