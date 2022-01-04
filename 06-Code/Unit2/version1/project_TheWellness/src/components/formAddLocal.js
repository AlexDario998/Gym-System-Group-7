import React, {useState} from 'react';
import '../App.css';
import '../index.css';
import {Box, TextField, Button, MenuItem, Select} from "@mui/material"

const FormAddLocal = (props) => {

    const {handleSubmit, formAddLocalValues, setformAddLocalValues} = props

    /*const [formAddLocalValues, setformAddLocalValues] = useState({
        namegym: '',
        city: ''
    })*/

    const handleChange = (event) => {
        const { name, value } = event.target
        setformAddLocalValues({ ...formAddLocalValues, [name]: value})
        
    }

    const handleSubmitInternal = (e) => {
        e.preventDefault()
        handleSubmit(formAddLocalValues)
        //e.target.reset()
    }
    
    return (
        
        <form onSubmit={handleSubmitInternal} id="formAddLocal">

            <Box 
                sx={{
                    width: '30%',
                    height: '90vh',
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
                <h1>Agregar local</h1><br/>

                {/* Gym name */}
                <TextField fullWidth 
                    name='namegym' 
                    id="namegym" 
                    value={formAddLocalValues.namegym}
                    onChange={handleChange}
                    placeholder="Nombre del gimnasio" 
                    label="Nombre del gimnasio" 
                />
                <br/>

                {/* City */}
                <TextField fullWidth 
                    name='city' 
                    id="city" 
                    value={formAddLocalValues.city} 
                    onChange={handleChange}
                    placeholder="Ciudad" 
                    label="Ciudad" 
                />
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
            </Box>
        </form>
            
    );
    
};
export default FormAddLocal;