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
    <>
    <div class = "slider">
      <ul>
          <li>
            <div class="img4">
              <br/><br/><br/><br/><br/><br/><br/>
              <h1 class = "titleHome">Bienvenidos</h1>
              <h2 class = "subtitleHome">A "The Wellness Group"</h2>
            </div>
          </li>
          <li>
            <div class="img2">
              <br/><br/><br/><br/><br/><br/><br/>
              <h1 class = "titleHome">Recuerda</h1>
              <h2 class = "subtitleHome">Confirmar las solicitudes <br/> una vez terminadas</h2>
            </div>
          </li>
          <li>
            <div class="img3">
              <br/><br/><br/><br/><br/><br/><br/>
              <h1 class = "titleHome">No Olvides</h1>
              <h2 class = "subtitleHome">Revisar tus solicitudes</h2>
            </div>
          </li>
          <li>
            <div class="img4">
              <br/><br/><br/><br/><br/><br/><br/>
              <h1 class = "titleHome">Bienvenidos</h1>
              <h2 class = "subtitleHome">A "The Wellness Group"</h2>
            </div>
          </li>
      </ul>
    </div>
    </>
      

  );
}

export default App;
