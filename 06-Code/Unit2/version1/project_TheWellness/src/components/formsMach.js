import logo from '../img/logoWellnessGroup.png';
import React, {useEffect} from 'react';
import '../App.css';
import '../index.css';
import {Box,TextField,Button,Stack,Typography,Select,MenuItem} from "@mui/material"
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';




const FormsMach = (props) => {

  const handleSubmit = props.handleSubmit
  const gymMachineValues = props.gymMachineValues
  const gyms = props.gyms
  const formMachValues = props.formMachValues
  const setFormMachValues = props.setFormMachValues

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormMachValues({ ...formMachValues, [name]: value})
  }

  const handleSubmitInternal = (e) => {
    e.preventDefault()
    handleSubmit(formMachValues)
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
{/* <Typography variant="h3" gutterBottom component="div">Maquinas del Gimnasio</Typography>
<Typography variant="h4" gutterBottom component="div">Solicitud de Arreglo</Typography> */}
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
        >
            
            <MenuItem disabled selected>Seleccione una máquina</MenuItem>
            {
                gymMachineValues.map(item => (
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
          value={formMachValues.description}
          onChange={handleChange}
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
          id="type"
          name='type'
          label="Zona del gimnasio"
          variant="filled"
          onChange={handleChange}
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
          id="zone"
          name='zone'
          label="Zona del gimnasio"
          variant="filled"
          onChange={handleChange}
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
              background: '#667db6',  /* fallback for old browsers */
              background: '-webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)',  /* Chrome 10-25, Safari 5.1-6 */
              background: 'linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)',
            }}>
            Enviar y Notificar
          </Button>

          <Button variant="contained" 
            sx={{
              boxShadow: '1px 1px 5px #333',
              background: '#CB356B',  /* fallback for old browsers */
              background: '-webkit-linear-gradient(to right, #BD3F32, #CB356B)',  /* Chrome 10-25, Safari 5.1-6 */
              background: 'linear-gradient(to right, #BD3F32, #CB356B)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            }}>
            Descartar
          </Button> 
        </Stack>
        <br/>
      </Box>
    </Box>
</form>
  );
}

export default FormsMach;
