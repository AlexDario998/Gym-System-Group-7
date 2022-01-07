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

const MatEditGymMachine = ( props ) => {

    const data = props.data
    const gyms = props.gyms
    const handleUpdateRegister = props.handleUpdateRegister

    const [open, setOpen] = useState(false);

    const [gymMachineValues, setGymMachineValues] = useState({
        id: data.id,
        name: data.name,
        gym: data.gym,
        serialNumber: data.serialNumber,
        mark: data.mark,
        zone: data.zone
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setGymMachineValues({ ...gymMachineValues, [name]: value})
    }

    const handleEdit = (e) => {
        e.preventDefault()
        handleUpdateRegister(gymMachineValues)
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
                        <h1 align='center'>Editar máquina de gimnasio</h1><br/>

                        <TextField fullWidth id="machineName" name='name' value={gymMachineValues.name} onChange={handleChange} placeholder="Ingrese el nombre de la máquina" label="Nombre" />
                        <br/>

                        <TextField 
                            fullWidth 
                            id="machineBrand" 
                            name='mark' 
                            value={gymMachineValues.mark} 
                            onChange={handleChange} 
                            placeholder="Ingrese la marca" 
                            label="Marca" 
                            style={{
                                marginTop: '5%'
                            }}
                        />

                        <TextField 
                            fullWidth 
                            id="machineSerial" 
                            name='serialNumber' 
                            value={gymMachineValues.serialNumber} 
                            onChange={handleChange} 
                            placeholder="Ingrese el Número de serie" 
                            label="Número de serie" 
                            style={{
                                marginTop: '5%'
                            }}
                        />

                        <FormControl 
                            fullWidth
                            style={{
                                marginTop: '5%'
                            }}    
                        >
                            <InputLabel id="labelGym">Local de ubicación</InputLabel>
                            <Select
                                fullWidth
                                labelId="labelGym"
                                id="gym"
                                name='gym'
                                value={gymMachineValues.gym}
                                label="Local asignado"
                                onChange={handleChange}
                            >
                                <MenuItem disabled selected>Seleccione un local </MenuItem>
                                {
                                    gyms.map(item => (
                                        <MenuItem value={item.id}>{item.namegym}</MenuItem>
                                        
                                    ))
                                }

                            </Select>
                        </FormControl>

                        <FormControl 
                            fullWidth
                            style={{
                                marginTop: '5%'
                            }}
                        >
                            <InputLabel id="labelGym">Zona del gimnasio Gimnasio</InputLabel>
                            <Select
                                fullWidth
                                labelId="labelGym"
                                id="zone"
                                name='zone'
                                value={gymMachineValues.zone}
                                label="Zona del gimnasio"
                                onChange={handleChange}
                            >
                                <MenuItem disabled selected>Seleccione un local </MenuItem>
                                <MenuItem value={'Cardio'}>Cardio</MenuItem>
                                <MenuItem value={'Musculación'}>Musculación</MenuItem>
                                <MenuItem value={'Peso libre'}>Peso libre</MenuItem>
                                
                            </Select>
                        </FormControl>

                        <Button
                            variant="contained"
                            size = "large"
                            type="submit"
                            style={{
                                marginTop: '5%'
                            }}
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
export default MatEditGymMachine