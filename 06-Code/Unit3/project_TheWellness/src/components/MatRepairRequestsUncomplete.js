import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from '@mui/material'
import React, { useState } from "react";

const MatRepairInfrastructureUncomplete = ( props ) => {

    const handleUpdateRegisterFalse = props.handleUpdateRegisterFalse
    const data = props.data
  

    const handleUpdateClickFalse = () => {

        
        const option = window.confirm('¿Está seguro que desea revertir esta solicitud completada?')

        if (option === true) {
            
            handleUpdateRegisterFalse(data)
        }
        
    };
  
    return (
        <IconButton 
            color="secondary"
            aria-label="add an alarm"
            onClick={handleUpdateClickFalse}
        >
            <CancelIcon
                style={{
                    color: '#e62b27'
                    
                }}
            />
        </IconButton>
    )
}
export default MatRepairInfrastructureUncomplete