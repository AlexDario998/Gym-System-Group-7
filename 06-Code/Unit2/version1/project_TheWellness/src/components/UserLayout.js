import FormUser from './FormUser'
import {saveUser} from '../services/userAxios'
import '../index.css';
import {Box} from "@mui/material"
import NavBar from './NavBar'
import Cookies from 'universal-cookie/es6';
import {useEffect, useState} from 'react';

const cookies = new Cookies()

const UserLayout = () => {

    const [values, setValues] = useState({
        name:'',
        userName: '',
        lastName:'',
        password:'',
        idCard:'',
        email:'',
        type:'',
        gym: ''
    })

    const handleSubmit = (data) => {
        saveUser(data,values,setValues)
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
                <FormUser handleSubmit={handleSubmit} values={values} setValues={setValues} />
                <br/>
            </Box>
        
        </>
    )
}
export default UserLayout