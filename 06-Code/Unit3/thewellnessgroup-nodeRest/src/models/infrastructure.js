const mongoose = require ("mongoose");

const insfrastructureSchema = mongoose.Schema({

    name:{
        type: 'string',
        required: true
    },

    gym:{
        type: 'string',
        required: true
    }

})

module.exports = mongoose.model('infrastructure', insfrastructureSchema)