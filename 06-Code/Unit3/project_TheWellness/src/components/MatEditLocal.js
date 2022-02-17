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

    const [validation, setValidation] = useState({
        auxNameGym: true,
        auxCity:true
    })

    const handleBlurGymName = () => {
        const nameGym = formAddLocalValues.namegym
        const regexNameGym = /^[a-zA-Z ]+$/
        const iNamegym = document.getElementById('iNamegym')
        const namegym = document.getElementById('namegym')
        var auxIterator = 0

        if(nameGym===""){
            iNamegym.textContent="*Campo obligatorio"
            setValidation({...validation, auxNameGym: false})
            auxIterator++
        }
  
        if (auxIterator !== 1 &&!regexNameGym.test(nameGym)) {
            iNamegym.textContent = "*Solo se permiten letras"
            setValidation({...validation, auxNameGym: false})
            auxIterator++
        }
        
        if(auxIterator===0) {
            iNamegym.textContent = ""
            namegym.style.border=''
            setValidation({...validation, auxNameGym: true})
        }else{
            namegym.style.borderBottom='2px solid red'
            namegym.style.borderRight='2px solid red'
            namegym.style.borderLeft='2px solid red'
            namegym.style.borderRadius='5px'
        }
    }

    const handleBlurCity = () => {
        const cityValue = formAddLocalValues.city
        const regexCity = /^[a-zA-Z ]+$/
        const iCity = document.getElementById('iCity')
        const city= document.getElementById('city')
        var auxIterator = 0

        if(cityValue===""){
            iCity.textContent = "*Campo obligatorio"
            setValidation({...validation, auxCity: false})
            auxIterator++
        }

        if (auxIterator !== 1 && !regexCity.test(cityValue)) {
            iCity.textContent = "*Solo se permiten letras"          
            setValidation({...validation, auxCity: false})
            auxIterator++
        }
        
        if(auxIterator ===0){
            iCity.textContent = ""
            city.style.border=''
            setValidation({...validation, auxCity: true})
        }else{
            city.style.borderBottom='2px solid red'
            city.style.borderRight='2px solid red'
            city.style.borderLeft='2px solid red'
            city.style.borderRadius='5px'
        }
    }


    const handleChange = (event) => {
        const { name, value } = event.target
        setformAddLocalValues({ ...formAddLocalValues, [name]: value})
    }

    const handleEdit = (e) => {
        e.preventDefault()
         if (validation.auxNameGym === true && validation.auxCity === true) {
             handleUpdateRegister(formAddLocalValues)

        }else {
            window.alert("Por favor llene los campos correctamente")
        }
    };

    console.log(validation)
  
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
                            onBlur={handleBlurGymName}
                            label="Nombre del gimnasio" 
                        /><i id="iNamegym" class="msgError"> </i>

                        {/* City */}
                        <TextField fullWidth 
                            name='city' 
                            id="city" 
                            value={formAddLocalValues.city}
                            onChange={handleChange}
                            onBlur={handleBlurCity}
                            placeholder="Ciudad" 
                            label="Ciudad" 
                            style={{
                                marginTop: '5%'
                            }}
                        /><i id="iCity" class="msgError"></i>

                        <Button
                            variant="contained"
                            size = "large"
                            type="submit"
                            onClose={() => setOpen(false)}
                            sx={{
                                boxShadow: '1px 1px 5px #333',
                                marginTop: "5%",
                                marginLeft: "20%",  
                                background: '#ffb74d',  /* fallback for old browsers */
                                background: 'linear-gradient(to right, #ffb74d, #ffb74d)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                                width:'60%'
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