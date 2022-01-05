import React, {useEffect, useState} from 'react';
import '../App.css';
import '../index.css';
import {Box, TextField, Button, MenuItem, Select, FormControl, InputLabel} from "@mui/material"

const FormsInf = (props) => {

    const handleSubmit = props.handleSubmit;
    const gyms = props.gyms;
    const formInfValues = props.formInfValues;
    const setFormInfValues = props.setFormInfValues;

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormInfValues({ ...formInfValues, [name]: value})
    }

    const handleSubmitInternal = (e) => {
        e.preventDefault()
        handleSubmit(formInfValues)
    }

    return (
        
        <form onSubmit={handleSubmitInternal} >
            
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
                <h1 align='center'>Solicitud de arreglo de infraestructura</h1><br/>

                {/* Gym */}
                <FormControl fullWidth>
                    <InputLabel id="labelGym">Gimnasio</InputLabel>
                    <Select
                        fullWidth
                        labelId="labelGym"
                        name='local'
                        id="local"
                        value={formInfValues.idLocal}
                        onChange={handleChange}
                        label="Gimnasio"
                    >
                        
                        <MenuItem disabled selected>Seleccione un gimnasio</MenuItem>
                        {
                            gyms.map(item => (
                                <MenuItem value={item.id}>{item.namegym}</MenuItem>
                                
                            ))
                        }
                        
                    </Select>
                </FormControl>
                <br/>

                {/* Description */}
                <TextField fullWidth 
                    name='description' 
                    id="description" 
                    value={formInfValues.description}
                    onChange={handleChange}
                    placeholder="Descripción" 
                    label="Descripción" 
                />
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
}
export default FormsInf;