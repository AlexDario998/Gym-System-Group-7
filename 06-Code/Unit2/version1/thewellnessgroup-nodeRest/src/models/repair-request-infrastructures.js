const mongoose = require("mongoose");

const infrastructuresRequestsSchema = mongoose.Schema({
  
    id:{
        type: 'string',
        id: true,
        generated: true
      },
    idUser:{
        type: 'string',
        required: true,
      },
    
      idLocal:{
        type: 'string',
        required: true,
      },
      
    
      date:{
        type: 'string',
        required: true,
      },
      description:{
        type: 'string',
        required: true,
      },
      confirmation:{
        type: 'boolean',
        required: true,
      }
})

module.exports = mongoose.model('repair-request-infrastructures', infrastructuresRequestsSchema)