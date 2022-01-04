import TableRmachine from './TableRepairMachine'
import { getRmachine} from '../services/rMachineAxios'
import '../index.css';
import {Box} from "@mui/material"
import React, {useEffect, useState} from 'react';
import NavBar from './NavBar'
import Cookies from 'universal-cookie/es6';

const cookies = new Cookies()

const TableRMachineLayout = () => {

    const [rmachine, setRmachine] = useState([])

    useEffect(() => {
        async function loadRmachine() {
            const response = await getRmachine()

            if (response.status === 200) {
                setRmachine(response.data)
            }
        }

        loadRmachine()
        
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
                <TableRmachine rmachine={rmachine}/>
            </Box>
        
        </>
    )
}
export default TableRMachineLayout