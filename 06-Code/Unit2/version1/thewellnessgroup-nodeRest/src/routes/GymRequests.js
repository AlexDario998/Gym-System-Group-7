const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
const RequestGymMachine = require("../models/repair-request-gym-machines");

// create request of gym machine
router.post("/repair-request-gym-machines", (req, res) => {
  let request = req.body
  let gymMachineRequest = new RequestGymMachine(
    {
      "idUser": request.idUser,
      "idLocal": request.idLocal,
      "idGymMachine": request.idGymMachine,
      "date": request.date,
      "machineType": request.machineType,
      "gymZone": request.gymZone,
      "description": request.description,
      "confirmation": request.confirmation
    }
  )

  gymMachineRequest.save((err, requestDB) => {
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
          user: request.emailUser,
          pass: request.passwordUser
        }
      })
      
      let mailOptions = {
        from: request.emailUser,
        to: 'amantenaince@gmail.com',
        subject: 'Solicitud de arreglo de máquina de gimnasio',
        html: `
          <h3>Líder del gimnasio: ${request.fullNameUser}</h3>
          <h4>Fecha de encargo: ${request.date}</h4>
          <h4>Local: ${request.nameLocal}</h4>
          <h4>Ciudad: ${request.city}</h4>
          <h4>Máquina de gimnasio: ${request.gymMachine}</h4>
          <h4>Número serial: ${request.gymMachineSerialNumber}</h4>
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

//get only completed or no completed requests
router.get("/repair-request-gym-machines/:state", (req, res) => {
  const {state} = req.params
  GymRequestsSchema.find({confirmation: state})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
 
});

//get all requests
router.get("/repair-request-gym-machines", (req, res) => {
  RequestGymMachine.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get a request
router.get("/repair-request-gym-machines/:id", (req, res) => {
  const { id } = req.params;
 RequestGymMachine.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get only completed requests
router.get("/repair-request-gym-machines-true", (req, res) => {
 RequestGymMachine.find({confirmation: true})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
 
});

//get only no completed requests
router.get("/repair-request-gym-machines-false", (req, res) => {
 RequestGymMachine.find({confirmation: false})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
 
});

//get the number of completed requests
router.get("/repair-request-gym-machines-true/count", (req, res) => {
 RequestGymMachine.find({confirmation: true})
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
router.get("/repair-request-gym-machines-false/count", (req, res) => {
 RequestGymMachine.find({confirmation: false})
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
 RequestGymMachine.updateOne({_id: id},{$set: {idUser, idLocal, idGymMachine, date, machineType, gymZone, description, confirmation}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//delete a request
router.delete("/repair-request-gym-machines/:id", (req, res) => {
    const { id } = req.params;
   RequestGymMachine.remove({_id: id})
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });



module.exports = router;
