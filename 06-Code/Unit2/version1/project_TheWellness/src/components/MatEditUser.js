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
        idCard: data.idCard,
        name: data.name,
        lastName: data.lastName,
        userName: data.userName,
        email: data.email,
        password: data.password,
        type: data.type,
        gym: data.gym
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
                           id="name" 
                           name="name" 
                           value={formUser.name} 
                           placeholder="Nombres" 
                           label="Nombres" 
                           onChange={handleChange} 
                        />

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

                        <TextField fullWidth 
                            id="userId"
                            name="idCard" 
                            placeholder="ID/Pasaporte" 
                            value={formUser.idCard} 
                            label="Id/Pasaporte" 
                            onChange={handleChange} 
                            style={{
                                marginTop: '5%'
                            }}
                        />

                        <TextField fullWidth
                            id="email"  
                            name="email" 
                            placeholder="Correo eléctronico" 
                            value={formUser.email} 
                            label="Correo eléctronico" 
                            onChange={handleChange} 
                            style={{
                                marginTop: '5%'
                            }}

                        />

                        <TextField fullWidth 
                            id="userName" 
                            name="userName" 
                            placeholder="Nombre de usuario" 
                            value={formUser.userName} 
                            label="Nombre de usuario" 
                            onChange={handleChange} 
                            style={{
                                marginTop: '5%'
                            }}
                        
                        />

                        <TextField fullWidth 
                            id="password" 
                            name="password" 
                            placeholder="Contraseña" 
                            value={formUser.password} 
                            type="password" 
                            label="Contraseña" 
                            onChange={handleChange} 
                            style={{
                                marginTop: '5%'
                            }}
                        
                        />

                        <FormControl fullWidth
                            style={{
                                    marginTop: '5%'
                                }}
                        >
                            <InputLabel id="labelTypeUser">Tipo de Usuario</InputLabel>
                            <Select
                                fullWidth
                                labelId="labelTypeUser"
                                id="type"
                                name="type"
                                value={formUser.type}
                                label="Tipo de usuario"
                                onChange={handleChange}
                            >
                        <MenuItem disabled selected >Seleccione un tipo </MenuItem>
                        <MenuItem value={2}>Supervisor</MenuItem>
                        <MenuItem value={3}>Admin/Sistemas</MenuItem>
                        <MenuItem value={4}>Admin/Mantenimiento</MenuItem>
                        <MenuItem value={5}>Grupo de mantenimiento</MenuItem>
                    </Select>
                         </FormControl>

                        {/* Gym */}
                        <FormControl fullWidth 
                            style={{
                                marginTop: '5%'
                            }}>
                            <InputLabel id="labelGym">Gimnasio al que pertenece</InputLabel>
                            <Select
                                fullWidth
                                labelId="labelGym"
                                name='gym'
                                id="gym"
                                value={formUser.gym}
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