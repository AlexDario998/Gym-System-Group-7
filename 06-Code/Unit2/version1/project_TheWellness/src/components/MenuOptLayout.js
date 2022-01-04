import MenuOpt from './MenuOpt'
import '../index.css';
import {Box} from "@mui/material"
import NavBarLeaderGym from './NavBarLeaderGym'
import Cookies from 'universal-cookie/es6';
import {useEffect, useState} from 'react';

const cookies = new Cookies()

const MenuOptLayout = () => {

    useEffect(() => {
        if (typeof cookies.get('userName') === 'undefined') {
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
                <MenuOpt />
                <br/>
            </Box>
        
        </>
    )
}
export default MenuOptLayout