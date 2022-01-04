import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export async function getGymMachines(){
    try{
        const response = await axios({
            url: `${baseUrl}/machines`,
            method: 'GET',
        })
        
        return response
  
    }catch(error){
      console.log(error)
    }
}

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

export async function deleteGymMachine(idGymMachine){

    const response = await axios.delete(`${baseUrl}/machines/${idGymMachine}`)
    .then(response => {
      window.alert('Registro eliminado')
      window.location.reload()
    })
    .catch(error => {
      console.log(error)
    })
  
    
  }
  
  export async function updateGymMachine(values){
  
    const response = await axios.put(`${baseUrl}/machines/${values.id}`,{
        name: values.name,
        gym: values.gym,
        serialNumber: values.serialNumber,
        mark: values.mark,
        zone: values.zone
    })
    .then(response => {
      window.alert('Registro actualizado')
      window.location.reload()
    })
    .catch(error => {
      console.log(error)
    })
  
    
  }