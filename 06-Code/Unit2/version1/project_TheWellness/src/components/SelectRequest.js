import React from 'react'
import {Select,MenuItem,InputLabel,FormControl} from "@mui/material"

const SelectRequest = (props) => {

    const confirmation = props.confirmation
    const setConfirmation = props.setConfirmation

    const handleChange = (event) => {
        const { name, value } = event.target
        setConfirmation({ ...confirmation, [name]: value})
    }

    return (

        <FormControl fullWidth>
            <InputLabel id="requestState">Estado de la Solicitud</InputLabel>
            <Select
                fullWidth
                labelId="requestState"
                id="state"
                name="state"
                value={confirmation.state}
                label="Estado de la solicitud"
                onChange={handleChange}
            >
                <MenuItem disabled selected value={0}>Seleccione el tipo de solicitud </MenuItem>
                <MenuItem value={false}>Completadas</MenuItem>
                <MenuItem value={true}>No completadas</MenuItem>
            </Select>
        </FormControl>
    
    )

}
export default SelectRequest

