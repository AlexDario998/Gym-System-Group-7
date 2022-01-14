import React, {useEffect, useState} from 'react';
import '../App.css';
import '../index.css';
import {Box, TextField, Button, MenuItem, Select, FormControl, InputLabel,Typography,Stack} from "@mui/material"
import { Link } from 'react-router-dom';

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
                    width: '40%',
                    height: '100%',
                    marginLeft:'auto',
                    marginRight:'auto',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    paddingLeft:'20px',
                    paddingRight:'20px',
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
                        variant="filled"
                    >
                        
                        <MenuItem disabled selected>Seleccione un gimnasio</MenuItem>
                        {
                            gyms.map(item => (
                                <MenuItem value={item.id}>{item.namegym}</MenuItem>
                                
                            ))
                        }
                        
                    </Select>
                <br/>

                {/* Description */}
                <Typography variant="subtitle1" gutterBottom component="div">
                    Descripcion:
                </Typography>
                <TextField fullWidth 
                    name='description' 
                    id="description" 
                    value={formInfValues.description}
                    onChange={handleChange}
                    multiline
                    rows={3}
                    variant="filled"
                />
                <br/>

                <Stack spacing={3} direction="row">
          <Button variant="contained" type='submit'
            sx={{
              boxShadow: '1px 1px 5px #333',
              // margin: "10px",  
              background: '#667db6',  /* fallback for old browsers */
              background: '-webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)',  /* Chrome 10-25, Safari 5.1-6 */
              background: 'linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)',
            }}>
            Enviar y Notificar
          </Button>
          {/* <Link to="/menuOpt"  class='linkDescartar'>
          <Button variant="contained" 
            sx={{
              boxShadow: '1px 1px 5px #333',
              background: '#CB356B',
              background: '-webkit-linear-gradient(to right, #BD3F32, #CB356B)',
              background: 'linear-gradient(to right, #BD3F32, #CB356B)',
            }}>
            Descartar
          </Button> 
          </Link> */}
        </Stack>
                <br/>
            </Box>
            
        </form>
    );
}
export default FormsInf;