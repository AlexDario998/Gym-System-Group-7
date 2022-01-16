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
        <div style="border: 1px solid #000;">
          <div style=" 
              background: #e65c00; 
              background: -webkit-linear-gradient(to right, #F9D423, #e65c00);
              background: linear-gradient(to right, #F9D423, #e65c00);
              border: 1px solid #000; 
              display: flex;
              align-items: center;
              text-align: center;
          ">
              <h2 style=" 
                  display: inline-block;
                  font-family: sans-serif;
                  margin-right: auto;
                  margin-left: auto;">THE WELLNESS GROUP</h2> 
          </div>
          <div style="margin-left: 30px;">
              <h4 style="display: inline-block;">Líder del gimnasio:</h4><p style="display: inline-block;  margin-left: 10px;">${request.fullNameUser}</p>
              <br/>
              <h4 style="display: inline-block;">Fecha de encargo:</h4><p style="display: inline-block;  margin-left: 10px;">${request.date}</p>
              <br/>
              <h4 style="display: inline-block;">Local:</h4><p style="display: inline-block;  margin-left: 10px;">${request.nameLocal}</p>
              <br/>
              <h4 style="display: inline-block;">Ciudad:</h4><p style="display: inline-block;  margin-left: 10px;">${request.city}</p>
              <br/>
              <h4 style="display: inline-block;">Máquina de gimnasio:</h4><p style="display: inline-block;  margin-left: 10px;">${request.gymMachine}</p>
              <br/>
              <h4 style="display: inline-block;">Número serial:</h4><p style="display: inline-block;  margin-left: 10px;">${request.gymMachineSerialNumber}</p>
              <br/>
              <h4 style="display: inline-block;">Descripción:</h4><p style="display: inline-block;  margin-left: 10px;">${request.description}</p>
          </div>
        </div>
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
  RequestGymMachine.find({confirmation: state})
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
