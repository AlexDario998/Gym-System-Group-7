import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export async function getReports(){
  try{
      const response = await axios({
          url: `${baseUrl}/repair-request-infrastructures`,
          method: 'GET',
      })
      
      return response

  }catch(error){
    console.log(error)
  }
}

