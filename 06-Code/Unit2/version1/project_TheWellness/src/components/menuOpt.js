import logo from '../img/logoWellnessGroup.png';
import * as React from 'react';
import '../App.css';
import '../index.css';
import {Box,TextField,Button,Stack,Typography,Table,TableBody,TableCell,TableRow,TableContainer,TableHead} from "@mui/material"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';




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
                <TableCell><a href="repairmachine.html"><div class="imgOpt repMach"></div></a></TableCell>
                <TableCell><a href="repairsystems.html"><div class="imgOpt repSyst"></div></a></TableCell>
                <TableCell><a href="repairinfra.html"><div class="imgOpt repInfra"></div></a></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><a href="repairmachine.html" class="titlesOpt"><h2>Maquinas del Gimnasio</h2></a></TableCell>
                <TableCell><a href="repairsystems.html" class="titlesOpt"><h2>Sistemas/Dispositivos TI</h2></a></TableCell>
                <TableCell><a href="repairinfra.html" class="titlesOpt"><h2>Infraestructura Gimnasio</h2></a></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><a href="repairmachine.html" class="addReq">Agregar Requerimiento</a></TableCell>
                <TableCell><a href="repairsystems.html" class="addReq">Agregar Requerimiento</a></TableCell>
                <TableCell><a href="repairinfra.html" class="addReq">Agregar Requerimiento</a></TableCell>
            </TableRow>
        </Table>
    </div>
  </div>

</form>
      

  );
}
export default MenuOpt;
