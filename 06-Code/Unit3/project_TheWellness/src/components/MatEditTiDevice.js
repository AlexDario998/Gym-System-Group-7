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

const MatEditTiDevice = ( props ) => {

    const data = props.data
    const handleUpdateRegister = props.handleUpdateRegister
    const gyms = props.gyms

    const [open, setOpen] = useState(false);

    const [formTiDeviceValues, setformTiDeviceValues] = useState({
        id: data.id,
        name: data.name,
        serialNumber: data.serialNumber,
        brand: data.brand,
        local: data.local,
        owner: data.owner
    })

    const [validation,setValidation]=useState({
        auxName:true,
        auxSerial:true,
        auxBrand:true,
        auxOwner:true,
        auxLocal:true
    })

    const validateName=()=>{

        const nameDevice= formTiDeviceValues.name
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
        const serial=formTiDeviceValues.serialNumber
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
        const brand=formTiDeviceValues.brand
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
        const owner= formTiDeviceValues.owner
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
        const local=formTiDeviceValues.local
       // console.log(local)
        if(local===""){
            setValidation({...validation,auxLocal:false})
        }else{
            setValidation({...validation,auxLocal:true})
        
        }

    
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setformTiDeviceValues({ ...formTiDeviceValues, [name]: value})
    }

    const handleEdit = (e) => {
        e.preventDefault()
        
        if(validation.auxName === true &&validation.auxBrand===true&&
          validation.auxOwner===true&&validation.auxSerial===true&&
          validation.auxLocal===true){
            handleUpdateRegister(formTiDeviceValues)
        }else{
            window.alert("*Por favor llene los campos correctamente")
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
                        <h1 align='center'>Editar Dispositivo TI</h1><br/>

                        {/* TI dispositive */}
                        <TextField fullWidth 
                            name='name' 
                            id="name" 
                            value={formTiDeviceValues.name}
                            onChange={handleChange}
                            onBlur={validateName}
                            placeholder="Dispositivo TI" 
                            label="Dispositivo TI" 
                        /><i id="iName" class="msgError"></i>

                        {/* Serial number */}
                        <TextField fullWidth 
                            name='serialNumber' 
                            id="serialNumber" 
                            value={formTiDeviceValues.serialNumber}
                            onChange={handleChange}
                            onBlur={validateSerial}
                            placeholder="Número serial" 
                            label="Número serial" 
                            style={{
                                marginTop: '5%'
                            }}
                        /><i id="iSerial" class="msgError"></i>

                        {/* Brand */}
                        <TextField fullWidth 
                            name='brand' 
                            id="brand" 
                            value={formTiDeviceValues.brand}
                            onChange={handleChange}
                            onBlur={validateBrand}
                            placeholder="Marca" 
                            label="Marca" 
                            style={{
                                marginTop: '5%'
                            }}
                        /><i id="iBrand" class="msgError"></i>


                        {/* Owner */}
                        <TextField fullWidth 
                            name='owner' 
                            id="owner" 
                            value={formTiDeviceValues.owner}
                            onChange={handleChange}
                            onBlur={validateOwner}
                            placeholder="Propietario" 
                            label="Propietario" 
                            style={{
                                marginTop: '5%'
                            }}
                        /><i id="iOwner" class="msgError"></i>

                        {/* Gym */}
                        <FormControl fullWidth 
                            style={{
                                marginTop: '5%'
                            }}>
                            <InputLabel id="labelGym">Gimnasio al que pertenece</InputLabel>
                            <Select
                                fullWidth
                                labelId="labelGym"
                                name='local'
                                id="local"
                                onBlur={validateLocal}
                                value={formTiDeviceValues.local}
                                onChange={handleChange}
                                label="Gimnasio al que pertenece"
                            >
                                <MenuItem disabled selected>Seleccione un gimnasio</MenuItem>
                                {
                                    gyms.map(item => (
                                        <MenuItem value={item._id}>{item.namegym}</MenuItem>
                                        
                                    ))
                                }
                                
                            </Select>
                        </FormControl>

                        <Button
                            variant="contained"
                            size = "large"
                            type="submit"
                            onClose={() => setOpen(false)}
                            sx={{
                                boxShadow: '1px 1px 5px #333',
                                marginTop: "5%",
                                marginLeft: "20%",  
                                background: '#ffb74d',  /* fallback for old browsers */
                                background: 'linear-gradient(to right, #ffb74d, #ffb74d)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                                width:'60%'
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
export default MatEditTiDevice