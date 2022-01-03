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

export async function saveLocal(localData, values, setValues){

  try{
    const response = await axios({
        url: `${baseUrl}/gyms`,
        method: 'POST',
        data: localData,
    })
    
    setValues({namegym: '', city: ''})

  }catch(error){
    console.log(error)
    setValues({namegym: '', city: ''})

  }
}