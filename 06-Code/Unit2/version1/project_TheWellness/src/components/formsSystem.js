import React ,{useState} from 'react';
import '../App.css';
import '../index.css';
import {Box,TextField,Button,Stack,Typography,Select,MenuItem,FormControl} from "@mui/material"
import { Link } from 'react-router-dom';

const FormsSystem = (props) => {

  const handleSubmit = props.handleSubmit
  const tiDeviceValues = props.tiDeviceValues
  const gyms = props.gyms
  const formSystemValues = props.formSystemValues
  const setFormSystemValues = props.setFormSystemValues

  const [validation, setValidation] = useState({
    auxDescription: false,
    auxLocal: false,
    auxDevice:false
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormSystemValues({ ...formSystemValues, [name]: value})
  }

  const handleSubmitInternal = (e) => {
    e.preventDefault()
    
    if(validation.auxDevice===true && validation.auxLocal===true
    && validation.auxDescription===true){
      handleSubmit(formSystemValues)

    }else{
      window.alert("*Por favor llene los campos correctamente")
    }
  }

  const validateLocal=()=>{
        const local=formSystemValues.local
        if(local===""){
            setValidation({...validation,auxLocal:false})
        }else{
             setValidation({...validation,auxLocal:true})
        }
        
    }

    const validateDescription=()=>{
        const description=formSystemValues.description
        if(description===""){
            setValidation({...validation,auxDescription:false})
        }else{
            setValidation({...validation,auxDescription:true})
        }
    }

    const validateDevice=()=>{
        const device=formSystemValues.idTIDevice
        if(device===""){
            setValidation({...validation,auxDevice:false})
        }else{
            setValidation({...validation,auxDevice:true})
        }
    }

  return (
<form onSubmit={handleSubmitInternal}> 
  <Box>
    <Box   sx={{
              width: '50%',
              marginLeft:'auto',
              marginRight:'auto',
              marginTop:'10vh',
              marginBottom:'5vh',
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              paddingTop:'3vh',
              paddingBottom:'3vh',
              background: '#fff',  /* fallback for old browsers */
              borderRadius: '15px',
              boxShadow: '1px 1px 20px #333'
          }}
      >
      <h1 class = "title">Sistemas/Dispositivos TI</h1>
      <h1  class = "subtitle">Solicitud de Arreglo</h1>

      {/* Local */}
      <Typography variant="subtitle1" gutterBottom component="div">
      Local:
      </Typography>

      <FormControl
        fullWidth 
        id="filled-textarea-local"
        multiline
        variant="filled"
        placeholder='Especifique el Local'
        sx={{
          width:'80%'
        }}
      >
        <Select
            fullWidth
            name='idLocal'
            value={formSystemValues.idLocal}
            id="local"
            onChange={handleChange}
            onBlur={validateLocal}
        >
            
            <MenuItem disabled selected>Seleccione un gimnasio</MenuItem>
            {
                gyms.map(item => (
                    <MenuItem value={item.id} >{item.namegym}</MenuItem>
                    
                ))
            }
            
        </Select>
    </FormControl>
      <br/>

{/* Gym machine */}
      <Typography variant="subtitle1" gutterBottom component="div">
      Dispositivo TI:
      </Typography>

      <FormControl
        fullWidth 
        id="filled-textarea-local"
        multiline
        variant="filled"
        placeholder='Especifique el Local'
        sx={{
          width:'80%'
        }}
      >
        <Select
            fullWidth
            name='idTIDevice'
            value={formSystemValues.idTiDevice}
            id="tiDevice"
            onChange={handleChange}
            onBlur={validateDevice}
        >
            
            <MenuItem disabled selected>Seleccione una máquina</MenuItem>
            {
                tiDeviceValues.map(item => (
                    <MenuItem value={item.id} >{item.name}</MenuItem>
                    
                ))
            }
            
        </Select>
      </FormControl>

      {/* Descripcion Breve */}
        <Typography variant="subtitle1" gutterBottom component="div">
        Descripcion Breve:
        </Typography>
          <TextField fullWidth 
            id="filled-multiline-description"
            name='description'
            value={formSystemValues.description}
            onChange={handleChange}
            onBlur={validateDescription}
            multiline
            rows={3}
            variant="filled"
            sx={{
              width:'80%',
          }}      
          />
        <br/>
        <Stack spacing={3} direction="row">
        <Button variant="contained" type='submit'
          sx={{
            boxShadow: '1px 1px 5px #333',
            // margin: "10px",  
            background: '#667db6',  /* fallback for old browsers */
            background: '-webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)',  /* Chrome 10-25, Safari 5.1-6 */
            background: 'linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)',
          }}
        >
          Enviar y Notificar
        </Button>
        {/* <Link to="/menuOpt"  class='linkDescartar'>
        <Button variant="contained" 
          sx={{
            boxShadow: '1px 1px 5px #333',
            background: '#CB356B',
            background: '-webkit-linear-gradient(to right, #BD3F32, #CB356B)',
            background: 'linear-gradient(to right, #BD3F32, #CB356B)',
          }}
        >
          Descartar
        </Button>
        </Link> */}
      </Stack>
      </Box>
    </Box>
</form>
      

  );
}

export default FormsSystem;
