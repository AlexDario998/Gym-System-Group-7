import logo from '../img/logoWellnessGroup.png';
import React, {useEffect,useState} from 'react';
import '../App.css';
import '../index.css';
import {Box,TextField,Button,Stack,Typography,Select,MenuItem} from "@mui/material"
import FormControl from '@mui/material/FormControl';
import { Link } from 'react-router-dom';



const FormsMach = (props) => {

  const handleSubmit = props.handleSubmit
  const gymMachineValues = props.gymMachineValues
  const gyms = props.gyms
  const formMachValues = props.formMachValues
  const setFormMachValues = props.setFormMachValues

  const [validation, setValidation] = useState({
        
        auxDescription: false,
        auxDevice:false,
        auxZone:false,
        auxType:false,
        auxLocal: false
    })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormMachValues({ ...formMachValues, [name]: value})
  }

  const handleSubmitInternal = (e) => {
    e.preventDefault()
  
    if(validation.auxType === true && validation.auxZone === true && validation.auxLocal === true && validation.auxDevice === true && validation.auxDescription === true) {
      handleSubmit(formMachValues)}
     else{
       window.alert("*Por favor llene los campos correctamente")
     }
}

   const validateLocal=()=>{
        const local=formMachValues.local
        if(local===""){
            setValidation({...validation,auxLocal:false})
        }else{
             setValidation({...validation,auxLocal:true})
        }
        
    }

    const validateDescription=()=>{
        const description=formMachValues.description
        if(description===""){
            setValidation({...validation,auxDescription:false})
        }else{
            setValidation({...validation,auxDescription:true})
        }
    }

    const validateDevice=()=>{
        const device=formMachValues.idGymMachine
        if(device===""){
            setValidation({...validation,auxDevice:false})
        }else{
            setValidation({...validation,auxDevice:true})
        }
    }

    const validateZone=()=>{
        const zone=formMachValues.gymZone
        if(zone===""){
            setValidation({...validation,auxZone:false})
        }else{
            setValidation({...validation,auxZone:true})
        }
    }

    const validateType=()=>{
        const type=formMachValues.machineType
        if(type===""){
            setValidation({...validation,auxType:false})
        }else{
            setValidation({...validation,auxType:true})
        }
    }

  return (
    <form onSubmit={handleSubmitInternal}> 
      <Box
      
      >
        <Box   
          sx={{
            width: '50%',
            marginLeft:'auto',
            marginRight:'auto',
            marginTop:'3vh',
            marginBottom:'2vh',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            padding:'1vh',
            background: '#fff',  /* fallback for old browsers */
            borderRadius: '15px',
            boxShadow: '1px 1px 20px #333'
          }}
        >
    <h1 class = "title">Maquinas</h1>
    <h1  class = "subtitle">Solicitud de Arreglo</h1><br/>

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
            value={formMachValues.idLocal}
            id="local"
            onChange={handleChange}
            onBlur={validateLocal}
        >
            
            <MenuItem disabled selected>Seleccione un gimnasio</MenuItem>
            {
                gyms.map(item => (
                    <MenuItem value={item._id} >{item.namegym}</MenuItem>
                    
                ))
            }
            
        </Select>
    </FormControl>
      <br/>

{/* Gym machine */}
      <Typography variant="subtitle1" gutterBottom component="div">
      Máquina:
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
            name='idGymMachine'
            value={formMachValues.idGymMachine}
            id="gymMachine"
            onChange={handleChange}
            onBlur={validateDevice}
        >
            
            <MenuItem disabled selected>Seleccione una máquina</MenuItem>
            {
                gymMachineValues.map(item => (
                    <MenuItem value={item._id} >{item.name}</MenuItem>
                    
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
          value={formMachValues.description}
          onChange={handleChange}
          onBlur={validateDescription}
          multiline
          rows={3}
          variant="filled"
          sx={{
            width:'80%',
        }
      }      
      />
      <Typography variant="subtitle1" gutterBottom component="div">
        Tipo de Maquina:
      </Typography>
        <Select
          fullWidth
          labelId="labelGym"
          id="machineType"
          name='machineType'
          value={formMachValues.machineType}
          label="Zona del gimnasio"
          variant="filled"
          onChange={handleChange}
          onBlur={validateType}
          sx={{
            width:'80%',
        }}
        >
          <MenuItem disabled selected>Seleccione un tipo </MenuItem>
          <MenuItem value={'Aerobico'}>Aerobico</MenuItem>
          <MenuItem value={'Musculación'}>Musculación</MenuItem>
          <MenuItem value={'Palanca'}>Palanca</MenuItem>
          <MenuItem value={'Placas'}>Placas</MenuItem>
          <MenuItem value={'Multifuncion'}>Multifuncion</MenuItem>
                        
        </Select>
      <br/>
      <Typography variant="subtitle1" gutterBottom component="div">
        Zona del Gimnasio:
      </Typography>
        <Select
          fullWidth
          labelId="labelGym"
          id="gymZone"
          name='gymZone'
          value={formMachValues.gymZone}
          label="Zona del gimnasio"
          variant="filled"
          onChange={handleChange}
          onBlur={validateZone}
          sx={{
            width:'80%',
        }}
        >
          <MenuItem disabled selected>Seleccione un local </MenuItem>
          <MenuItem value={'Cardio'}>Cardio</MenuItem>
          <MenuItem value={'Musculación'}>Musculación</MenuItem>
          <MenuItem value={'Peso libre'}>Peso libre</MenuItem>
                        
        </Select>
      <br/>
        <Stack spacing={3} direction="row">
          <Button variant="contained" type='submit'
            sx={{
              boxShadow: '1px 1px 5px #333',
              // margin: "10px",  
              background: '#ffb74d ',  /* fallback for old browsers */
              background: 'linear-gradient(to right, #ffb74d, #ffb74d)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
              
            }}>
            Enviar y Notificar
          </Button>
        </Stack>
        <br/>
      </Box>
    </Box>
</form>
  );
}

export default FormsMach;
