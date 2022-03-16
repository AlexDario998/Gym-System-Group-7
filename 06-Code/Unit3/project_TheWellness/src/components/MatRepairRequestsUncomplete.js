import FactCheckIcon from '@mui/icons-material/FactCheck';
import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from '@mui/material'
import React, { useState } from "react";

const MatRepairInfrastructureUncomplete = ( props ) => {

    const handleUpdateRegisterTrue = props.handleUpdateRegisterTrue
    const data = props.data
  

    const handleUpdateClickTrue = () => {

        
        const option = window.confirm('¿Está seguro que desea revertir esta solicitud completada?')

        if (option === true) {
            
            handleUpdateRegisterTrue(data)
        }
        
    };
  
    return (
        <IconButton 
            color="secondary"
            aria-label="add an alarm"
            onClick={handleUpdateClickTrue}
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