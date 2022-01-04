import axios from 'axios'

const baseUrl = 'http://localhost:3000'

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


