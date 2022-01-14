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
    const formUserValues = props.formUserValues
    const setFormUservalues = props.setFormUservalues
    
    const [validation, setValidation] = useState({
        auxName: false,
        auxLastName: false,
        auxId: false,
        auxEmail: false,
        auxPassword: false,
        auxUsername: false,
        auxType: false,
        auxLocal: false
    })
    
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormUservalues({ ...formUserValues, [name]: value})
        
    }
    const handleSubmitInternal = (e) => {
        e.preventDefault()
        
        if (validation.auxName === true && validation.auxLastName === true && validation.auxId === true && validation.auxEmail === true && 
            validation.auxUsername === true && validation.auxPassword === true && validation.auxType == true && validation.auxLocal === true) 
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
        var splitName = name.split(' ')
        var auxIterator = 0
        var correctName = ""

        if (name === "") {
            iName.textContent = "Ingrese el nombre. Campo obligatorio."
            auxIterator++
            setValidation({...validation, auxName: false})
        }

        if (auxIterator !== 1 && !regexOnlyletters.test(name)) {
            iName.textContent = "Solo se permiten letras"
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
            setValidation({...validation, auxName: true})
        }
    }

    const lastNameValidation = () => {
        const lastName = formUserValues.lastName
        const regexOnlyletters = /^[a-zA-Z ]+$/
        const iLastName = document.getElementById('iLastName')
        var splitLastName = lastName.split(' ')
        var auxIterator = 0
        var correctLastName = ""

        if (lastName === "") {
            iLastName.textContent = "Ingrese el apellido. Campo obligatorio."
            auxIterator++
            setValidation({...validation, auxLastName: false})
        }

        if (auxIterator !== 1 && !regexOnlyletters.test(lastName)) {
            iLastName.textContent = "Solo se permiten letras."
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
            setValidation({...validation, auxLastName: true})
        }
    }

    const idCardValidation = () => {
        const idCard = formUserValues.idCard
        const regexOnlyNumbers = /[0-9]+$/
        const iIdCard = document.getElementById('iIdCard')
        var auxIterator = 0
        var splitIDCard = idCard.split('')
        var pairsArray = []
        var oddArray = []
        var sumOddNumbers = 0
        var sumPairNumbers = 0
        var totalSum = 0
        var auxBoolIDCard = true

        if (idCard === "") {
            iIdCard.textContent = "Ingrese el ID. Campo obligatorio."
            auxIterator++
            setValidation({...validation, auxId: false})
        }

        if (auxIterator !== 1 && !regexOnlyNumbers.test(idCard)) {
            iIdCard.textContent = "El ID solo debe contener números"
            auxIterator++
            setValidation({...validation, auxId: false})
        }

        if (auxIterator !== 1 && idCard.length < 10) {
            iIdCard.textContent = "El ID debe tener 10 digitos"
            auxIterator++
            setValidation({...validation, auxId: false})
        }

        if (auxIterator !== 1 && !(idCard.charAt(0) === '1' || (idCard.charAt(0) === '2' && (idCard.charAt(1) === '0' || idCard.charAt(1) === '1' || 
                idCard.charAt(1) === '2' || idCard.charAt(1) === '3' || idCard.charAt(1) === '4')) || idCard.charAt(0) === '0')) 
        {
			iIdCard.textContent = "Ingrese correctamente los primeros dos dígitos de la cédula"
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
                iIdCard.textContent = "Comprobación del último dígito errada. Ingrese correctamente su cédula"
                auxIterator++
                setValidation({...validation, auxId: false})
            }
        }

        if (auxIterator === 0) {
            iIdCard.textContent = ""
            setValidation({...validation, auxId: true})
        }
    }
    
    const emailValidation = () => {
        const email = formUserValues.email
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        const iEmail = document.getElementById('iEmail')
        var auxIterator = 0

        if (email === "") {
            iEmail.textContent = "Ingrese la cédula. Campo obligatorio."
            auxIterator++
            setValidation({...validation, auxEmail: false})
        }

        if (auxIterator !== 1 && !regexEmail.test(email)) {
            iEmail.textContent = "Ingrese correctamente el email"
            auxIterator++
            setValidation({...validation, auxEmail: false})
        }

        if (auxIterator === 0) {
            iEmail.textContent = ""
            setValidation({...validation, auxEmail: true})
        }
    }

    const usernameValidation = () => {
        const username = formUserValues.userName
        const iUsername = document.getElementById('iUsername')
        var auxIterator = 0

        if (username === "") {
            iUsername.textContent = "Ingrese el nombre de usuario. Campo obligatorio."
            auxIterator++
            setValidation({...validation, auxUsername: false})
        }

        if (auxIterator === 0) {
            iUsername.textContent = ""
            setValidation({...validation, auxUsername: true})
        }
    }

    const passwordValidation = () => {
        const password = formUserValues.password
        const iPassword = document.getElementById('iPassword')
        var auxIterator = 0

        if (password === "") {
            iPassword.textContent = "Ingrese la contraseña. Campo obligatorio."
            auxIterator++
            setValidation({...validation, auxPassword: false})
        }

        if (auxIterator === 0) {
            iPassword.textContent = ""
            setValidation({...validation, auxPassword: true})
        }
    }

    const modificationType = () => {
        const type = formUserValues.type

        if (type === 0) {
            setValidation({...validation, auxType: false})
        }else {
            setValidation({...validation, auxType: true})
        }
        
    }
    
    const modificationLocal = () => {
        const local = formUserValues.gym
        console.log(local)
        if (local === "") {
            setValidation({...validation, auxLocal: false})
        }else {
            setValidation({...validation, auxLocal: true})
        }
        
    }

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
                <i id='iName'></i>
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
                <i id='iLastName'></i>
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
                <i id='iIdCard'></i>
                <br/>

                <TextField fullWidth 
                    id="email" 
                    name="email" 
                    placeholder="Correo eléctronico" 
                    value={formUserValues.email} 
                    label="Correo eléctronico" 
                    onChange={handleChange} 
                    onBlur={emailValidation}
                />
                <i id='iEmail'></i>
                <br/>

                <TextField fullWidth 
                    id="userName" 
                    name="userName" 
                    placeholder="Nombre de usuario" 
                    value={formUserValues.userName} 
                    label="Nombre de usuario" 
                    onChange={handleChange} 
                    onBlur={usernameValidation}
                />
                <i id='iUsername'></i>
                <br/>

                <TextField fullWidth 
                    id="password" 
                    name="password"
                    placeholder="Contraseña" 
                    value={formUserValues.password} 
                    type={formUserValues.showPassword ? 'text' : 'password'}
                    label="Contraseña" 
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
                <i id='iPassword'></i>
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

    )
}

export default FormUser;