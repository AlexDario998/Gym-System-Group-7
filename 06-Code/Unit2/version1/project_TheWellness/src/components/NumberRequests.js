import React from 'react'
import {Box} from "@mui/material"

const SelectRequest = (props) => {

    const completedRequests = props.completedRequests
    const noCompletedRequests = props.noCompletedRequests

    return (

        <Box
        class="boxSol"
        >
            <Box class = "solComp">
                <h3>Solicitudes completadas:&nbsp;</h3>
                <p>&nbsp;{completedRequests}</p>
            </Box>
            <Box class = "solInc">
                <h3>Solicitudes no completadas:&nbsp;</h3>
                <p>&nbsp;{noCompletedRequests}</p>
            </Box>
        </Box>
    
    )

}
export default SelectRequest

