import logo from '../img/logoWellnessGroup.png';
import * as React from 'react';
import '../App.css';
import '../index.css';
import {Box,TextField,Button,Stack,Typography,Table,TableBody,TableCell,TableRow,TableContainer,TableHead} from "@mui/material"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from 'react-router-dom';




const MenuOpt = () => {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weighTableRowange: '',
        showPassword: false,
      });
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.prevenTableCellefault();
      };
  return (
<form> 
  <div
    sx={{
      justifyContent: 'center',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      padding:'1vh',
      background: '#fff',  /* fallback for old browsers */
      borderRadius: '10px',
      boxShadow: '1px 1px 20px #333'
    }}
  > 

    <div>
        <Table class="tableOpt">
            <TableRow>
                <TableCell><Link to="/machines"><div class="imgOpt repMach"></div></Link></TableCell>
                <TableCell><Link to="/systems"><div class="imgOpt repSyst"></div></Link></TableCell>
                <TableCell><Link to="/infrastructure"><div class="imgOpt repInfra"></div></Link></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Link to="/machines" class="titlesOpt"><h2>Máquinas del Gimnasio</h2></Link></TableCell>
                <TableCell><Link to="/systems" class="titlesOpt"><h2>Sistemas/Dispositivos TI</h2></Link></TableCell>
                <TableCell><Link to="/infrastructure" class="titlesOpt"><h2>Infraestructura Gimnasio</h2></Link></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><Link to="/machines" class="addReq">Agregar Requerimiento</Link></TableCell>
                <TableCell><Link to="/systems" class="addReq">Agregar Requerimiento</Link></TableCell>
                <TableCell><Link to="/infrastructure" class="addReq">Agregar Requerimiento</Link></TableCell>
            </TableRow>
        </Table>
    </div>
  </div>

</form>
      

  );
}
export default MenuOpt;
