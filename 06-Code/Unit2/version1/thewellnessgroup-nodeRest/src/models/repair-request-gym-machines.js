const mongoose = require("mongoose");

const gymMachinesRequestsSchema = mongoose.Schema({
  
 
   idUser:{
        type: 'string',
        required: true,
      },
    
      idLocal:{
        type: 'string',
        required: true,
      },

      idGymMachine:{
          type: 'string',
          required: true,
      },
      
      date:{
        type: 'string',
        required: true,
      },

      machineType:{
          type: 'string',
          required: true, 
      },

      gymZone:{
          type:'string',
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

module.exports = mongoose.model('repair-request-gym-machines', gymMachinesRequestsSchema)