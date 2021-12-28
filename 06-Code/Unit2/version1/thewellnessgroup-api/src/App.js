import logo from './img/logoWellnessGroup.png';
import * as React from 'react';
import './App.css';
import './index.css';
import {Box,TextField,Button} from "@mui/material"
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
            width: '30%',
            height: '100vh',
            marginLeft:'auto',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            paddingLeft:'20px',
            paddingRight:'20px',
            background: '#fff9',  /* fallback for old browsers */
            // padding: '20px',
            boxShadow: '1px 1px 20px #333'
        }}
    >
    
        <img
            src={logo}
           width={"40%"}
            alt = "avatar"

        />
{/* CORREO ELECTRONICO */}
        <InputLabel htmlFor="input-with-icon-adornment">
            Usuario:
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
            placeholder = "Ingrese su Usuario"/>
        </FormControl>

{/* Contrasenia */}
        <InputLabel htmlFor="standard-adornment-password">
            Contraseña:
        </InputLabel>  
        <FormControl  variant="standard">
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          
            size="large"
            sx={{width: '105%', my:2,}}
            placeholder = "Ingrese su Contraseña"
            />
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
      

  );
}

export default App;
