import FormAddLocal from '../components/FormAddLocal'
import {saveLocal} from '../services/localAxios'
import '../index.css';
import {Box} from "@mui/material"
import NavBar from '../components/NavBar'
import Cookies from 'universal-cookie/es6';
import {useEffect, useState} from 'react';
import ModalDataRegistered from '../components/ModalDataRegistered';

const cookies = new Cookies()

const LocalLayout = () => {

    const [formAddLocalValues, setformAddLocalValues] = useState({
        namegym: '',
        city: ''
    })

    async function handleSubmit(data) {
        const response = await saveLocal(data,formAddLocalValues,setformAddLocalValues)

        if (response.status == 200) {
            setModal(true);
            
        }
    }

    const [modal, setModal] = useState(false)

    useEffect(() => {
        if (typeof cookies.get('userName') === 'undefined' || cookies.get('type', {path: "/"}) !== '1') {
            window.location.href = "./"
        }
    })

    return (
        <>
            <Box
                class = "imgLocal"
            >
                <NavBar />
                <br/><br/>
                <FormAddLocal handleSubmit={handleSubmit} formAddLocalValues={formAddLocalValues} setformAddLocalValues={setformAddLocalValues} />
                <br/>
                <ModalDataRegistered modal={modal} setModal={setModal} message="Datos registrados correctamente" />
            </Box>
        
        </>
    )
}
export default LocalLayout