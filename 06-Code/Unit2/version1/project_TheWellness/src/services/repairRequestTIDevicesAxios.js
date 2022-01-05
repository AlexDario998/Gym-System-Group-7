import axios from 'axios'
import Cookies from 'universal-cookie/es6'

const baseUrl = 'http://localhost:3000'
const cookies = new Cookies()

export async function getReports(){
  try{
      const response = await axios({
          url: `${baseUrl}/repair-request-ti-devices`,
          method: 'GET',
      })
      
      return response

  }catch(error){
    console.log(error)
  }
}
export async function deleteRequest(idRequest){

  const response = await axios.delete(`${baseUrl}/repair-request-ti-devices/${idRequest}`)
  .then(response => {
    window.alert('Registro eliminado')
    window.location.reload()
  })
  .catch(error => {
    console.log(error)
  })

  
}

export async function saveRsystems(data, values, setValues){
  console.log(data)
  try{
    const response = await axios({
        url: `${baseUrl}/repair-request-ti-devices`,
        method: 'POST',
        data: data,
    })
    
    setValues({idLocal: '', idTIDevice:'', description:''})

  }catch(error){
    console.log(error)
    setValues({idLocal: '', idTIDevice:'', description:''})

  }
}


