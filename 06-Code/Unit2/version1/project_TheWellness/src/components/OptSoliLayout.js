import OptSoli from './OptSoli'
import '../index.css';
import {Box} from "@mui/material"
import NavBarLeaderGym from './NavBarLeaderGym'
import Cookies from 'universal-cookie/es6';
import {useEffect, useState} from 'react';

const cookies = new Cookies()

const OptSoliLayout = () => {

    useEffect(() => {
        if (typeof cookies.get('userName') === 'undefined' || cookies.get('type', {path: "/"}) !== '2') {
            window.location.href = "./"
        }
    })

    return (
        <>
            <Box
                class="menuOpt"
            >
                <NavBarLeaderGym />
                <br/><br/>
                <OptSoli />
                <br/>
            </Box>
        
        </>
    )
}
export default OptSoliLayout