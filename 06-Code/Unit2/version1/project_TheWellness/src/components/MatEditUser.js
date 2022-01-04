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

const MatEditUser = ( props ) => {

    const data = props.data
    const handleUpdateRegister = props.handleUpdateRegister
    const gyms = props.gyms

    const [open, setOpen] = useState(false);

    const [formUser, setformUser] = useState({
        idCard:data.idCard,
        name:data.name,
        lastName:data.lastName,
        userName:data.userName,
        email:data.email,
        password:data.password,
        type:data.type,
        gym:data.gym


    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setformUser({ ...formUser, [name]: value})
    }

    const handleEdit = () => {
        handleUpdateRegister(formUser)
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
                        <h1 align='center'>Editar Usuario</h1><br/>

                      
                        <TextField fullWidth 
                           id="userName" 
                           name="name" 
                           value={formUser.name} 
                           placeholder="Nombres" 
                           label="Nombres" 
                           onChange={handleChange} 
                        />

                        

                        {/* Brand */}
                        <TextField fullWidth 
                            id="userLastName"  
                            name="lastName" 
                            value={formUser.lastName} 
                            placeholder="Apellidos" 
                            label="Apellidos" 
                            onChange={handleChange} 
                            style={{
                                marginTop: '5%'
                            }}
                        />

                        {/* Owner */}
                        <TextField fullWidth 
                            name='owner' 
                            id="owner" 
                            value={formUser.owner}
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
                                value={formUser.local}
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
export default MatEditUser