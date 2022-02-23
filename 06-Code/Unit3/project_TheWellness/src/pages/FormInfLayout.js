import FormsInf from '../components/FormsInf'
import {getLocals, getLocalById} from '../services/localAxios'
import {getUserById} from '../services/userAxios'
import {saveRinfrastructure} from '../services/repairInfrastructuresRequestAxios'
import '../index.css';
import {Box} from "@mui/material"
import NavBarLeaderGym from '../components/NavBarLeaderGym'
import Cookies from 'universal-cookie/es6';
import {useEffect, useState} from 'react';
import ModalDataRegistered from '../components/ModalDataRegistered';
import BreadcrumbsLeaderThreeLayers1 from '../components/BreadcrumbsLeaderThreeLayers1'

const cookies = new Cookies()

const FormInfLayout = () => {

    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const dateComplete = day + '/' + month + '/' + year

    const [gyms, setGyms] = useState([])
    const [formInfValues, setFormInfValues] = useState({
        idUser: cookies.get('id', {path: "/"}),
        idLocal: '',
        date: dateComplete,
        description: '',
        confirmation: true,
        fullNameUser: '',
        emailUser: '',
        passwordUser: '',
        nameLocal: '',
        city: ''
    })
    
    const [modal, setModal] = useState(false)

    async function handleSubmit(data) {
        const response = await saveRinfrastructure(data,formInfValues,setFormInfValues)

        if (response.status == 200) {
            setModal(true);
            
        }
    }

    useEffect(() => {
        async function loadUserById() {
            const response = await getUserById(cookies.get('id', {path: "/"}))
            const user = response.data.name + ' ' + response.data.lastName

            if (response.status === 200) {
                setFormInfValues(
                    {
                        idUser: cookies.get('id', {path: "/"}),
                        idLocal: '',
                        date: dateComplete,
                        description: '',
                        confirmation: true,
                        fullNameUser: user,
                        emailUser: response.data.email,
                        passwordUser: response.data.password,
                        nameLocal: '',
                        city: ''
                    }
                )
            }
        }

        loadUserById()
        
    }, [formInfValues.fullNameUser])

    useEffect(() => {
        async function loadLocalById() {
            const response = await getLocalById(formInfValues.idLocal)

            if (response.status === 200) {
                setFormInfValues({...formInfValues, nameLocal: response.data.namegym, city: response.data.city})
                
            }
        }

        loadLocalById()
        
    }, [formInfValues.idLocal])

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
                class = "boxInfra"
            >
                <NavBarLeaderGym />
                <BreadcrumbsLeaderThreeLayers1 breadcrumb1="Página principal" breadcrumb2="Crear Solicitudes" breadcrumb3= "Infraestructura Solicitud de Arreglo"/>
                <br/><br/>
                <FormsInf handleSubmit={handleSubmit} gyms={gyms} formInfValues={formInfValues} setFormInfValues={setFormInfValues} />
                <br/>
                <ModalDataRegistered modal={modal} setModal={setModal} message="Solicitud realizada correctamente" />
            </Box>
        
        </>
    )
}
export default FormInfLayout