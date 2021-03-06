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
import Cookies from 'universal-cookie/es6'

const cookies = new Cookies()

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

    const logOut = () => {
        cookies.remove('id', {path: "/"})
        cookies.remove('name', {path: "/"})
        cookies.remove('lastName', {path: "/"})
        cookies.remove('userName', {path: "/"})
        cookies.remove('idCard', {path: "/"})
        cookies.remove('email', {path: "/"})
        cookies.remove('gym', {path: "/"})
        cookies.remove('type', {path: "/"})

        window.location.href = './'
    }

    return (
        <AppBar position="static" style={{ backgroundColor: '#ffb74d' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to="/homeScreenSuperAdmin"><div class="logoNav"></div></Link>

                    <Box sx={{ display: { xs: 'none', md: 'flex' ,marginRight:'auto'} }}>
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
                        <Link to='/formAddGym' className='link'>                            
                            <MenuItem key='formsLocals'>
                                    <Typography textAlign="center">Locales</Typography>
                                
                            </MenuItem>
                        </Link>
                        <Link to='/formAddTIDevice' className='link'>  
                            <MenuItem key='formsTIDevices'>   
                                    <Typography textAlign="center">Dispositivos TI</Typography>
                            </MenuItem>
                        </Link>
                        <Link to='/gymMachines' className='link'>
                            <MenuItem key='formGymMachines'>
                                    <Typography textAlign="center">M??quinas de gimnasio</Typography>
                            </MenuItem>
                        </Link>
                        <Link to='/formUser' className='link'>
                            <MenuItem key='formsUsers'>                               
                                    <Typography textAlign="center">Usuarios</Typography>                               
                            </MenuItem>
                        </Link>  
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
                        <Link to='/reportLocals' className='link'>    
                            <MenuItem key='reportsLocals'>                              
                                    <Typography textAlign="center">Locales</Typography>
                            </MenuItem>
                        </Link>
                        <Link to='/reportTIDevices' className='link'>
                            <MenuItem key='reportsTIDevices'>
                                    <Typography textAlign="center">Dispositivos TI</Typography>
                                
                            </MenuItem>
                        </Link>
                        <Link to='/reportGymMachines' className='link'>
                            <MenuItem key='reportsGymMachines'>                               
                                    <Typography textAlign="center">M??quinas de gimnasio</Typography>
                            </MenuItem>
                        </Link>
                        <Link to='/reportUsers' className='link'>
                            <MenuItem key='reportsUsers'>
                                <Typography textAlign="center">Usuarios</Typography>
                            </MenuItem>
                        </Link>
                        </Menu>
                    </Box>


                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Salir">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Bot??n salir" src="exitButton.jpg"/>
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
                            
                            <MenuItem key='exit' onClick={logOut}>
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