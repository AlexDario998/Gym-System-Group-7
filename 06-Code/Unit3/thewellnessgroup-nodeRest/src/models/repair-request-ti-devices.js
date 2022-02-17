const mongoose = require("mongoose");

const TIDevicesRequestsSchema = new mongoose.Schema({
  
    idUser:{
        type: 'string',
        required: true,
      },
    
      idLocal:{
        type: 'string',
        required: true,
      },
      
    
      idTIDevice:{
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

module.exports = mongoose.model('RequestTiDevice', TIDevicesRequestsSchema, 'repair-request-ti-devices')