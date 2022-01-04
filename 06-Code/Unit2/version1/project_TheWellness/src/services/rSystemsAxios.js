import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export async function getRsystems(){
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

export async function saveRsystems(rsystemsData, values, setValues){

  try{
    const response = await axios({
        url: `${baseUrl}/repair-request-ti-devices`,
        method: 'POST',
        data: rsystemsData,
    })
    
    setValues({autor: '', local: '',serial:'',date:'',description:''})

  }catch(error){
    console.log(error)
    setValues({autor: '', local: '',serial:'',date:'',description:''})

  }
}