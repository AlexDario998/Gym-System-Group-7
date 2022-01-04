import * as React from 'react';
import '../App.css';
import '../index.css';
import {Box,TextField,Button,Select,MenuItem} from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

 

const FormMachine = ( props ) => {

    const handleSubmit = props.handleSubmit
    const gyms = props.gyms
    const values = props.values
    const setValues = props.setValues
    
    const handleChange = (event) => {
        const { name, value } = event.target
        setValues({ ...values, [name]: value})
    }

    const handleSubmitInternal = (e) => {
        e.preventDefault()
        handleSubmit(values)
    }

    return(
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
                <h1 align="center">Agregar máquina de gimnasio</h1><br/>

                {/* Device name */} 
                <TextField fullWidth id="machineName" name='name' value={values.name} onChange={handleChange} placeholder="Ingrese el nombre de la máquina" label="Nombre" />
                <br/>

                {/* Serial number */}
                <TextField fullWidth id="machineBrand" name='mark' value={values.mark} onChange={handleChange} placeholder="Ingrese la marca " label="Marca" />
                <br/>

                {/* Brand */}
                <TextField fullWidth id="machineSerial" name='serialNumber' value={values.serialNumber} onChange={handleChange} placeholder="Ingrese el Número de serie" label="Número de serie" />
                <br/>
                
                {/* Gym */}
                <FormControl fullWidth>
                    <InputLabel id="labelGym">Local de ubicación</InputLabel>
                    <Select
                        fullWidth
                        labelId="labelGym"
                        id="gym"
                        name='gym'
                        value={values.gym}
                        label="Local asignado"
                        onChange={handleChange}
                    >
                        <MenuItem disabled selected>Seleccione un local </MenuItem>
                        {
                            gyms.map(item => (
                                <MenuItem value={item.id}>{item.namegym}</MenuItem>
                                
                            ))
                        }

                    </Select>
                </FormControl>
                <br/>
                    <FormControl fullWidth>
                    <InputLabel id="labelGym">Zona del gimnasio Gimnasio</InputLabel>
                    <Select
                        fullWidth
                        labelId="labelGym"
                        id="zone"
                        name='zone'
                        value={values.zone}
                        label="Zona del gimnasio"
                        onChange={handleChange}
                    >
                        <MenuItem disabled selected>Seleccione un local </MenuItem>
                        <MenuItem value={'Cardio'}>Cardio</MenuItem>
                        <MenuItem value={'Musculación'}>Musculación</MenuItem>
                        <MenuItem value={'Peso libre'}>Peso libre</MenuItem>
                        
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
    )
}

export default FormMachine;