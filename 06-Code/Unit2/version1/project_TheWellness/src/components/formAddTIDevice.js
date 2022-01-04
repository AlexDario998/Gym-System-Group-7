import React, {useEffect, useState} from 'react';
import '../App.css';
import '../index.css';
import {Box, TextField, Button, MenuItem, Select, FormControl, InputLabel} from "@mui/material"

const FormAddTIDevice = (props) => {

    const gyms = props.gyms;
    const handleSubmit = props.handleSubmit;
    const values = props.values;
    const setValues = props.setValues;

    /*const [values, setValues] = useState({
        name: '',
        serialNumber: '',
        brand: '',
        local: '',
        owner: ''
    })*/

    const handleChange = (event) => {
        const { name, value } = event.target
        setValues({ ...values, [name]: value})
    }

    const handleSubmitInternal = (e) => {
        e.preventDefault()
        handleSubmit(values)
        //e.target.reset()
    }

    /*if (gyms.length === 0) {
        return 'No hay gimnasios. Agregue uno primero.'
        
    }
    console.log(gyms)*/
    return (
        
        <form onSubmit={handleSubmitInternal} id="formAddTIDevice">
            
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
                <h1>Agregar dispositivo TI</h1><br/>

                {/* Device name */}
                <TextField fullWidth 
                    name='name' 
                    id="name" 
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Nombre del dispositivo" 
                    label="Nombre del dispositivo" 
                />
                <br/>

                {/* Serial number */}
                <TextField fullWidth 
                    name='serialNumber' 
                    id="serialNumber" 
                    value={values.serialNumber}
                    onChange={handleChange}
                    placeholder="Número de serie" 
                    label="Número de serie" 
                />
                <br/>

                {/* Brand */}
                <TextField fullWidth 
                    name='brand'
                    id="brand" 
                    value={values.brand}
                    onChange={handleChange}
                    placeholder="Marca" 
                    label="Marca" 
                />
                <br/>

                {/* Owner */}
                <TextField fullWidth
                    name='owner'
                    id="owner" 
                    value={values.owner}
                    onChange={handleChange}
                    placeholder="Encargado"
                    label="Encargado" />
                <br/>
                
                {/* Gym */}
                <FormControl fullWidth>
                    <InputLabel id="labelGym">Gimnasio al que pertenece</InputLabel>
                    <Select
                        fullWidth
                        labelId="labelGym"
                        name='local'
                        id="local"
                        value={values.local}
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
export default FormAddTIDevice;