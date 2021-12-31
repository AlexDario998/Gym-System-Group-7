import axios from 'axios'
import FormAddLocal from '../components/FormAddLocal'

const baseUrl = 'http://localhost:3000'

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