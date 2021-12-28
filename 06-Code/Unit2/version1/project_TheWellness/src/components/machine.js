import logo from '../img/logoWellnessGroup.png';
import * as React from 'react';
import '../App.css';
import '../index.css';
import {Box,TextField,Button} from "@mui/material"
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

 

const Machine=()=>{
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
<form> 
<Box
class = "boxback"
sx={{
  width: '100%',
  height: '100vh',
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
}}
>
 
  <Box   sx={{
            width: '50%',
            height: '100vh',
            marginLeft:'auto',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            paddingLeft:'20px',
            paddingRight:'20px',
            background: 'white',  /* fallback for old browsers */
            // padding: '20px',
            boxShadow: '1px 1px 20px #333'
        }}
    >
    <h1> Crear Usuario  </h1>
    
        

        <InputLabel htmlFor="input-with-icon-adornment">
            Nombre de la Máquina:
        </InputLabel>
        <FormControl variant="standard">
            <Input
            id="input-with-icon-adornment"
            startAdornment={
                <InputAdornment position="start">
                <AccountCircle />
                </InputAdornment>
            }
            size="large"
            sx={{width: '105%', my:2,}}
            variant = "standard"
            placeholder = "Ingrese el nombre"/>
        </FormControl>

         <InputLabel htmlFor="input-with-icon-adornment">
            Número de serie:
        </InputLabel>
        <FormControl variant="standard">
            <Input
            id="input-with-icon-adornment"
            startAdornment={
                <InputAdornment position="start">
                <AccountCircle />
                </InputAdornment>
            }
            size="large"
            sx={{width: '105%', my:2,}}
            variant = "standard"
            placeholder = "Ingrese la serie"/>
        </FormControl>

 <InputLabel htmlFor="input-with-icon-adornment">
            Marca:
        </InputLabel>
        <FormControl variant="standard">
            <Input
            id="input-with-icon-adornment"
            startAdornment={
                <InputAdornment position="start">
                <AccountCircle />
                </InputAdornment>
            }
            size="large"
            sx={{width: '105%', my:2,}}
            variant = "standard"
            placeholder = "Ingrese la marca"/>
        </FormControl>



        <InputLabel htmlFor="input-with-icon-adornment">
            Zona del Gimnasio:
        </InputLabel>
        <FormControl variant="standard">
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={type}
          onChange={handleChange}
          label="type"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Peso Libre'}>Peso Libre</MenuItem>
          <MenuItem value={'Cardio'}>Cardio</MenuItem>
          <MenuItem value={'Musculación'}>Musculación</MenuItem>
        </Select>          
          
        </FormControl>

        <InputLabel htmlFor="input-with-icon-adornment">
            Local Asignado
        </InputLabel>
        <FormControl variant="standard">
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={local}
          onChange={handleChange}
          label="local"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'UIOPLA1'}>UIOPLA1</MenuItem>
          <MenuItem value={'UIOSAN'}>UIOSAN</MenuItem>
          <MenuItem value={'UIOPOR'}>UIOPOR</MenuItem>
          <MenuItem value={'UIOQUIS'}>UIOQUIS</MenuItem>
          <MenuItem value={'UIOREC'}>UIOREC</MenuItem>
          <MenuItem value={'GYESAN'}>GYESAN</MenuItem>
          <MenuItem value={'PHPLAZA'}>PHPLAZA</MenuItem>
          <MenuItem value={'PHDANN'}>PHDANN</MenuItem>
          <MenuItem value={'PHPASEO'}>PHPASEO</MenuItem>
        </Select>          
        </FormControl>



       
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
            }
          }        
        >
            Ingresar
        </Button>
    </Box>
    </Box>
</form>
    )
}

export default Machine;