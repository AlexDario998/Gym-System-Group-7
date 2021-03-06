import React, {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';

import '../App.css';
import '../index.css';
import {Box,TextField,Button,Select,MenuItem} from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const FormUser = (props) => {

    const handleSubmit = props.handleSubmit
    const gyms = props.gyms
    const users = props.users
    const formUserValues = props.formUserValues
    const setFormUservalues = props.setFormUservalues
    
    const [validation, setValidation] = useState({
        auxName: false,
        auxLastName: false,
        auxId: false,
        auxEmail: false,
        auxPassword: false,
        auxType: true,
        auxLocal: false
    })

    const [validation2, setValidation2] = useState({
        auxType: false
    })
    
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormUservalues({ ...formUserValues, [name]: value})
        
    }
    const handleSubmitInternal = (e) => {
        e.preventDefault()
        
        if (validation.auxName === true && validation.auxLastName === true && validation.auxId === true && validation.auxEmail === true && 
            validation.auxPassword === true && validation.auxType === true && validation2.auxType === true && validation.auxLocal === true) 
        {
            handleSubmit(formUserValues)

        }else {
            window.alert("Por favor llene todos los campos correctamente")
        }
    }

    const handleClickShowPassword = () => {
        setFormUservalues({
        ...formUserValues,
        showPassword: !formUserValues.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const nameValidation = () => {
        const name = formUserValues.name
        const regexOnlyletters = /^[a-zA-Z ]+$/
        const iName = document.getElementById('iName')
        const names = document.getElementById('userName')
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
            setFormUservalues({...formUserValues, name: correctName})
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
        const lastName = formUserValues.lastName
        const regexOnlyletters = /^[a-zA-Z ]+$/
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
            setFormUservalues({...formUserValues, lastName: correctLastName})
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
        const idCard = formUserValues.idCard
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
            iIdCard.textContent = "*El ID solo debe contener n??meros"
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
			iIdCard.textContent = "*Ingrese correctamente los primeros dos d??gitos de la c??dula"
            auxIterator++
            setValidation({...validation, auxId: false})
		}

        if (auxIterator !== 1) {
            for (var i=0; i<users.length; i++) {
                if (users[i].idCard === idCard) {
                    iIdCard.textContent = "*C??dula ya registrada"
                    auxIterator++
                    setValidation({...validation, auxId: false})
                    break
                }
            }
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
                iIdCard.textContent = "*Comprobaci??n del ??ltimo d??gito errada. Ingrese correctamente su c??dula"
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
        const email = formUserValues.email
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        const iEmail = document.getElementById('iEmail')
        const emails= document.getElementById('email')
        var auxIterator = 0

        if (email === "") {
            iEmail.textContent = "*Ingrese el correo electr??nico. Campo obligatorio."
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

    const passwordValidation = () => {
        const password = formUserValues.password
        const iPassword = document.getElementById('iPassword')
        const pass= document.getElementById('password')
        var auxIterator = 0

        if (password === "") {
            iPassword.textContent = "*Ingrese la contrase??a. Campo obligatorio."
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
        const type = formUserValues.type
        const typeSelect= document.getElementById('type')
        const iType = document.getElementById('iType')
        var auxExists = false
        
        if (type === 0) {
            setValidation({...validation, auxType: false})

        }else if (type === 3 || type === 4) {
            for (var i=0; i<users.length; i++) {
                if (users[i].type === type) {
                    auxExists = true
                    break
                }
            }

            if (auxExists === true) {
                iType.textContent = "*Tipo de usuario ya registrado."
                typeSelect.style.borderBottom='2px solid red'
                typeSelect.style.borderRight='2px solid red'
                typeSelect.style.borderLeft='2px solid red'
                typeSelect.style.borderRadius='5px'
                setValidation2({...validation2, auxType: false})
            }else {
                iType.textContent = ""
                typeSelect.style.border = ''
                setValidation2({...validation2, auxType: true})
            }
        
        }else if (type === 2) {
            
            for (var i=0; i<users.length; i++) {
                if (users[i].gym === formUserValues.gym) {
                    auxExists = true
                    break
                }
            }

            if (auxExists === true) {
                iType.textContent = "*Ya existe un l??der de gimnasio para el gimnasio indicado. Escoja otro."
                typeSelect.style.borderBottom='2px solid red'
                typeSelect.style.borderRight='2px solid red'
                typeSelect.style.borderLeft='2px solid red'
                typeSelect.style.borderRadius='5px'
                setValidation2({...validation2, auxType: false})
            }else {
                iType.textContent = ""
                typeSelect.style.border = ''
                setValidation2({...validation2, auxType: true})
            }

        }else {
            iType.textContent = ""
            typeSelect.style.border = ''
            setValidation2({...validation2, auxType: true})
        }
        
    }
    
    const modificationLocal = () => {
        const local = formUserValues.gym
        const typeSelect= document.getElementById('type')
        const iType = document.getElementById('iType')
        var auxExists = false

        if (local === "") {
            setValidation({...validation, auxLocal: false})
        }else {
            
            if (formUserValues.type === 2) {
                for (var i=0; i<users.length; i++) {
                    if (users[i].gym === local) {
                        auxExists = true
                        break
                    }
                }
    
                if (auxExists === true) {
                    iType.textContent = "*Ya existe un l??der de gimnasio para el gimnasio indicado. Escoja otro."
                    typeSelect.style.borderBottom='2px solid red'
                    typeSelect.style.borderRight='2px solid red'
                    typeSelect.style.borderLeft='2px solid red'
                    typeSelect.style.borderRadius='5px'
                    setValidation2({...validation2, auxType: false})
                }else {
                    iType.textContent = ""
                    typeSelect.style.border = ''
                    setValidation2({...validation2, auxType: true})
                }
            }

            setValidation({...validation, auxLocal: true})
        }
        
    }
    console.log(validation)
    console.log(validation2)
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
                <h1 align="center">Agregar usuario</h1><br/>

                <TextField fullWidth 
                    id="userName" 
                    name="name" 
                    value={formUserValues.name} 
                    placeholder="Nombres" 
                    label="Nombres" 
                    onChange={handleChange} 
                    onBlur={nameValidation}
                />
                <i id='iName' class='msgError'></i>
                <br/>

                <TextField fullWidth 
                    id="userLastName"  
                    name="lastName" 
                    value={formUserValues.lastName} 
                    placeholder="Apellidos" 
                    label="Apellidos" 
                    onChange={handleChange} 
                    onBlur={lastNameValidation}
                />
                <i id='iLastName' class='msgError'></i>
                <br/>
                
                <TextField fullWidth 
                    id="userId" 
                    name="idCard" 
                    placeholder="ID/Pasaporte"
                    inputProps={{ maxLength: 10 }}
                    value={formUserValues.idCard} 
                    label="Id/Pasaporte" 
                    onChange={handleChange} 
                    onBlur={idCardValidation}
                />
                <i id='iIdCard' class='msgError'></i>
                <br/>

                <TextField fullWidth 
                    id="email" 
                    name="email" 
                    placeholder="Correo el??ctronico" 
                    value={formUserValues.email} 
                    label="Correo el??ctronico" 
                    onChange={handleChange} 
                    onBlur={emailValidation}
                />
                <i id='iEmail' class='msgError'></i>
                <br/>

                <TextField fullWidth 
                    id="password" 
                    name="password"
                    placeholder="Contrase??a" 
                    value={formUserValues.password} 
                    type={formUserValues.showPassword ? 'text' : 'password'}
                    label="Contrase??a" 
                    onChange={handleChange} 
                    onBlur={passwordValidation}
                    
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {formUserValues.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                <i id='iPassword' class='msgError'></i>
                <br/>
                
                <FormControl fullWidth>
                    <InputLabel id="labelGym">Local asignado</InputLabel>
                    <Select
                        fullWidth
                        labelId="labelGym"
                        id="gym"
                        name="gym"
                        value={formUserValues.gym}
                        label="Local asignado"
                        onChange={handleChange}
                        onBlur={modificationLocal}
                    >
                        <MenuItem disabled selected >Seleccione un local </MenuItem>
                        {
                            gyms.map(item => (
                                <MenuItem value={item._id}>{item.namegym}</MenuItem>
                                
                            ))
                        }
                    </Select>
                </FormControl>
                <br/>

                <FormControl fullWidth>
                    <InputLabel id="labelTypeUser">Tipo de Usuario</InputLabel>
                    <Select
                        fullWidth
                        labelId="labelTypeUser"
                        id="type"
                        name="type"
                        value={formUserValues.type}
                        label="Tipo de usuario"
                        onChange={handleChange}
                        onBlur={modificationType}
                    >
                        <MenuItem disabled selected value={0}>Seleccione un tipo </MenuItem>
                        <MenuItem value={2}>Supervisor</MenuItem>
                        <MenuItem value={3}>Admin/Sistemas</MenuItem>
                        <MenuItem value={4}>Admin/Mantenimiento</MenuItem>
                        <MenuItem value={5}>Grupo de mantenimiento</MenuItem>
                    </Select>
                </FormControl>
                <i id='iType' class='msgError'></i>
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

    )
}

export default FormUser;