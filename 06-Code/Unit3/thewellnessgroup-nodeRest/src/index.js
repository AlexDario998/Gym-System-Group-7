const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const TIDevicesRequests = require("./controller/TIDevicesRequests");
const InfrastructuresRequests = require("./controller/InfrastructuresRequests")
const GymRequests = require("./controller/GymRequests")
const Infrastructure = require("./controller/Infrastructure")
const Users = require("./controller/Users")
const TiMachines = require("./controller/tiMachinesController")
const GymMachines = require("./controller/gymMachinesController")
const Gyms = require("./controller/gymsController")

const app = express();
const port = process.env.PORT || 3001;
var cors = require('cors');
app.use(cors());


//middleware
app.use(express.json());
app.use(TIDevicesRequests);
app.use(InfrastructuresRequests);
app.use(GymRequests);
app.use(Infrastructure);
app.use(Users);
app.use(TiMachines);
app.use(GymMachines);
app.use(Gyms);

//routes
app.get('/', (req,res) =>{
res.send("Welcome to my API");
});

//mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(()=> console.log("Connected to MongoDB Atlas"))
.catch((error) => console.error(error));

app.listen(port, () => console.log("server is listening on port", port));
