import React, {useEffect, useState} from 'react';
import '../App.css';
import '../index.css';
import {Box, TextField, Button, MenuItem, Select, FormControl, InputLabel} from "@mui/material"

const FormAddTIDevice = (props) => {

    const gyms = props.gyms;
    const handleSubmit = props.handleSubmit;
    const values = props.values;
    const setValues = props.setValues;

    const [validation,setValidation]=useState({
        auxName:false,
        auxSerial:false,
        auxBrand:false,
        auxOwner:false,
        auxLocal:false
    })


    /*const [values, setValues] = useState({
        name: '',
        serialNumber: '',
        brand: '',
        local: '',
        owner: ''
    })*/

    const handleChange = (event) => {
        const { name, value } = event.target
        setValues({ ...values, [name]: value})
    }

    const validateName=()=>{

        const nameDevice= values.name
        const regexName=/^[a-zA-ZáéíóúÁÉÍÓÚ ]+$/
        const iName=document.getElementById('iName')
        const nameD= document.getElementById('name')
        var auxIterator = 0

        if(nameDevice===""){
            iName.textContent="*Campo obligatorio"
            auxIterator++
            setValidation({...validation,auxName:false})
        }

        if(auxIterator !== 1 &&!regexName.test(nameDevice)){
            iName.textContent="*Solo se permiten letras"
            auxIterator++
            setValidation({...validation,auxName:false})
        }

        if(auxIterator===0){
            iName.textContent=""
            nameD.style.border=''
            setValidation({...validation,auxName:true})
        }else{
            nameD.style.borderBottom='2px solid red'
            nameD.style.borderRight='2px solid red'
            nameD.style.borderLeft='2px solid red'
            nameD.style.borderRadius='5px'
        }

    }


    const validateSerial=()=>{
        const serial=values.serialNumber
        const regexSerial=/^[a-zA-Z0-9]+$/
        const iSerial=document.getElementById('iSerial')
        const serialN=document.getElementById('serialNumber')
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
            serialN.style.border=''
            setValidation({...validation,auxSerial:true})
        }else{
            serialN.style.borderBottom='2px solid red'
            serialN.style.borderRight='2px solid red'
            serialN.style.borderLeft='2px solid red'
            serialN.style.borderRadius='5px'
        }

    }


    const validateBrand=()=>{
        const brand=values.brand
        const regexBrand=/^[a-zA-ZáéíóúÁÉÍÓÚ ]+$/
        const iBrand=document.getElementById('iBrand')
        const brandDV=document.getElementById('brand')
        var auxIterator = 0


        if(brand===""){
            iBrand.textContent="*Campo obligatorio"
            setValidation({...validation,auxBrand: false})
             auxIterator++
        }
        
        
        if(!regexBrand.test(brand)){
            iBrand.textContent="*Solo se permiten letras"
            setValidation({...validation,auxBrand:false})
             auxIterator++
        
            
        }
        if( auxIterator===0){
            iBrand.textContent=""
            brandDV.style.border=''
            setValidation({...validation,auxBrand:true})
        }else{
            brandDV.style.borderBottom='2px solid red'
            brandDV.style.borderRight='2px solid red'
            brandDV.style.borderLeft='2px solid red'
            brandDV.style.borderRadius='5px'
        }
    }

    const validateOwner=()=>{
        const owner= values.owner
        const regexOwner=/^[a-zA-ZáéíóúÁÉÍÓÚ ]+$/
        const iOwner= document.getElementById('iOwner')
        const ownerD= document.getElementById('owner')
        var auxIterator=0

        if(owner===""){
            iOwner.textContent="*Campo obligatorio"
            setValidation({...validation,auxOwner:false})
             auxIterator++
        }

        if(!regexOwner.test(owner)){
            iOwner.textContent="*Solo se permiten letras"
            setValidation({...validation,auxOwner:false})
             auxIterator++
        }
        
        if( auxIterator===0){
            iOwner.textContent=""
            ownerD.style.border=''
            setValidation({...validation,auxOwner:true})
        }else{
            ownerD.style.borderBottom='2px solid red'
            ownerD.style.borderRight='2px solid red'
            ownerD.style.borderLeft='2px solid red'
            ownerD.style.borderRadius='5px'     
        }
    }


    const validateLocal=()=>{
        const local=values.local
       // console.log(local)
        if(local===""){
            setValidation({...validation,auxLocal:false})
        }else{
            setValidation({...validation,auxLocal:true})
        
        }

    
    }

    const handleSubmitInternal = (e) => {
        e.preventDefault()
        //handleSubmit(values)
        //e.target.reset()
        if(validation.auxName === true &&validation.auxBrand===true&&
          validation.auxOwner===true&&validation.auxSerial===true&&
          validation.auxLocal===true){
            handleSubmit(values)
        }else{
            window.alert("*Por favor llene los campos correctamente")
        }
    }

    console.log(validation)

    /*if (gyms.length === 0) {
        return 'No hay gimnasios. Agregue uno primero.'
        
    }
    console.log(gyms)*/
    return (
        
        <form onSubmit={handleSubmitInternal} id="formAddTIDevice">
            
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
                <h1>Agregar dispositivo TI</h1><br/>

                {/* Device name */}
                <TextField fullWidth 
                    name='name' 
                    id="name" 
                    value={values.name}
                    onChange={handleChange}
                    onBlur={validateName}
                    placeholder="Nombre del dispositivo" 
                    label="Nombre del dispositivo" 
                />
                <i id='iName' class="msgError"> </i>
                <br/>

                {/* Serial number */}
                <TextField fullWidth 
                    name='serialNumber' 
                    id="serialNumber" 
                    value={values.serialNumber}
                    onChange={handleChange}
                    onBlur={validateSerial}
                    placeholder="Número de serie" 
                    label="Número de serie" 
                />
                <i id="iSerial" class="msgError"> </i>
                <br/>

                {/* Brand */}
                <TextField fullWidth 
                    name='brand'
                    id="brand" 
                    value={values.brand}
                    onChange={handleChange}
                    onBlur={validateBrand}
                    placeholder="Marca" 
                    label="Marca" 
                />
                <i id="iBrand" class="msgError"> </i>
                <br/>

                {/* Owner */}
                <TextField fullWidth
                    name='owner'
                    id="owner" 
                    value={values.owner}
                    onChange={handleChange}
                    onBlur={validateOwner}
                    placeholder="Encargado"
                    label="Encargado" />
                    <i id="iOwner" class="msgError"></i>
                <br/>
                
                {/* Gym */}
                <FormControl fullWidth>
                    <InputLabel id="labelGym">Gimnasio al que pertenece</InputLabel>
                    <Select
                        fullWidth
                        labelId="labelGym"
                        name='local'
                        id="local"
                        value={values.local}
                        onChange={handleChange}
                        onBlur={validateLocal}
                        label="Gimnasio al que pertenece"
                    >
                        
                        <MenuItem disabled selected>Seleccione un gimnasio</MenuItem>
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
                        background: '#ffb74d',  /* fallback for old browsers */
                        background: 'linear-gradient(to right, #ffb74d, #ffb74d)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                        width:'60%'
                    }}        
                >
                    Ingresar
                </Button>
                <br/>
            </Box>
            
        </form>
    );
}
export default FormAddTIDevice;