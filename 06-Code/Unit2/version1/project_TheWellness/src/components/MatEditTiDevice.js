import EditIcon from '@mui/icons-material/Edit'
import { IconButton, Modal, Box, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import React, { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const MatEditTiDevice = ( props ) => {

    const data = props.data
    const handleUpdateRegister = props.handleUpdateRegister
    const gyms = props.gyms

    const [open, setOpen] = useState(false);

    const [formTiDeviceValues, setformTiDeviceValues] = useState({
        id: data.id,
        name: data.name,
        serialNumber: data.serialNumber,
        brand: data.brand,
        local: data.local,
        owner: data.owner
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setformTiDeviceValues({ ...formTiDeviceValues, [name]: value})
    }

    const handleEdit = (e) => {
        e.preventDefault()
        handleUpdateRegister(formTiDeviceValues)
    };
  
    const handleOpenModal = () => {
        setOpen(true)
    }

    return (
        <>
            <IconButton 
                color="secondary"
                aria-label="add an alarm"
                onClick={handleOpenModal}
            >
                <EditIcon 
                    style={{
                        color: '#2196f3'
                    }}
                />
            </IconButton>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box sx={style}>
                    <form onSubmit={handleEdit}>
                        <h1 align='center'>Editar local</h1><br/>

                        {/* TI dispositive */}
                        <TextField fullWidth 
                            name='name' 
                            id="name" 
                            value={formTiDeviceValues.name}
                            onChange={handleChange}
                            placeholder="Dispositivo TI" 
                            label="Dispositivo TI" 
                        />

                        {/* Serial number */}
                        <TextField fullWidth 
                            name='serialNumber' 
                            id="serialNumber" 
                            value={formTiDeviceValues.serialNumber}
                            onChange={handleChange}
                            placeholder="Número serial" 
                            label="Número serial" 
                            style={{
                                marginTop: '5%'
                            }}
                        />

                        {/* Brand */}
                        <TextField fullWidth 
                            name='brand' 
                            id="brand" 
                            value={formTiDeviceValues.brand}
                            onChange={handleChange}
                            placeholder="Marca" 
                            label="Marca" 
                            style={{
                                marginTop: '5%'
                            }}
                        />

                        {/* Owner */}
                        <TextField fullWidth 
                            name='owner' 
                            id="owner" 
                            value={formTiDeviceValues.owner}
                            onChange={handleChange}
                            placeholder="Propietario" 
                            label="Propietario" 
                            style={{
                                marginTop: '5%'
                            }}
                        />

                        {/* Gym */}
                        <FormControl fullWidth 
                            style={{
                                marginTop: '5%'
                            }}>
                            <InputLabel id="labelGym">Gimnasio al que pertenece</InputLabel>
                            <Select
                                fullWidth
                                labelId="labelGym"
                                name='local'
                                id="local"
                                value={formTiDeviceValues.local}
                                onChange={handleChange}
                                label="Gimnasio al que pertenece"
                            >
                                <MenuItem disabled selected>Seleccione un gimnasio</MenuItem>
                                {
                                    gyms.map(item => (
                                        <MenuItem value={item.id}>{item.namegym}</MenuItem>
                                        
                                    ))
                                }
                                
                            </Select>
                        </FormControl>

                        <Button
                            variant="contained"
                            size = "large"
                            type="submit"
                            onClose={() => setOpen(false)}
                            sx={{
                                boxShadow: '1px 1px 5px #333',
                                marginTop: "5%",
                                marginLeft: "20%",  
                                background: '#ff4b1f',  /* fallback for old browsers */
                                background: '-webkit-linear-gradient(to right, #ff9068, #ff4b1f)',  /* Chrome 10-25, Safari 5.1-6 */
                                background: 'linear-gradient(to right, #ff9068, #ff4b1f)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                                width:'60%',
                            }}   
                        >
                            Editar
                        </Button>
                        
                    </form>
                </Box>
            </Modal>
        
        
        </>
    )
}
export default MatEditTiDevice