import EditIcon from '@mui/icons-material/Edit'
import { IconButton, Modal, Box, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { esES } from '@mui/x-data-grid';
import React, { useState } from 'react';

const style  = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    padding: 4,
};

const MatEditUser = ( props ) => {

    const data = props.data
    const handleUpdateRegister = props.handleUpdateRegister
    const gyms = props.gyms
    //console.log(data)

    const [open, setOpen] = useState(false);

    const [formUser, setformUser] = useState({
        id: data.id,
        idCard: data.idCard,
        name: data.name,
        lastName: data.lastName,
        userName: data.userName,
        email: data.email,
        password: data.password,
        type: data.type,
        gym: data.gym
    })

    const [validation, setValidation] = useState({
        auxName: true,
        auxLastName: true,
        auxId: true,
        auxEmail: true,
        auxPassword: true,
        auxUsername: true,
        auxType: true,
        auxLocal: true
    })
    //console.log(formUser.gym)
    const handleChange = (event) => {
        const { name, value } = event.target
        setformUser({ ...formUser, [name]: value})
        console.log(formUser)
    }

    const nameValidation = () => {
        const name = formUser.name
        const regexOnlyletters = /^[a-zA-ZáéíóúÁÉÍÓÚ ]+$/
        const iName = document.getElementById('iName')
        const names = document.getElementById('name')
        var splitName = name.split(' ')
        var auxIterator = 0
        var correctName = ""

        if (name === "") {
            iName.textContent = "*Ingrese el nombre. Campo obligatorio."
           
            auxIterator++
            setValidation({...validation, auxName: false})
        }

        if (auxIterator !== 1 && !regexOnlyletters.test(name)) {
            iName.textContent = "*Solo se permiten letras"
            
            auxIterator++
            setValidation({...validation, auxName: false})
        }

        if (auxIterator === 0) {
            for (var i=0; i<splitName.length; i++) {
                for (var j=0; j<splitName[i].length; j++) {
                    if (j === 0) {
                        correctName += splitName[i].charAt(j).toUpperCase()
                    }else {
                        correctName += splitName[i].charAt(j)
                    }
                }

                if (i !== splitName.length - 1) {
                    correctName += " "
                }
            }
            setformUser({...formUser, name: correctName})
            iName.textContent = ""
            names.style.border=''
            setValidation({...validation, auxName: true})
        }else{
            names.style.borderBottom='2px solid red'
            names.style.borderRight='2px solid red'
            names.style.borderLeft='2px solid red'
            names.style.borderRadius='5px'
            
        }
    }

    const lastNameValidation = () => {
        const lastName = formUser.lastName
        const regexOnlyletters = /^[a-zA-ZáéíóúÁÉÍÓÚ ]+$/
        const iLastName = document.getElementById('iLastName')
        const lastN= document.getElementById('userLastName')
        var splitLastName = lastName.split(' ')
        var auxIterator = 0
        var correctLastName = ""

        if (lastName === "") {
            iLastName.textContent = "*Ingrese el apellido. Campo obligatorio."
            auxIterator++
            setValidation({...validation, auxLastName: false})
        }

        if (auxIterator !== 1 && !regexOnlyletters.test(lastName)) {
            iLastName.textContent = "*Solo se permiten letras."
            auxIterator++
            setValidation({...validation, auxLastName: false})
        }

        if (auxIterator === 0) {
            for (var i=0; i<splitLastName.length; i++) {
                for (var j=0; j<splitLastName[i].length; j++) {
                    if (j === 0) {
                        correctLastName += splitLastName[i].charAt(j).toUpperCase()
                    }else {
                        correctLastName += splitLastName[i].charAt(j)
                    }
                }

                if (i !== splitLastName.length - 1) {
                    correctLastName += " "
                }
            }
            setformUser({...formUser, lastName: correctLastName})
            iLastName.textContent = ""
            lastN.style.border=''
            setValidation({...validation, auxLastName: true})
        }else{
            lastN.style.borderBottom='2px solid red'
            lastN.style.borderRight='2px solid red'
            lastN.style.borderLeft='2px solid red'
            lastN.style.borderRadius='5px'
        }
    }

     const idCardValidation = () => {
        const idCard = formUser.idCard
        const regexOnlyNumbers = /[0-9]+$/
        const iIdCard = document.getElementById('iIdCard')
        const idC = document.getElementById('userId')
        var auxIterator = 0
        var splitIDCard = idCard.split('')
        var pairsArray = []
        var oddArray = []
        var sumOddNumbers = 0
        var sumPairNumbers = 0
        var totalSum = 0
        var auxBoolIDCard = true

        if (idCard === "") {
            iIdCard.textContent = "*Ingrese el ID. Campo obligatorio."
            auxIterator++
            setValidation({...validation, auxId: false})
        }

        if (auxIterator !== 1 && !regexOnlyNumbers.test(idCard)) {
            iIdCard.textContent = "*El ID solo debe contener números"
            auxIterator++
            setValidation({...validation, auxId: false})
        }

        if (auxIterator !== 1 && idCard.length < 10) {
            iIdCard.textContent = "*El ID debe tener 10 digitos"
            auxIterator++
            setValidation({...validation, auxId: false})
        }

        if (auxIterator !== 1 && !(idCard.charAt(0) === '1' || (idCard.charAt(0) === '2' && (idCard.charAt(1) === '0' || idCard.charAt(1) === '1' || 
                idCard.charAt(1) === '2' || idCard.charAt(1) === '3' || idCard.charAt(1) === '4')) || idCard.charAt(0) === '0')) 
        {
			iIdCard.textContent = "*Ingrese correctamente los primeros dos dígitos de la cédula"
            auxIterator++
            setValidation({...validation, auxId: false})
		}

        if (auxIterator !== 1) {
            for (var j=0; j<splitIDCard.length - 1; j++) {
                if ((j+1) % 2 === 0) {
                    pairsArray.push(parseInt(splitIDCard[j]));
                    
                }else{
                    oddArray.push(parseInt(splitIDCard[j]));
                    
                }
            }

            for (var k=0; k<oddArray.length; k++) {
                oddArray[k] *= 2;
                
                if(oddArray[k] > 9){
                    oddArray[k] -= 9;
                    
                }
            }
            
            for(var l=0; l<oddArray.length; l++){
                
                sumOddNumbers += oddArray[l];
            }
            
            for(var m=0; m<pairsArray.length; m++){
                
                sumPairNumbers += pairsArray[m];
            }
            
            totalSum = sumOddNumbers + sumPairNumbers;
            totalSum %= 10;
            
            if (totalSum !== 0) {
                totalSum = 10 - totalSum;
            }

            if (totalSum !== parseInt(splitIDCard[splitIDCard.length - 1])) {
                auxBoolIDCard = false;
            }

            if (auxBoolIDCard  === false) {
                iIdCard.textContent = "*Comprobación del último dígito errada. Ingrese correctamente su cédula"
                auxIterator++
                setValidation({...validation, auxId: false})
            }
        }

        if (auxIterator === 0) {
            iIdCard.textContent = ""
            idC.style.border=''
            setValidation({...validation, auxId: true})
        }else{
            idC.style.borderBottom='2px solid red'
            idC.style.borderRight='2px solid red'
            idC.style.borderLeft='2px solid red'
            idC.style.borderRadius='5px'
        }
    }

    const emailValidation = () => {
        const email = formUser.email
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        const iEmail = document.getElementById('iEmail')
        const emails= document.getElementById('email')
        var auxIterator = 0

        if (email === "") {
            iEmail.textContent = "*Ingrese el correo electrónico. Campo obligatorio."
            auxIterator++
            setValidation({...validation, auxEmail: false})
        }

        if (auxIterator !== 1 && !regexEmail.test(email)) {
            iEmail.textContent = "*Ingrese correctamente el email"
            auxIterator++
            setValidation({...validation, auxEmail: false})
        }

        if (auxIterator === 0) {
            iEmail.textContent = ""
            emails.style.border=''
            setValidation({...validation, auxEmail: true})
        }else{
            emails.style.borderBottom='2px solid red'
            emails.style.borderRight='2px solid red'
            emails.style.borderLeft='2px solid red'
            emails.style.borderRadius='5px'
        }
    }

    const usernameValidation = () => {
        const username = formUser.userName
        const iUsername = document.getElementById('iUsername')
        var auxIterator = 0

        if (username === "") {
            iUsername.textContent = "*Ingrese el nombre de usuario. Campo obligatorio."
            
            auxIterator++
            setValidation({...validation, auxUsername: false})
        }

        if (auxIterator === 0) {
            iUsername.textContent = ""
            setValidation({...validation, auxUsername: true})
        }
    }

    const passwordValidation = () => {
        const password = formUser.password
        const iPassword = document.getElementById('iPassword')
        const pass= document.getElementById('password')
        var auxIterator = 0

        if (password === "") {
            iPassword.textContent = "*Ingrese la contraseña. Campo obligatorio."
            auxIterator++
            setValidation({...validation, auxPassword: false})
        }

        if (auxIterator !== 1 && password.length < 5) {
            iPassword.textContent = "*El Password debe tener al menos 5 digitos"
            auxIterator++
            setValidation({...validation, auxPassword: false})
        }

        if (auxIterator === 0) {
            iPassword.textContent = ""
            pass.style.border=''
            setValidation({...validation, auxPassword: true})
        }else{
            pass.style.borderBottom='2px solid red'
            pass.style.borderRight='2px solid red'
            pass.style.borderLeft='2px solid red'
            pass.style.borderRadius='5px'
        }

    }

    const modificationType = () => {
        const type = formUser.type

        if (type === 0) {
            setValidation({...validation, auxType: false})
        }else {
            setValidation({...validation, auxType: true})
        }
        
    }
    
    const modificationLocal = () => {
        const local = formUser.gym
        
        if (local === "") {
            setValidation({...validation, auxLocal: false})
        }else {
            setValidation({...validation, auxLocal: true})
        }
        
    }



    const handleEdit = (e) => {
        e.preventDefault()
       

        if (validation.auxName === true && validation.auxLastName === true && validation.auxId === true && validation.auxEmail === true && 
            validation.auxUsername === true && validation.auxPassword === true && validation.auxType == true && validation.auxLocal === true) 
        {
             handleUpdateRegister(formUser)

        }else {
            window.alert("Por favor llene todos los campos correctamente")
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
                <Box sx={style} id='editUser'>
                    <form onSubmit={handleEdit}>
                        <h1 align='center'>Editar Usuario</h1><br/>

                      
                        <TextField fullWidth 
                           id="name" 
                           name="name" 
                           value={formUser.name} 
                           placeholder="Nombres" 
                           label="Nombres" 
                           onChange={handleChange} 
                           onBlur={nameValidation}
                        /> <i id="iName" class="msgError"></i>
                        
                        <TextField fullWidth 
                            id="userLastName"  
                            name="lastName" 
                            value={formUser.lastName} 
                            placeholder="Apellidos" 
                            label="Apellidos" 
                            onChange={handleChange} 
                            onBlur={lastNameValidation}
                            style={{
                                marginTop: '5%'
                            }}
                        /> <i id="iLastName" class="msgError"></i>

                        <TextField fullWidth 
                            id="userId"
                            name="idCard" 
                            placeholder="ID/Pasaporte" 
                            value={formUser.idCard} 
                            label="Id/Pasaporte" 
                            onChange={handleChange} 
                            onBlur={idCardValidation}
                            style={{
                                marginTop: '5%'
                            }}
                        /> <i id="iIdCard" class="msgError"></i>

                        <TextField fullWidth
                            id="email"  
                            name="email" 
                            placeholder="Correo eléctronico" 
                            value={formUser.email} 
                            label="Correo eléctronico" 
                            onChange={handleChange} 
                            onBlur={emailValidation}
                            style={{
                                marginTop: '5%',
                            }}

                        /><i id="iEmail" class="msgError"></i>

                        <TextField fullWidth 
                            id="userName" 
                            name="userName" 
                            placeholder="Nombre de usuario" 
                            value={formUser.userName} 
                            label="Nombre de usuario" 
                            onChange={handleChange} 
                            onBlur={usernameValidation}
                            style={{
                                marginTop: '5%'
                            }}
                        
                        /><i id="iUsername" class="msgError"></i>

                        <TextField fullWidth 
                            id="password" 
                            name="password" 
                            placeholder="Contraseña" 
                            value={formUser.password} 
                            type="password" 
                            label="Contraseña" 
                            onChange={handleChange} 
                            onBlur={passwordValidation}
                            style={{
                                marginTop: '5%'
                            }}
                        
                        /><i id="iPassword" class="msgError"></i>

                        <FormControl fullWidth
                            style={{
                                    marginTop: '5%'
                                }}
                        >
                            <InputLabel id="labelTypeUser">Tipo de Usuario</InputLabel>
                            <Select
                                fullWidth
                                labelId="labelTypeUser"
                                id="type"
                                name="type"
                                value={formUser.type}
                                label="Tipo de usuario"
                                onChange={handleChange}
                                onBlur={modificationType}
                            >
                                <MenuItem disabled selected >Seleccione un tipo </MenuItem>
                                <MenuItem value={2}>Supervisor</MenuItem>
                                <MenuItem value={3}>Admin/Sistemas</MenuItem>
                                <MenuItem value={4}>Admin/Mantenimiento</MenuItem>
                                <MenuItem value={5}>Grupo de mantenimiento</MenuItem>
                            </Select>
                         </FormControl>

                        {/* Gym */}
                        <FormControl fullWidth 
                            style={{
                                marginTop: '5%'
                            }}>
                            <InputLabel id="labelGym">Gimnasio al que pertenece</InputLabel>
                            <Select
                                fullWidth
                                labelId="labelGym"
                                name='gym'
                                id="gym"
                                value={formUser.gym}
                                onBlur={modificationLocal}
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

                        <Button
                            variant="contained"
                            size = "large"
                            type="submit"
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
export default MatEditUser