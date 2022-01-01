import FormAddLocal from './FormAddLocal'
import {saveLocal} from '../services/localAxios'
import '../index.css';
import {Box} from "@mui/material"
import NavBar from './NavBar'
import Cookies from 'universal-cookie/es6';
import {useEffect} from 'react';

const cookies = new Cookies()

const LocalLayout = () => {

    const handleSubmit = (data) => {
        saveLocal(data)
    }

    useEffect(() => {
        if (typeof cookies.get('userName') === 'undefined') {
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
                <FormAddLocal handleSubmit={handleSubmit}/>
                <br/>
            </Box>
        
        </>
    )
}
export default LocalLayout