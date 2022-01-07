const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const TIDevicesRequests = require("./routes/TIDevicesRequests");


const app = express();
const port = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use(TIDevicesRequests);


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
