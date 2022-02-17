import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../img/logoWellnessGroup.png";
import { Link } from "react-router-dom";
import "../index.css";
import Cookies from "universal-cookie/es6";
const cookies = new Cookies()

const NavbarMaintenanceAdmin = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElReports, setAnchorElReports] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenReportMenu = (event) => {
    setAnchorElReports(event.currentTarget);
};

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
    <AppBar position="static" style={{ backgroundColor: "#ffb74d" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Link to="/homeScreenMantAdmin"><div class="logoNav"></div></Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Tooltip title="Reportes">
                            <Button
                                key='reports'
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                onClick={handleOpenReportMenu}
                            >
                                Solicitudes
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
                            
                          <Link to='/TableMaintenanceRequests' className='link'> 
                            <MenuItem key='reportsMachines'>
                                    <Typography textAlign="center">Máquinas de gimnasio</Typography>      
                            </MenuItem>
                          </Link>
                          <Link to='/TableRepairInfrastructuresRequests' className='link'> 
                            <MenuItem key='reportsInfrastructure'>
                                    <Typography textAlign="center">Infraestructura</Typography>      
                            </MenuItem>
                          </Link>
                        </Menu>
                    </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Salir">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Botón salir" src="exitButton.jpg" />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key="exit" onClick={logOut}>
                <Typography textAlign="center">Salir</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavbarMaintenanceAdmin;
