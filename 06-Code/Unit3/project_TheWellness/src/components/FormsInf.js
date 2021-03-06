import React, {useEffect, useState} from 'react';
import '../App.css';
import '../index.css';
import {Box, TextField, Button, MenuItem, Select, Typography, Stack} from "@mui/material";

const FormsInf = (props) => {

    const handleSubmit = props.handleSubmit;
    const gyms = props.gyms;
    const formInfValues = props.formInfValues;
    const setFormInfValues = props.setFormInfValues;

    const [validation, setValidation] = useState({
        
        auxDescription: false,
        auxLocal: false
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormInfValues({ ...formInfValues, [name]: value})
    }

    const handleSubmitInternal = (e) => {
        e.preventDefault()

        if(validation.auxLocal===true&& validation.auxDescription===true){
            handleSubmit(formInfValues)
        }else{
            window.alert("*Por favor llene los campos correctamente")
        }
    }

    const validateLocal=()=>{
        const local=formInfValues.local
        if(local===""){
            setValidation({...validation,auxLocal:false})
        }else{
             setValidation({...validation,auxLocal:true})
        }
        
    }

    const validateDescription=()=>{
        const description=formInfValues.description
        if(description===""){
            setValidation({...validation,auxDescription:false})
        }else{
            setValidation({...validation,auxDescription:true})
        }
    }

    return (
        
        <form onSubmit={handleSubmitInternal} >
            
            <Box 
                sx={{
                    width: '50%',
                    // height: '100%',
                    marginLeft:'auto',
                    marginRight:'auto',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding:'1vh', 
                    background: '#fff',
                    borderRadius: '15px',
                    boxShadow: '1px 1px 20px #333'
                }}
            >
                <br/>
                <h1 class = "title">Infraestructura</h1>
                <h1  class = "subtitle">Solicitud de Arreglo</h1><br/>

                {/* Gym */}
                
                <Typography variant="subtitle1" gutterBottom component="div">
                    Gimnasio:
                </Typography>
                    <Select
                        fullWidth
                        labelId="labelGym"
                        name='idLocal'
                        id="local"
                        value={formInfValues.idLocal}
                        onChange={handleChange}
                        onBlur={validateLocal}
                        variant="filled"
                        sx={{
                            width:'80%'
                          }}
                    >
                        
                        <MenuItem disabled selected>Seleccione un gimnasio</MenuItem>
                        {
                            gyms.map(item => (
                                <MenuItem value={item._id}>{item.namegym}</MenuItem>
                                
                            ))
                        }
                        
                    </Select>
                <br/>

                {/* Description */}
                <Typography variant="subtitle1" gutterBottom component="div">
                    Descripci??n:
                </Typography>
                <TextField fullWidth 
                    name='description' 
                    id="description" 
                    value={formInfValues.description}
                    onChange={handleChange}
                    onBlur={validateDescription}
                    multiline
                    rows={3}
                    variant="filled"
                    sx={{
                        width:'80%'
                      }}
                />
                <br/>


                <Button 
                    variant="contained" 
                    type='submit'
                    sx={{
                        boxShadow: '1px 1px 5px #333',
                        background: '#ffb74d ',  /* fallback for old browsers */
                        background: 'linear-gradient(to right, #ffb74d, #ffb74d)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                                
                    }}
                >
                    Enviar y Notificar
                </Button>
                
                <br/>
            </Box>
            
        </form>
    );
}
export default FormsInf;