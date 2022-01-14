import React,{useState} from 'react';
import '../App.css';
import '../index.css';
import {Box,TextField,Button,Select,MenuItem} from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

 

const FormMachine = ( props ) => {

    const handleSubmit = props.handleSubmit
    const gyms = props.gyms
    const values = props.values
    const setValues = props.setValues

    const[validation, setValidation]=useState({
        auxName:false,
        auxBrand:false,
        auxSerial:false,
        auxLocal:false,
        auxZone:false
    })
    
    const handleChange = (event) => {
        const { name, value } = event.target
        setValues({ ...values, [name]: value})
    }

    const validateName=()=>{
        const name= values.name
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
        const mark=values.mark
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
        const serial=values.serialNumber
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
         const local=values.gym
       // console.log(local)
        if(local===""){
            setValidation({...validation,auxLocal:false})
        }else{
            setValidation({...validation,auxLocal:true})
        
        }
    }

    const validateZone=()=>{
        const zone=values.zone
        if(zone===""){
        setValidation({...validation,auxZone:false})
        }else{
            setValidation({...validation,auxZone:true})
        }
    }
    

    const handleSubmitInternal = (e) => {
        e.preventDefault()
        if(validation.auxName===true&&validation.auxBrand===true 
        && validation.auxSerial===true && validation.auxLocal===true 
        && validation.auxZone===true){
            handleSubmit(values)
        }else{
            window.alert("Por favor llene los campos correctamente")
        }
    }

    console.log(validation)


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
                <h1 align="center">Agregar máquina de gimnasio</h1><br/>

                <TextField fullWidth 
                id="machineName" 
                name='name' 
                value={values.name} 
                onChange={handleChange} 
                placeholder="Ingrese el nombre de la máquina" 
                onBlur={validateName} 
                label="Nombre" />
                <i id="iName" class="msgError"> </i>
                <br/>

                <TextField fullWidth 
                id="machineBrand" 
                name='mark' 
                value={values.mark} 
                onChange={handleChange} 
                onBlur={validateBrand}
                placeholder="Ingrese la marca " 
                label="Marca" />
                <i id="iBrand" class="msgError"> </i>
                <br/>

                <TextField fullWidth 
                id="machineSerial" 
                name='serialNumber' 
                value={values.serialNumber} 
                onChange={handleChange} 
                onBlur={validateSerial}
                placeholder="Ingrese el Número de serie" 
                label="Número de serie" />
                <i id="iSerial" class="msgError"></i>
                <br/>
                
                <FormControl fullWidth>
                    <InputLabel id="labelGym">Local de ubicación</InputLabel>
                    <Select
                        fullWidth
                        labelId="labelGym"
                        id="gym"
                        name='gym'
                        value={values.gym}
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
                <br/>
                    <FormControl fullWidth>
                    <InputLabel id="labelGym">Zona del Gimnasio</InputLabel>
                    <Select
                        fullWidth
                        labelId="labelGym"
                        id="zone"
                        name='zone'
                        value={values.zone}
                        label="Zona del gimnasio"
                        onBlur={validateZone}
                        onChange={handleChange}
                    >
                        <MenuItem disabled selected>Seleccione un local </MenuItem>
                        <MenuItem value={'Cardio'}>Cardio</MenuItem>
                        <MenuItem value={'Musculación'}>Musculación</MenuItem>
                        <MenuItem value={'Peso libre'}>Peso libre</MenuItem>
                        
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

export default FormMachine;