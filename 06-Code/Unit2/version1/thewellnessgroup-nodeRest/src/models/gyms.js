const mongoose = require("mongoose");

const gymsSchema = mongoose.Schema({
  
    namegym:{
        type: 'string',
        required: true
    },
    city:{
        type: 'string',
        required: true
    }
})

module.exports = mongoose.model('gyms', gymsSchema, 'Gyms')