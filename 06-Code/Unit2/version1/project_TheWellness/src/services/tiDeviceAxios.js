import axios from 'axios'

const baseUrl = 'http://localhost:3001'

export async function getTIDevices(){
    try{
        const response = await axios({
            url: `${baseUrl}/timachines`,
            method: 'GET',
        })
        
        return response
  
    }catch(error){
      console.log(error)
    }
}

export async function getTIDeviceById(idTiDevice){
  try{
      const response = await axios({
          url: `${baseUrl}/timachines/${idTiDevice}`,
          method: 'GET',
      })
      
      return response

  }catch(error){
    console.log(error)
  }
}

export async function getTiDevicesByIdLocal(idLocal){
  try{
      const response = await axios({
          url: `${baseUrl}/timachines`,
          method: 'GET',
      })
      
      const data = response.data
      var dataTiDevices = []
      var j = 0

      for (var i=0; i<data.length; i++) {
          if (data[i].local === idLocal) {
            dataTiDevices[j] = data[i]
            j++
          }
      }
      return dataTiDevices
      

  }catch(error){
    console.log(error)
  }
}

export async function saveTIDevice(tiDeviceData, values, setValues){
  try{
      const response = await axios({
          url: `${baseUrl}/timachines`,
          method: 'POST',
          data: tiDeviceData,
      })

      setValues({name: '', serialNumber: '', brand: '',  local: '', owner: ''})

  }catch(error){
    console.log(error)
  }
}

export async function deleteTiDevice(idTiDevice){

  const response = await axios.delete(`${baseUrl}/timachines/${idTiDevice}`)
  .then(response => {
    window.alert('Registro eliminado')
    window.location.reload()
  })
  .catch(error => {
    console.log(error)
  })
}

export async function updateTiDevice(values){

  const response = await axios.put(`${baseUrl}/timachines/${values.id}`,{
    name: values.name,
    serialNumber: values.serialNumber,
    brand: values.brand,
    local: values.local,
    owner: values.owner
  })
  .then(response => {
    window.alert('Registro actualizado')
    window.location.reload()
  })
  .catch(error => {
    console.log(error)
  })
}