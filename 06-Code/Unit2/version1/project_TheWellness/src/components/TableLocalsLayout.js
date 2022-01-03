import TableLocals from './TableLocals'
import {getLocals, deleteLocal} from '../services/localAxios'
import '../index.css';
import {Box} from "@mui/material"
import React, {useEffect, useState} from 'react';
import NavBar from './NavBar'
import Cookies from 'universal-cookie/es6';

const cookies = new Cookies()

const TableLocalsLayout = () => {

    const [gyms, setGyms] = useState([])

    const deleteRegister = (idLocal) => {
        deleteLocal(idLocal)
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
            <Box>
                <NavBar />
                <br/><br/>
                <TableLocals gyms={gyms} deleteRegister={deleteRegister} />
            </Box>
        
        </>
    )
}
export default TableLocalsLayout