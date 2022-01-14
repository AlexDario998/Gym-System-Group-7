const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  
    name:{
        type: 'string',
        required: true,
        
      },
    
      lastName:{
        type: 'string',
        required: true,
      },
      userName:{
        type: 'string',
        required: true,
      },
      password:{
        type: 'string',
        required: true,
      },
      idCard:{
        type: 'string',
        required: true,
      },
      email:{
        type: 'string',
        required: true,
      },
      type:{
        type: 'number',
        required: true,
      },
      gym:{
        type:'ObjectId',
        required: true,
      }
})

module.exports = mongoose.model('users', usersSchema)