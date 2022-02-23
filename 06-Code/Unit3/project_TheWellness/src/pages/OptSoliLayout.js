import OptSoli from '../components/OptSoli'
import '../index.css';
import {Box} from "@mui/material"
import NavBarLeaderGym from '../components/NavBarLeaderGym'
import Cookies from 'universal-cookie/es6';
import {useEffect, useState} from 'react';
import BreadcrumbsLeaderTwoLayers from '../components/BreadcrumbsLeaderTwoLayers'

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
                <BreadcrumbsLeaderTwoLayers breadcrumb1="Página principal" breadcrumb2="Solicitudes"/>
                <br/><br/>
                <OptSoli />
                <br/>
            </Box>
        
        </>
    )
}
export default OptSoliLayout