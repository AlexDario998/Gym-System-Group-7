import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export async function getRinfrastructure(){
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

export async function saveRinfrastructure(rinfrastructureData, values, setValues){

  try{
    const response = await axios({
        url: `${baseUrl}/repair-request-infrastructures`,
        method: 'POST',
        data: rinfrastructureData,
    })
    
    setValues({autor: '', local: '',date:'',description:''})

  }catch(error){
    console.log(error)
    setValues({autor: '', local: '',date:'',description:''})

  }
}