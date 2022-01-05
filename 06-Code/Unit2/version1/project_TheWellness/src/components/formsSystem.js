import * as React from 'react';
import '../App.css';
import '../index.css';
import {Box,TextField,Button,Stack,Typography,Select,MenuItem,FormControl} from "@mui/material"

const FormsSystem = (props) => {

  const handleSubmit = props.handleSubmit
  const tiDeviceValues = props.tiDeviceValues
  const gyms = props.gyms
  const formSystemValues = props.formSystemValues
  const setFormSystemValues = props.setFormSystemValues

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormSystemValues({ ...formSystemValues, [name]: value})
  }

  const handleSubmitInternal = (e) => {
    e.preventDefault()
    handleSubmit(formSystemValues)
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
        <Button variant="contained" 
          sx={{
            boxShadow: '1px 1px 5px #333',
            background: '#CB356B',  /* fallback for old browsers */
            background: '-webkit-linear-gradient(to right, #BD3F32, #CB356B)',  /* Chrome 10-25, Safari 5.1-6 */
            background: 'linear-gradient(to right, #BD3F32, #CB356B)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          }}
        >
          Descartar
        </Button>
      </Stack>
      </Box>
    </Box>
</form>
      

  );
}

export default FormsSystem;
