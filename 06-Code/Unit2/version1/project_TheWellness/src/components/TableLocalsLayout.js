import TableLocals from './TableLocals'
import {getLocals} from '../services/localAxios'
import '../index.css';
import {Box} from "@mui/material"
import React, {useEffect, useState} from 'react';

const TIDeviceLayout = () => {

    const [gyms, setGyms] = useState([])

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
            <Box>
                <br/><br/>
                <TableLocals gyms={gyms}/>
            </Box>
        
        </>
    )
}
export default TIDeviceLayout