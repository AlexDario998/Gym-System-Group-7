import React from 'react'
import {Box} from "@mui/material"

const SelectRequest = (props) => {

    const completedRequests = props.completedRequests
    const noCompletedRequests = props.noCompletedRequests

    return (

        <Box
            sx={{
                width: '30%',
                height: '100%',
                marginLeft:'auto',
                marginRight:'auto',
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                paddingLeft:'20px',
                paddingRight:'20px',
                background: '#fff',  /* fallback for old browsers */
                borderRadius: '15px',
                display: 'flex'
            }}
        >
            <Box>
                <h3>Solicitudes completadas</h3>
                <p>{completedRequests}</p>
            </Box>
            <Box>
                <h3>Solicitudes no completadas</h3>
                <p>{noCompletedRequests}</p>
            </Box>
        </Box>
    
    )

}
export default SelectRequest

