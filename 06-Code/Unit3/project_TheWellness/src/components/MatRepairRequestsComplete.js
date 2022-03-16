import FactCheckIcon from '@mui/icons-material/FactCheck';
import { IconButton } from '@mui/material'
import React, { useState } from "react";

const MatRepairInfrastructureComplete = ( props ) => {

    const handleUpdateRegister = props.handleUpdateRegister
    const data = props.data
  
    const handleUpdateClick = () => {

        
        const option = window.confirm('¿Está seguro que esta solicitud esta completada?')

        if (option === true) {
            
            handleUpdateRegister(data)
        }
        
    };

    return (
        <IconButton 
            color="secondary"
            aria-label="add an alarm"
            onClick={handleUpdateClick}

        >
            <FactCheckIcon
                style={{
                    color: '#39a28d'
                    
                }}
            />
        </IconButton>
    )
}
export default MatRepairInfrastructureComplete