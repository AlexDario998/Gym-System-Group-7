const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
const RequestInfrastructure = require("../models/repair-request-infrastructures");

// save infrastructure request
router.post("/repair-request-infrastructures", (req, res) => {
  let request = req.body
  let infraRequest = new RequestInfrastructure(
    {
      "idUser": request.idUser,
      "idLocal": request.idLocal,
      "date": request.date,
      "description": request.description,
      "confirmation": request.confirmation
    }
  )

  infraRequest.save((err, requestDB) => {
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
        subject: 'Solicitud de arreglo de dispositivo TI',
        html: `
          <h3>Líder del gimnasio: ${request.fullNameUser}</h3>
          <h4>Fecha de encargo: ${request.date}</h4>
          <h4>Local: ${request.nameLocal}</h4>
          <h4>Ciudad: ${request.city}</h4>
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
router.get("/repair-request-infrastructures", (req, res) => {
  RequestInfrastructure.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get a request by id
router.get("/repair-request-infrastructures/:id", (req, res) => {
  const { id } = req.params;
  RequestInfrastructure.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get only completed requests
router.get("/repair-request-infrastructures-true", (req, res) => {
  RequestInfrastructure.find({confirmation: true})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
 
});

//get only no completed requests
router.get("/repair-request-infrastructures-false", (req, res) => {
  RequestInfrastructure.find({confirmation: false})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
 
});

//get the number of completed requests
router.get("/repair-request-infrastructures-true/count", (req, res) => {
  RequestInfrastructure.find({confirmation: true})
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
  RequestInfrastructure.find({confirmation: false})
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
  RequestInfrastructure.updateOne({_id: id},{$set: {idUser, idLocal, date, description, confirmation}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//delete a request
router.delete("/repair-request-infrastructures/:id", (req, res) => {
    const { id } = req.params;
    RequestInfrastructure.remove({_id: id})
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  module.exports = router;

