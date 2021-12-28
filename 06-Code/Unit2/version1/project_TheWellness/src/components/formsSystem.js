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
class = "boxSystem"
>
 <h1
 class = "title"
 sx={{
 }}>Sistemas/Dispositivos TI</h1>
 <hr/>
  <Box   sx={{
            width: '50%',
            // height: '750px',
            marginLeft:'auto',
            marginRight:'auto',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            padding:'1vh',
            background: '#fff',  /* fallback for old browsers */
            borderRadius: '10px',
            boxShadow: '1px 1px 20px #333'
        }}
    >
    <h1  class = "subtitle">Solicitud de Arreglo</h1>
{/* Autor de la Solicitud */}
        <InputLabel htmlFor="filled-textarea-autor">
        Autor de la Solicitud:
        </InputLabel>
        <TextField
          id="filled-textarea-autor"
          multiline
          variant="filled"
          placeholder='Ingrese el nombre del autor'
          size="large"
          sx={{
            width: '80%',
        }}
        />
{/* Local */}
      <InputLabel htmlFor="filled-textarea-local">
        Local:
        </InputLabel>
        <TextField
          id="filled-textarea-local"
          multiline
          variant="filled"
          placeholder='Especifique el Local'
          sx={{
            width:'80%',
        }}
        />
{/* Numero de Serie */}
<InputLabel htmlFor="filled-textarea-serial">
        Numero de Serie:
        </InputLabel>
        <TextField
          id="filled-textarea-serial"
          multiline
          variant="filled"
          placeholder='Especifique el Local'
          sx={{
            width:'80%',
        }}
        />
{/* Fecha */}
        <InputLabel htmlFor="filled-textarea-date">
        Fecha:
        </InputLabel>
        <TextField
          id="filled-textarea-date"
          multiline
          variant="filled"
          placeholder='dd/mm/aaaa'
          sx={{
            width:'80%',
        }}
        />
{/* Descripcion Breve */}
      <InputLabel htmlFor="filled-multiline-description">
      Descripción Breve:
        </InputLabel>
        <TextField
          id="filled-multiline-description"
          multiline
          rows={3}
          variant="filled"
          sx={{
            width:'80%',
        }
      }      
        />
{/* Foto/Evidencia */}
      <InputLabel htmlFor="filled-textarea-foto">
     Foto:
        </InputLabel>
        <TextField
          id="filled-textarea-foto"
          multiline
          variant="filled"
          sx={{
            width:'80%',
        }}

        />
        <Button
            variant="contained"
            size = "large"
            type="submit"
            sx={{
                boxShadow: '1px 1px 5px #333',
                margin: "10px",  
                background: '#667db6',  /* fallback for old browsers */
                background: '-webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)',  /* Chrome 10-25, Safari 5.1-6 */
                background: 'linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                
                width:'40%',
            }
          }        
        >
            Enviar y Notificar
        </Button>
        <Button
            variant="contained"
            size = "large"
            type="submit"
            sx={{
                boxShadow: '1px 1px 5px #333',
                margin: "5px",  
                background: '#CB356B',  /* fallback for old browsers */
                background: '-webkit-linear-gradient(to right, #BD3F32, #CB356B)',  /* Chrome 10-25, Safari 5.1-6 */
                background: 'linear-gradient(to right, #BD3F32, #CB356B)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                width:'40%',
            }
          }        
        >
            Descartar
        </Button>
    </Box>
    </Box>
</form>
      

  );
}

export default App;
