import FormUser from './FormUser'
import {saveUser} from '../services/userAxios'
import {getLocals} from '../services/localAxios'
import '../index.css';
import {Box} from "@mui/material"
import NavBar from './NavBar'
import Cookies from 'universal-cookie/es6';
import {useEffect, useState} from 'react';

const cookies = new Cookies()

const UserLayout = () => {

    const [gyms, setGyms] = useState([])

    const [values, setValues] = useState({
        name: '',
        userName: '',
        lastName: '',
        password: '',
        idCard: '',
        email: '',
        type: 0,
        gym: ''
    })

    const handleSubmit = (data) => {
        saveUser(data,values,setValues)
    }

    useEffect(() => {
        async function loadGyms() {
            const response = await getLocals()

            if (response.status === 200) {
                setGyms(response.data)
                
            }
        }

        loadGyms()
        
    }, [])

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
                <FormUser handleSubmit={handleSubmit} gyms={gyms} formUserValues={values} setFormUservalues={setValues} />
                <br/>
            </Box>
        
        </>
    )
}
export default UserLayout