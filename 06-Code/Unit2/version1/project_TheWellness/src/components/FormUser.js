import logo from '../img/logoWellnessGroup.png';
import React, {useEffect,useState} from 'react';

import '../App.css';
import '../index.css';
import {Box,TextField,Button,Select,MenuItem} from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

 

const FormUser = (props) => {

    const initialValues={userName:"",idCard:""}
    const [formErrors,setFormErrors]=useState({});
    const handleSubmit = props.handleSubmit
    const gyms = props.gyms
    const formUserValues = props.formUserValues
    const [isSubmit, setIsSubmit]=useState(false);
    const setFormUservalues = props.setFormUservalues
    console.log(gyms)
    
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormUservalues({ ...formUserValues, [name]: value})
        
    }
    const handleSubmitInternal = (e) => {
        e.preventDefault()
        validate(formUserValues);
        handleSubmit(formUserValues);
        setIsSubmit(true);
    }

    useEffect(()=>{
        console.log()
        if(Object.keys(formErrors).length===0 && isSubmit){
            console.log(formUserValues);
        }
    },[formErrors]);

    const validate=(values)=>{
        const errors={};
        const regex= /^[^\s@]+@[^s@]+\.[^\s@]{2,}$/i;
        if(!values.userName){
            errors.userName="Username is required";
        }

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
                <h1 align="center">Crear usuario</h1><br/>

                <TextField fullWidth id="userName" name="name" value={formUserValues.name} placeholder="Nombres" label="Nombres" onChange={handleChange} />
                <br/>
                <TextField fullWidth id="userLastName"  name="lastName" value={formUserValues.lastName} placeholder="Apellidos" label="Apellidos" onChange={handleChange} />
                <br/>
                <TextField fullWidth id="userId" name="idCard" placeholder="ID/Pasaporte" value={formUserValues.idCard} label="Id/Pasaporte" onChange={handleChange} />
                <br/>
                <TextField fullWidth id="email"  name="email" placeholder="Correo eléctronico" value={formUserValues.email} label="Correo eléctronico" onChange={handleChange} />
                <br/>
                <TextField fullWidth id="userName" name="userName" placeholder="Nombre de usuario" value={formUserValues.userName} label="Nombre de usuario" onChange={handleChange} />
                <br/>
                <TextField fullWidth id="password" name="password" placeholder="Contraseña" value={formUserValues.password} type="password" label="Contraseña" onChange={handleChange} />
                <br/>
                
                <FormControl fullWidth>
                    <InputLabel id="labelTypeUser">Tipo de Usuario</InputLabel>
                    <Select
                        fullWidth
                        labelId="labelTypeUser"
                        id="type"
                        name="type"
                        value={formUserValues.type}
                        label="Tipo de usuario"
                        onChange={handleChange}
                    >
                        <MenuItem disabled selected >Seleccione un tipo </MenuItem>
                        <MenuItem value={2}>Supervisor</MenuItem>
                        <MenuItem value={3}>Admin/Sistemas</MenuItem>
                        <MenuItem value={4}>Admin/Mantenimiento</MenuItem>
                        <MenuItem value={5}>Grupo de mantenimiento</MenuItem>
                    </Select>
                </FormControl>
                <br/>

                <FormControl fullWidth>
                    <InputLabel id="labelGym">Local asignado</InputLabel>
                    <Select
                        fullWidth
                        labelId="labelGym"
                        id="gym"
                        name="gym"
                        value={formUserValues.gym}
                        label="Local asignado"
                        onChange={handleChange}
                    >
                        <MenuItem disabled selected >Seleccione un local </MenuItem>
                        {
                            gyms.map(item => (
                                <MenuItem value={item.id}>{item.namegym}</MenuItem>
                                
                            ))
                        }
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

export default FormUser;