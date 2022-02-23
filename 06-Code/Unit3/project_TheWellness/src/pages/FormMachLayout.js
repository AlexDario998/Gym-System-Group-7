import FormsMach from '../components/FormsMach'
import {getLocals, getLocalById} from '../services/localAxios'
import {getUserById} from '../services/userAxios'
import {getGymMachinesByIdLocal, getGymMachineById} from '../services/gymMachineAxios'
import {saveRmachine} from '../services/maintenanceRequestsAxios'
import '../index.css';
import {Box} from "@mui/material"
import NavBarLeaderGym from '../components/NavBarLeaderGym'
import Cookies from 'universal-cookie/es6';
import {useEffect, useState} from 'react';
import ModalDataRegistered from '../components/ModalDataRegistered';

const cookies = new Cookies()
const date = new Date()
const year = date.getFullYear()
const month = date.getMonth() + 1
const day = date.getDate()
const dateComplete = day + '/' + month + '/' + year

const FormMachLayout = () => {

    const [gyms, setGyms] = useState([])
    const [gymMachineValues, setGymMachineValues] = useState([])
    const [formMachValues, setFormMachValues] = useState({
        idUser: cookies.get('id', {path: "/"}),
        idLocal: '',
        idGymMachine: '',
        date: dateComplete,
        machineType: '',
        gymZone: '',
        description: '',
        confirmation: true,
        fullNameUser: '',
        emailUser: '',
        passwordUser: '',
        nameLocal: '',
        city: '',
        gymMachine: '',
        gymMachineSerialNumber: ''
    })

    const [modal, setModal] = useState(false)

    async function handleSubmit(data) {
        const response = await saveRmachine(data,formMachValues,setFormMachValues)

        if (response.status == 200) {
            setModal(true);
            
        }
    }

    useEffect(() => {
        async function loadUserById() {
            const response = await getUserById(cookies.get('id', {path: "/"}))
            const user = response.data.name + ' ' + response.data.lastName

            if (response.status === 200) {
                setFormMachValues(
                    {
                        idUser: cookies.get('id', {path: "/"}),
                        idLocal: '',
                        idGymMachine: '',
                        date: dateComplete,
                        machineType: '',
                        gymZone: '',
                        description: '',
                        confirmation: true,
                        fullNameUser: user,
                        emailUser: response.data.email,
                        passwordUser: response.data.password,
                        nameLocal: '',
                        city: '',
                        gymMachine: '',
                        gymMachineSerialNumber: ''
                    }
                )
            }
        }

        loadUserById()
        
    }, [])

    useEffect(() => {
        async function loadUserById() {
            const response = await getUserById(cookies.get('id', {path: "/"}))
            const user = response.data.name + ' ' + response.data.lastName

            if (response.status === 200) {
                setFormMachValues({...formMachValues, fullNameUser: user, emailUser: response.data.email, passwordUser: response.data.password})
            }
        }

        loadUserById()
        
    }, [])

    useEffect(() => {
        async function loadLocalById() {
            const response = await getLocalById(formMachValues.idLocal)

            if (response.status === 200) {
                setFormMachValues({...formMachValues, nameLocal: response.data.namegym, city: response.data.city})
            }
        }

        loadLocalById()
        
    }, [formMachValues.idLocal])

    useEffect(() => {
        async function loadgymMachineById() {
            const response = await getGymMachineById(formMachValues.idGymMachine)
            
            if (response.status === 200) {
                setFormMachValues({...formMachValues, gymMachine: response.data.name, gymMachineSerialNumber: response.data.serialNumber})
            }
        }

        loadgymMachineById()
        
    }, [formMachValues.idGymMachine])

    useEffect(() => {
        async function loadGymMachinesByIdLocal() {
            const gymMachines = await getGymMachinesByIdLocal(formMachValues.idLocal)
            setGymMachineValues(gymMachines)
        }
        loadGymMachinesByIdLocal()
    }, [formMachValues.idLocal])

    useEffect(() => {
        async function loadGyms() {
            const response = await getLocals()

            if (response.status === 200) {
                setGyms(response.data)
                
            }
        }

        loadGyms()
        
    }, [])

    useEffect(() => {
        if (typeof cookies.get('userName') === 'undefined' || cookies.get('type', {path: "/"}) !== '2') {
            window.location.href = "./"
        }
    })

    return (
        <>
            <Box
                 class="boxMach"
                 sx={{
                   justifyContent: 'center',
                   display: 'flex',
                   alignItems: 'center',
                   flexDirection: 'column',
                   padding:'1vh',
                   background: '#fff',  /* fallback for old browsers */
                   // borderRadius: '10px',
                   boxShadow: '1px 1px 20px #333',
                 }}
            >
                <NavBarLeaderGym />
                {/* <br/><br/> */}
                <FormsMach handleSubmit={handleSubmit} gymMachineValues={gymMachineValues} gyms={gyms} formMachValues={formMachValues} setFormMachValues={setFormMachValues} />
                {/* <br/> */}
                <ModalDataRegistered modal={modal} setModal={setModal} message="Solicitud realizada correctamente" />
            </Box>
        
        </>
    )
}
export default FormMachLayout;