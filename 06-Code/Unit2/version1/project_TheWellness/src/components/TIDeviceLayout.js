import React, {useEffect, useState} from 'react';
import FormAddTIDevice from './FormAddTIDevice'
import {saveTIDevice} from '../services/tiDeviceAxios'
import '../index.css';
import {Box} from "@mui/material"
import { getLocals } from '../services/localAxios';
import NavBar from './NavBar'

const TIDeviceLayout = () => {
    const [gyms, setGyms] = useState([])
    const handleSubmit = (data) => {
        saveTIDevice(data)
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

    return (
        <>
            <Box
                class = "imgTIDevice"
            >
                <NavBar />
                <br/><br/>
                <FormAddTIDevice handleSubmit={handleSubmit} gyms={gyms}/>
                <br/>
            </Box>
        
        </>
    )
}
export default TIDeviceLayout