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

export async function getGymMachineById(idGymMachine){
  try{
      const response = await axios({
          url: `${baseUrl}/machines/${idGymMachine}`,
          method: 'GET',
      })
      
      return response

  }catch(error){
    console.log(error)
  }
}


export async function getGymMachinesByIdLocal(idLocal){
  try{
      const response = await axios({
          url: `${baseUrl}/machines`,
          method: 'GET',
      })
      
      const data = response.data
      var dataGymMachines = []
      var j = 0

      for (var i=0; i<data.length; i++) {
          if (data[i].gym === idLocal) {
            dataGymMachines[j] = data[i]
            j++
          }
      }
      return dataGymMachines

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