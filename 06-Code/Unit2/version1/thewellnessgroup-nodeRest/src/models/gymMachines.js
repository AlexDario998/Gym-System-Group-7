const mongoose = require("mongoose");

const gymMachinesSchema = mongoose.Schema({
  
    name:{
        type: 'string',
        required: true
    },
    gym:{
        type:'ObjectId',
        required: true,
    },
    serialNumber:{
        type: 'string',
        required: true
    },
    mark:{
        type: 'string',
        required: true
    },
    zone:{
        type: 'string',
        required: true
    }
})

module.exports = mongoose.model('gymMachines', gymMachinesSchema, 'Machines')