import React, {useState} from 'react';
import '../App.css';
import '../index.css';
import {Box, TextField, Button, MenuItem, Select} from "@mui/material"

const FormAddLocal = (props) => {

    const {handleSubmit, formAddLocalValues, setformAddLocalValues} = props

    const [validation, setValidation] = useState({
        auxNameGym: false,
        auxCity: false
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setformAddLocalValues({ ...formAddLocalValues, [name]: value})
        
    }

    const handleBlurGymName = () => {
        const nameGym = formAddLocalValues.namegym
        const regexNameGym = /^[a-zA-Z ]+$/
        const iNamegym = document.getElementById('iNamegym')

        if (!regexNameGym.test(nameGym)) {
            iNamegym.textContent = "Solo se permiten letras"
            setValidation({...validation, auxNameGym: false})
        }else {
            iNamegym.textContent = ""
            setValidation({...validation, auxNameGym: true})
        }
    }

    const handleBlurCity = () => {
        const cityValue = formAddLocalValues.city
        const regexCity = /^[a-zA-Z ]+$/
        const iCity = document.getElementById('iCity')

        if (!regexCity.test(cityValue)) {
            iCity.textContent = "Solo se permiten letras"
            setValidation({...validation, auxCity: false})
        }else {
            iCity.textContent = ""
            setValidation({...validation, auxCity: true})
        }
    }

    const handleSubmitInternal = (e) => {
        e.preventDefault()
        
        if (validation.auxNameGym === true && validation.auxCity === true) {
            handleSubmit(formAddLocalValues)

        }else {
            window.alert("Por favor llene los campos correctamente")
        }
    }
    
    return (
        
        <form onSubmit={handleSubmitInternal} id="formAddLocal">

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
                    boxShadow: '1px 1px 20px #333'
                }}
            >
                <br/>
                <h1 align="center">Agregar local</h1><br/>

                {/* Gym name */}
                <TextField fullWidth 
                    name='namegym' 
                    id="namegym" 
                    value={formAddLocalValues.namegym}
                    onChange={handleChange}
                    onBlur={handleBlurGymName}
                    placeholder="Nombre del gimnasio" 
                    label="Nombre del gimnasio" 
                />
                <i id='iNamegym'></i>
                <br/>

                {/* City */}
                <TextField fullWidth 
                    name='city' 
                    id="city" 
                    value={formAddLocalValues.city} 
                    onChange={handleChange}
                    onBlur={handleBlurCity}
                    placeholder="Ciudad" 
                    label="Ciudad" 
                />
                <i id='iCity'></i>
                <br/>

                <Button
                    variant="contained"
                    size = "large"
                    type="submit"
                    sx={{
                        boxShadow: '1px 1px 5px #333',
                        margin: "10px",  
                        background: '#ff4b1f',  /* fallback for old browsers */
                        background: '-webkit-linear-gradient(to right, #ff9068, #ff4b1f)',  /* Chrome 10-25, Safari 5.1-6 */
                        background: 'linear-gradient(to right, #ff9068, #ff4b1f)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                        width:'60%',
                    }}   
                >
                    Ingresar
                </Button>
                <br/>
            </Box>
            
        </form>
            
    );
    
};
export default FormAddLocal;