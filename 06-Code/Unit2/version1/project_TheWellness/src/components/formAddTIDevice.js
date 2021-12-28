import logo from '../img/logoWellnessGroup.png';
import * as React from 'react';
import '../App.css';
import '../index.css';
import {Box,TextField,Button,MenuItem,Select} from "@mui/material"
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function App() {
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

    return (
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
                    <h1>Agregar dispositivo TI</h1><br/>

                    {/* Nombre del dispositivo */}
                    <TextField fullWidth id="deviceName" placeholder="Nombre del dispositivo" label="Nombre del dispositivo" />
                    <br/>

                    {/* Numero serial */}
                    <TextField fullWidth id="serialNumber" placeholder="Número de serie" label="Número de serie" />
                    <br/>

                    {/* Brand */}
                    <TextField fullWidth id="deviceBrand" placeholder="Marca" label="Marca" />
                    <br/>

                    {/* Owner */}
                    <TextField fullWidth id="deviceOwner" placeholder="Encargado" label="Encargado" />
                    <br/>
                    
                    {/* Gym */}
                    <FormControl fullWidth>
                        <InputLabel id="labelGym">Gimnasio al que pertenece</InputLabel>
                        <Select
                            fullWidth
                            labelId="labelGym"
                            id="gym"
                            label="Gimnasio al que pertenece"
                            onChange={handleChange}
                        >
                            <MenuItem disabled selected>Seleccione un gimnasio</MenuItem>
                            <MenuItem value={'Gym 1'}>Gimnasio 1</MenuItem>
                            <MenuItem value={'Gym 2'}>Gimnasio 2</MenuItem>
                            <MenuItem value={'Gym 3'}>Gimnasio 3</MenuItem>
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
    );
}
export default App;