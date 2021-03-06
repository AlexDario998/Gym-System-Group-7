const express = require("express");
const router = express.Router();
const usersSchema = require("../models/users");

// read requests
router.post("/users", (req, res) => {
  let users = req.body;
  var splitName = users.lastName.split(" ", 2);
  splitName = splitName[0];
  users.userName = users.name.charAt(0) + splitName;

  let newUser = usersSchema({
    name: users.name,
    lastName: users.lastName,
    userName: users.userName,
    password: users.password,
    idCard: users.idCard,
    email: users.email,
    type: users.type,
    gym: users.gym,
  });
  newUser
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get all requests
router.get("/users", (req, res) => {
  usersSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//get a request
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  usersSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//update a request
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, lastName, userName, password, idCard, email, type, gym } =
    req.body;
  usersSchema
    .updateOne(
      { _id: id },
      { $set: { name, lastName, userName, password, idCard, email, type, gym } }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//delete a request
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  usersSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
