import OptSoliAdmin from '../components/OptSoliAdmin'
import '../index.css';
import {Box} from "@mui/material"
import NavBar from '../components/NavBar'
import Cookies from 'universal-cookie/es6';
import {useEffect, useState} from 'react';
import BreadcrumbsAdmin from '../components/BreadcrumbsAdmin'

const cookies = new Cookies()

const OptSoliLayout = () => {

    useEffect(() => {
        if (typeof cookies.get('userName') === 'undefined' || cookies.get('type', {path: "/"}) !== '1') {
            window.location.href = "./"
        }
    })

    return (
        <>
            <Box
                class="menuOpt"
            >
                <NavBar/>
                <BreadcrumbsAdmin breadcrumb1="Página principal" breadcrumb2="Solicitudes"/>
                <br/><br/>
                <OptSoliAdmin />
                <br/>
            </Box>
        
        </>
    )
}
export default OptSoliLayout