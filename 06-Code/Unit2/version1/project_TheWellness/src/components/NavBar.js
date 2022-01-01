import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../img/logoWellnessGroup.png'
import { Link } from 'react-router-dom';
import '../index.css';

const NavBar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorElForms, setAnchorElForms] = React.useState(null);
    const [anchorElReports, setAnchorElReports] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleOpenFormMenu = (event) => {
        setAnchorElForms(event.currentTarget);
    };
    const handleOpenReportMenu = (event) => {
        setAnchorElReports(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleCloseFormMenu = () => {
        setAnchorElForms(null);
    };
    const handleCloseReportMenu = () => {
        setAnchorElReports(null);
    };

    return (
        <AppBar position="static" style={{ backgroundColor: '#ffb74d' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    
                    <img 
                        alt="Botón salir" 
                        src={logo}
                        style=
                        {{
                            maxWidth: '5%',
                            marginRight: '1%'
                        }}   
                    />

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Tooltip title="Llenar formularios">
                            <Button
                                key='forms'
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                onClick={handleOpenFormMenu}
                            >
                                Formulario
                            </Button>
                        </Tooltip>

                        <Menu
                            sx={{ mt: '45px' }}
                            id="subMenuForms"
                            anchorEl={anchorElForms}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElForms)}
                            onClose={handleCloseFormMenu}
                        >
                            
                            <MenuItem key='formsLocals'>
                                <Link to='/formAddGym' className='link'>
                                    <Typography textAlign="center">Locales</Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem key='formsTIDevices'>
                                <Link to='/formAddTIDevice' className='link'>    
                                    <Typography textAlign="center">Dispositivos TI</Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem key='formsGymMachines'>
                                <Typography textAlign="center">Máquinas de gimnasio</Typography>
                            </MenuItem>
                            <MenuItem key='formsUsers'>
                                <Typography textAlign="center">Usuarios</Typography>
                            </MenuItem>
                            
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Tooltip title="Generar reportes">
                            <Button
                                key='reports'
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                onClick={handleOpenReportMenu}
                            >
                                Reportes
                            </Button>
                        </Tooltip>

                        <Menu
                            sx={{ mt: '45px' }}
                            id="subMenuReports"
                            anchorEl={anchorElReports}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElReports)}
                            onClose={handleCloseReportMenu}
                        >
                            
                            <MenuItem key='reportsLocals'>
                                <Link to='/reportLocals' className='link'>
                                    <Typography textAlign="center">Locales</Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem key='reportsTIDevices'>
                                <Link to='/reportTIDevices' className='link'>
                                    <Typography textAlign="center">Dispositivos TI</Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem key='reportsGymMachines'>
                                <Typography textAlign="center">Máquinas de gimnasio</Typography>
                            </MenuItem>
                            <MenuItem key='reportsUsers'>
                                <Typography textAlign="center">Usuarios</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>


                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Salir">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Botón salir" src="exitButton.jpg"/>
                            </IconButton>
                        </Tooltip>
                        
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            
                            <MenuItem key='exit'>
                                <Typography textAlign="center">Salir</Typography>
                            </MenuItem>
                            
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;