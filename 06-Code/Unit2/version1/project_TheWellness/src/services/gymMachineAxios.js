import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export async function saveGymMachine(machineData, values, setValues){

    try{
        const response = await axios({
            url: `${baseUrl}/machines`,
            method: 'POST',
            data: machineData,
        })
      
        setValues(
            {
                name: '',
                gym: '',
                serialNumber: '',
                mark: '',
                zone: ''
            }
        )
  
    }catch(error){
        console.log(error)
        setValues(
            {
                name: '',
                gym: '',
                serialNumber: '',
                mark: '',
                zone: ''
            }
        )
    }
}