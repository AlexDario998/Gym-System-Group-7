import logo from '../img/logoWellnessGroup.png';
import * as React from 'react';
import '../App.css';
import '../index.css';
import {Box,TextField,Button,Select,MenuItem} from "@mui/material"
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

 

const Machines=()=>{
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    return(
       <Box
            class = "imgTIDevice"
        >
            <br/><br/>
            <form>

                <Box 
                    sx={{
                        width: '30%',
                        height: '90vh',
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
                    <h1>Agregar Máquina de Gimnasio</h1><br/>

                    {/* Device name */}
                    <TextField fullWidth id="machineName" placeholder="Ingrese el nombre de la máquina" label="Nombre" />
                    <br/>

                    {/* Serial number */}
                    <TextField fullWidth id="machineBrand" placeholder="Ingrese la marca " label="Marca" />
                    <br/>

                    {/* Brand */}
                    <TextField fullWidth id="machineSerial" placeholder="Ingrese el Número de serie" label="Número de serie" />
                    <br/>

                   
                    
                    {/* Gym */}
                    <FormControl fullWidth>
                        <InputLabel id="labelGym">Local de ubicación</InputLabel>
                        <Select
                            fullWidth
                            labelId="labelGym"
                            id="gym"
                            label="Local asignado"
                            onChange={handleChange}
                        >
                            <MenuItem disabled selected>Seleccione un local </MenuItem>
                            <MenuItem value={'UIOPLA1'}>UIOPLA1</MenuItem>
                            <MenuItem value={'UIOPOR'}>UIOPOR</MenuItem>
                            <MenuItem value={'UIOQUIS'}>UIOQUIS</MenuItem>
                            <MenuItem value={'UIOREC'}>UIOREC</MenuItem>
                            <MenuItem value={'UIOSAN'}>UIOSAN</MenuItem>
                            <MenuItem value={'PHSWISS'}>PHSWISS</MenuItem>
                            <MenuItem value={'PHDANN'}>PHDANN</MenuItem>
                        </Select>
                    </FormControl>
                    <br/>
                     <FormControl fullWidth>
                        <InputLabel id="labelGym">Zona del gimnasio Gimnasio</InputLabel>
                        <Select
                            fullWidth
                            labelId="labelGym"
                            id="zone"
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
                </Box>
            </form>
            <br/>
        </Box>

    )
}

export default Machines;