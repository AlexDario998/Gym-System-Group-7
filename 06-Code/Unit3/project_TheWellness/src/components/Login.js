import logo from '../img/logoWellnessGroup.png';
import React, {useState, useEffect} from 'react';
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
import { checkLogin } from '../services/login'
import Cookies from 'universal-cookie/es6';

const cookies = new Cookies()

function App() {

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const [loginValues, setLoginValues] = useState({
    userName: '',
    password: ''
  })

  const HandleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleChange = (event) => {
    const { name, value } = event.target
    setLoginValues({ ...loginValues, [name]: value})
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const startSession = (event) => {
    event.preventDefault()
    checkLogin(loginValues)
  }

  useEffect(() => {
    if (typeof cookies.get('userName') !== 'undefined') {
      console.log('type: ' + cookies.get('type'))
      if (cookies.get('type') === '1') {
        window.location.href = "./homeScreenSuperAdmin"

      }else if(cookies.get('type') === '2') {
        window.location.href = "./homeScreenLeaderGym"

      }else if(cookies.get('type') === '3') {
        window.location.href = "./homeScreenSystemAdmin"

      }else if(cookies.get('type') === '4') {
        window.location.href = "./homeScreenMantAdmin"

      }
    }
  });

  return (
    <form onSubmit={startSession}> 
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
  
        <Box 
          sx={{
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
                name='userName'
                startAdornment={
                    <InputAdornment position="start">
                    <AccountCircle />
                    </InputAdornment>
                }
                size="large"
                sx={{width: '105%', my:2,}}
                variant = "standard"
                placeholder = "Ingrese su Usuario"
                value={loginValues.userName}
                onChange={handleChange}
              />
          </FormControl>

          {/* Contrasenia */}
          <InputLabel htmlFor="standard-adornment-password">
              Contraseña:
          </InputLabel>  
          <FormControl  variant="standard">
            <Input
              id="standard-adornment-password"
              name='password'
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={HandleChange('password')}
              // type="password"
              
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
              value={loginValues.password}
              onChange={handleChange}
            />
          </FormControl>
            
          <Button
              variant="contained"
              size = "large"
              type="submit"
              sx={{
                  boxShadow: '1px 1px 5px #333',
                  margin: "10px",  
                  background: '#ffb74d',  /* fallback for old browsers */
                  background: 'linear-gradient(to right, #ffb74d, #ffb74d)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                  width:'60%'
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

export default App;
