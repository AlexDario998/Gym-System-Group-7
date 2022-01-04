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

 

const FormUser=(props)=>{
    const {handleSubmit, formUserValues, setUservalues} = props
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
     const handleChange = (event) => {
        const { name, value } = event.target
        setUservalues({ ...formUserValues, [name]: value})
        
    }
    const handleSubmitInternal = (e) => {
        e.preventDefault()
        handleSubmit(formUserValues)
        //e.target.reset()
    }
    
      
    
      
    return(
       <Box
            class = "imgTIDevice"
        >
            <br/><br/>
            <form onSubmit={handleSubmitInternal} id="formUser">

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
                    <h1>Crear Usuario</h1><br/>

                    <TextField fullWidth id="userName" name="name" placeholder="Nombres del usuario" label="Nombres"   onChange={handleChange} />
                    <br/>

                    
                    <TextField fullWidth id="userLastName"  name="lastName" placeholder="Apellidos del usuario" label="Apellidos"   onChange={handleChange} />
                    <br/>

                   
                    <TextField fullWidth id="userId" name="idCard" placeholder="ID/Pasaporte" label="Id/Pasaporte del usuario"   onChange={handleChange} />
                    <br/>

                   
                    <TextField fullWidth id="email"  name="email" placeholder="Ingrese el correo" label="Correo eléctronico"   onChange={handleChange} />
                    <br/>
                     <TextField fullWidth id="userName"  name="userName" placeholder="Ingrese el nombre de usuario" label="Nombre de usuario"   onChange={handleChange} /><br/>
                     <TextField fullWidth id="password"   name="password" placeholder="Ingrese la contraseña" label="Contraseña"   onChange={handleChange} /><br/>
                    
                    {/* Gym */}
                    <FormControl fullWidth>
                        <InputLabel id="labelGym">Tipo de Usuario</InputLabel>
                        <Select
                            fullWidth
                            labelId="labelGym"
                            id="type"
                            name="type"
                            label="Tipo de usuario"
                            onChange={handleChange}
                        >
                            <MenuItem disabled selected>Seleccione un tipo </MenuItem>
                            <MenuItem value={1}>Admin/Sistemas</MenuItem>
                            <MenuItem value={2}>Admin/Mantenimiento</MenuItem>
                            <MenuItem value={3}>Supervisor</MenuItem>
                            <MenuItem value={4}>Usuario</MenuItem>
                        </Select>
                    </FormControl>
                    <br/>
                     <FormControl fullWidth>
                        <InputLabel id="labelGym">Local Asigando</InputLabel>
                        <Select
                            fullWidth
                            labelId="labelGym"
                            id="gym"
                             name="gym"
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

export default FormUser;