import EditIcon from '@mui/icons-material/Edit'
import { IconButton, Modal, Box, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import React, { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const MatEditGymMachine = ( props ) => {

    const data = props.data
    const gyms = props.gyms
    const handleUpdateRegister = props.handleUpdateRegister

    const [open, setOpen] = useState(false);

    const [gymMachineValues, setGymMachineValues] = useState({
        id: data.id,
        name: data.name,
        gym: data.gym,
        serialNumber: data.serialNumber,
        mark: data.mark,
        zone: data.zone
    })

    const[validation, setValidation]=useState({
        auxName:false,
        auxBrand:false,
        auxSerial:false,
        auxLocal:false,
        auxZone:false
    })

    const validateName=()=>{
        const name= gymMachineValues.name
        const regexName=/^[a-zA-Z ]+$/
        const iName=document.getElementById('iName')
        const machName=document.getElementById('machineName')
        var auxIterator = 0

        if(name===""){
            iName.textContent="*Campo obligatorio"
            setValidation({...validation,auxName:false})
            auxIterator++
        }

        if(!regexName.test(name)){
            iName.textContent="*Solo se permiten letras"
            setValidation({...validation,auxName:false})
            auxIterator++
        }
        if(auxIterator===0){
            iName.textContent=""
            machName.style.border=''
            setValidation({...validation,auxName:true})
        }else{
            machName.style.borderBottom='2px solid red'
            machName.style.borderRight='2px solid red'
            machName.style.borderLeft='2px solid red'
            machName.style.borderRadius='5px'     
        }

        
    }


    const validateBrand=()=>{
        const mark=gymMachineValues.mark
        const regexBrand=/^[a-zA-Z ]+$/
        const iBrand=document.getElementById('iBrand')
        const machBrand=document.getElementById('machineBrand')
        var auxIterator=0


        if(mark===""){
            iBrand.textContent="*Campo obligatorio"
            setValidation({...validation,auxBrand: false})
             auxIterator++
        }
        
        
        if(!regexBrand.test(mark)){
            iBrand.textContent="*Solo se permiten letras"
            setValidation({...validation,auxBrand:false})
             auxIterator++
        
            
        }
        if( auxIterator===0){
            iBrand.textContent=""
            machBrand.style.border=''
            setValidation({...validation,auxBrand:true})
        }else{
            machBrand.style.borderBottom='2px solid red'
            machBrand.style.borderRight='2px solid red'
            machBrand.style.borderLeft='2px solid red'
            machBrand.style.borderRadius='5px'     
        }
    }

     const validateSerial=()=>{
        const serial=gymMachineValues.serialNumber
        const regexSerial=/^[a-zA-Z0-9]+$/
        const iSerial=document.getElementById('iSerial')
        const machSerial=document.getElementById('machineSerial')
        var auxIterator = 0


        if(serial===""){
            iSerial.textContent="*Campo obligatorio"
            setValidation({...validation,auxSerial:false})
             auxIterator++
        }

        if(!regexSerial.test(serial)){
            iSerial.textContent="*Solo se permiten letras y números"
            setValidation({...validation,auxSerial:false})
             auxIterator++
        }

        if( auxIterator===0){
            iSerial.textContent=""
            machSerial.style.border=''
            setValidation({...validation,auxSerial:true})
        }else{
            machSerial.style.borderBottom='2px solid red'
            machSerial.style.borderRight='2px solid red'
            machSerial.style.borderLeft='2px solid red'
            machSerial.style.borderRadius='5px'     
        }

    }

    const validateLocal=()=>{
         const local=gymMachineValues.gym
       // console.log(local)
        if(local===""){
            setValidation({...validation,auxLocal:false})
        }else{
            setValidation({...validation,auxLocal:true})
        
        }
    }

    const validateZone=()=>{
        const zone=gymMachineValues.zone
        if(zone===""){
        setValidation({...validation,auxZone:false})
        }else{
            setValidation({...validation,auxZone:true})
        }
    }
    


    const handleChange = (event) => {
        const { name, value } = event.target
        setGymMachineValues({ ...gymMachineValues, [name]: value})
    }

    const handleEdit = (e) => {
        e.preventDefault()
       
        if(validation.auxName===true&&validation.auxBrand===true 
        && validation.auxSerial===true && validation.auxLocal===true 
        && validation.auxZone===true){
             handleUpdateRegister(gymMachineValues)

        }else{
            window.alert("Por favor llene los campos correctamente")
        }
    };
  
   console.log(validation)
    const handleOpenModal = () => {
        setOpen(true)
    }

    return (
        <>
            <IconButton 
                color="secondary"
                aria-label="add an alarm"
                onClick={handleOpenModal}
            >
                <EditIcon 
                    style={{
                        color: '#2196f3'
                    }}
                />
            </IconButton>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box sx={style}>
                    <form onSubmit={handleEdit}>
                        <h1 align='center'>Editar máquina de gimnasio</h1><br/>

                        <TextField fullWidth 
                        id="machineName" 
                        name='name' 
                        value={gymMachineValues.name} 
                        onChange={handleChange} 
                        onBlur={validateName}
                        placeholder="Ingrese el nombre de la máquina" 
                        label="Nombre" /><i id="iName"></i>
                        <br/>

                        <TextField 
                            fullWidth 
                            id="machineBrand" 
                            name='mark' 
                            value={gymMachineValues.mark} 
                            onChange={handleChange}
                            onBlur={validateBrand} 
                            placeholder="Ingrese la marca" 
                            label="Marca" 
                            style={{
                                marginTop: '5%'
                            }}
                        /><i id="iBrand"></i>

                        <TextField 
                            fullWidth 
                            id="machineSerial" 
                            name='serialNumber' 
                            value={gymMachineValues.serialNumber} 
                            onChange={handleChange}
                            onBlur={validateSerial} 
                            placeholder="Ingrese el Número de serie" 
                            label="Número de serie" 
                            style={{
                                marginTop: '5%'
                            }}
                        /><i id="iSerial"></i>

                        <FormControl 
                            fullWidth
                            style={{
                                marginTop: '5%'
                            }}    
                        >
                            <InputLabel id="labelGym">Local de ubicación</InputLabel>
                            <Select
                                fullWidth
                                labelId="labelGym"
                                id="gym"
                                name='gym'
                                value={gymMachineValues.gym}
                                label="Local asignado"
                                onChange={handleChange}
                                onBlur={validateLocal}
                            >
                                <MenuItem disabled selected>Seleccione un local </MenuItem>
                                {
                                    gyms.map(item => (
                                        <MenuItem value={item.id}>{item.namegym}</MenuItem>
                                        
                                    ))
                                }

                            </Select>
                        </FormControl>

                        <FormControl 
                            fullWidth
                            style={{
                                marginTop: '5%'
                            }}
                        >
                            <InputLabel id="labelGym">Zona del gimnasio Gimnasio</InputLabel>
                            <Select
                                fullWidth
                                labelId="labelGym"
                                id="zone"
                                name='zone'
                                value={gymMachineValues.zone}
                                label="Zona del gimnasio"
                                onChange={handleChange}
                                onBlur={validateZone}
                            >
                                <MenuItem disabled selected>Seleccione un local </MenuItem>
                                <MenuItem value={'Cardio'}>Cardio</MenuItem>
                                <MenuItem value={'Musculación'}>Musculación</MenuItem>
                                <MenuItem value={'Peso libre'}>Peso libre</MenuItem>
                                
                            </Select>
                        </FormControl>

                        <Button
                            variant="contained"
                            size = "large"
                            type="submit"
                            style={{
                                marginTop: '5%'
                            }}
                            onClose={() => setOpen(false)}
                            sx={{
                                boxShadow: '1px 1px 5px #333',
                                marginTop: "5%",
                                marginLeft: "20%",  
                                background: '#ff4b1f',  /* fallback for old browsers */
                                background: '-webkit-linear-gradient(to right, #ff9068, #ff4b1f)',  /* Chrome 10-25, Safari 5.1-6 */
                                background: 'linear-gradient(to right, #ff9068, #ff4b1f)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                                width:'60%',
                            }}   
                        >
                            Editar
                        </Button>
                        
                    </form>
                </Box>
            </Modal>
        
        
        </>
    )
}
export default MatEditGymMachine