import React, {useEffect, useState} from 'react';
import FormAddTIDevice from '../components/FormAddTIDevice'
import {saveTIDevice} from '../services/tiDeviceAxios'
import '../index.css';
import {Box} from "@mui/material"
import { getLocals } from '../services/localAxios';
import NavBar from '../components/NavBar'
import Cookies from 'universal-cookie/es6';

const cookies = new Cookies()

const TIDeviceLayout = () => {
    const [gyms, setGyms] = useState([])

    const [values, setValues] = useState({
        name: '',
        serialNumber: '',
        brand: '',
        local: '',
        owner: ''
    })

    const handleSubmit = (data) => {
        saveTIDevice(data,values,setValues)
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
        if (typeof cookies.get('userName') === 'undefined' || cookies.get('type', {path: "/"}) !== '1') {
            window.location.href = "./"
        }
    })

    return (
        <>
            <Box
                class = "imgTIDevice"
            >
                <NavBar />
                <br/><br/>
                <FormAddTIDevice handleSubmit={handleSubmit} gyms={gyms} values={values} setValues={setValues}/>
                <br/>
            </Box>
        
        </>
    )
}
export default TIDeviceLayout