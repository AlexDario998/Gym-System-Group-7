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
>
 <h1
 sx={{
  marginLeft:'auto',
  marginRight:'auto',
 }}>Infraestructura</h1>
 <hr/>
  <Box   sx={{
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
    <h1>Solicitud de Arreglo</h1>
{/* Autor de la Solicitud */}
        <InputLabel htmlFor="input-with-icon-adornment">
        Autor de la Solicitud:
        </InputLabel>
        <TextField fullWidth id="" />
{/* Local */}
      <InputLabel htmlFor="input-with-icon-adornment">
        Local:
        </InputLabel>
        <TextField fullWidth id="" />
{/* Fecha */}
        <InputLabel htmlFor="input-with-icon-adornment">
        Fecha:
        </InputLabel>
        <TextField fullWidth id="" />
{/* Descripcion Breve */}
      <InputLabel htmlFor="input-with-icon-adornment">
      Descripción Breve:
        </InputLabel>
      <TextField fullWidth id="" />
{/* Foto/Evidencia */}
      <InputLabel htmlFor="input-with-icon-adornment">
     Foto:
        </InputLabel>
      <TextField fullWidth id="" />
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
