import FormAddLocal from './FormAddLocal'
import {saveLocal} from '../services/localAxios'
import '../index.css';
import {Box} from "@mui/material"
import NavBar from './NavBar'
import Cookies from 'universal-cookie/es6';
import {useEffect, useState} from 'react';

const cookies = new Cookies()

const LocalLayout = () => {

    const [formAddLocalValues, setformAddLocalValues] = useState({
        namegym: '',
        city: ''
    })

    const handleSubmit = (data) => {
        saveLocal(data,formAddLocalValues,setformAddLocalValues)
    }

    useEffect(() => {
        if (typeof cookies.get('userName') === 'undefined' || cookies.get('type', {path: "/"}) !== '1') {
            window.location.href = "./"
        }
    })

    return (
        <>
            <Box
                class = "imgLocal"
            >
                <NavBar />
                <br/><br/>
                <FormAddLocal handleSubmit={handleSubmit} formAddLocalValues={formAddLocalValues} setformAddLocalValues={setformAddLocalValues} />
                <br/>
            </Box>
        
        </>
    )
}
export default LocalLayout