import React, {useState} from 'react';
import '../App.css';
import '../index.css';
import {Box, TextField, Button, MenuItem, Select,Alert} from "@mui/material"
import { border } from '@mui/system';

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
               <i id='iNamegym' class='msgError'></i> 
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
                <i id='iCity' class='msgError'></i>
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