const mongoose = require("mongoose");

const tiMachinesSchema = mongoose.Schema({
  
    name:{
        type: 'string',
        required: true
    },
    serialNumber:{
        type: 'string',
        required: true
    },
    brand:{
        type: 'string',
        required: true
    },
    local:{
        type:'ObjectId',
        required: true,
    },
    owner:{
        type: 'string',
        required: true
    }
})

module.exports = mongoose.model('tiMachines', tiMachinesSchema, 'Timachines')