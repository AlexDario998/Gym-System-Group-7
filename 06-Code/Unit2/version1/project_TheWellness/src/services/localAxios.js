import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export async function getLocals(){
  try{
      const response = await axios({
          url: `${baseUrl}/gyms`,
          method: 'GET',
      })
      
      return response

  }catch(error){
    console.log(error)
  }
}

export async function saveLocal(localData){
  try{
      const response = await axios({
          url: `${baseUrl}/gyms`,
          method: 'POST',
          data: localData,
      })
      
      return response

  }catch(error){
    console.log(error)
  }
}