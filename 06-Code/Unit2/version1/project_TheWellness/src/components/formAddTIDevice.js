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
    auxLocal:false,
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
const regexName=/^[a-zA-Z ]+$/
const iName=document.getElementById('iName')

if(!regexName.test(nameDevice)){
    iName.textContent="Solo se permiten letras"
    setValidation({...validation,auxName:false})
}else{
    iName.textContent=""
    setValidation({...validation,auxName:true})
}

}


const validateSerial=()=>{
    const serial=values.serialNumber
    const regexSerial=/^[a-zA-Z0-9]+$/
    const iSerial=document.getElementById('iSerial')

    if(serial===""){
        iSerial.textContent="*Campo obligatorio"
        setValidation({...validation,auxSerial:false})
    }

    if(!regexSerial.test(serial)){
         iSerial.textContent="*Solo se permiten letras y números"
        setValidation({...validation,auxSerial:false})
    }else{
        iSerial.textContent=""
        setValidation({...validation,auxSerial:true})
    }
}


const validateBrand=()=>{
    const brand=values.brand
    const regexBrand=/^[a-zA-Z ]+$/
    const iBrand=document.getElementById('iBrand')


    if(brand===""){
        iBrand.textContent="*Campo obligatorio"
        setValidation({...validation,auxBrand: false})
    }
    
    
    if(!regexBrand.test(brand)){
        iBrand.textContent="*Solo se permiten letras"
        setValidation({...validation,auxBrand:false})
    
        
    }else{
        iBrand.textContent=""
        setValidation({...validation,auxBrand:true})
    }
}

 const validateOwner=()=>{
     const owner= values.owner
     const regexOwner=/^[a-zA-Z ]+$/
     const iOwner= document.getElementById('iOwner')

     if(owner===""){
         iOwner.textContent="+Campo obligatorio"
         setValidation({...validation,auxOwner:false})
     }

     if(!regexOwner.test(owner)){
          iOwner.textContent="+Solo se permiten letras"
         setValidation({...validation,auxOwner:false})
     }else{
         iOwner.textContent=""
         setValidation({...validation,auxOwner:true})
     }
 }


const validateLocal=()=>{
    const local=values.local
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
        if(validation.auxName===true&&validation.auxBrand===true&&
        validation.auxOwner===true&&validation.auxSerial===true&&validation.auxLocal===true){
            handleSubmit(values)
        }else{
            window.alert("Por favor llene los campos correctamente")
        }
    }

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
                <i id='iName' > </i>
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
                <i id="iSerial"> </i>
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
                <i id="iBrand"> </i>
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
                    <i id="iOwner"></i>
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
    );
}
export default FormAddTIDevice;