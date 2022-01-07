import EditIcon from '@mui/icons-material/Edit'
import { IconButton, Modal, Box, TextField, Button } from '@mui/material'
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

const MatEditLocal = ( props ) => {

    const data = props.data
    const handleUpdateRegister = props.handleUpdateRegister

    const [open, setOpen] = useState(false);

    const [formAddLocalValues, setformAddLocalValues] = useState({
        id: data.id,
        namegym: data.namegym,
        city: data.city
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setformAddLocalValues({ ...formAddLocalValues, [name]: value})
    }

    const handleEdit = (e) => {
        e.preventDefault()
        handleUpdateRegister(formAddLocalValues)
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

                        {/* Gym name */}
                        <TextField fullWidth 
                            name='namegym' 
                            id="namegym" 
                            value={formAddLocalValues.namegym}
                            onChange={handleChange}
                            placeholder="Nombre del gimnasio" 
                            label="Nombre del gimnasio" 
                        />

                        {/* City */}
                        <TextField fullWidth 
                            name='city' 
                            id="city" 
                            value={formAddLocalValues.city}
                            onChange={handleChange}
                            placeholder="Ciudad" 
                            label="Ciudad" 
                            style={{
                                marginTop: '5%'
                            }}
                        />

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
export default MatEditLocal