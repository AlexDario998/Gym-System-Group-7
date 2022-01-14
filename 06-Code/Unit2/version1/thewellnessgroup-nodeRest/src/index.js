const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const TIDevicesRequests = require("./routes/TIDevicesRequests");
const InfrastructuresRequests = require("./routes/InfrastructuresRequests")
const GymRequests = require("./routes/GymRequests")
const Infrastructure = require("./routes/Infrastructure")
const Users = require("./routes/Users")

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
