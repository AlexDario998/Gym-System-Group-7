import FormAddTIDevice from './FormAddTIDevice'
import {saveTIDevice} from '../services/tiDeviceAxios'
import '../index.css';
import {Box} from "@mui/material"

const TIDeviceLayout = () => {

    const handleSubmit = (data) => {
        saveTIDevice(data)
    }

    return (
        <>
            <Box
                class = "imgTIDevice"
            >
                <br/><br/>
                <FormAddTIDevice handleSubmit={handleSubmit}/>
                <br/>
            </Box>
        
        </>
    )
}
export default TIDeviceLayout