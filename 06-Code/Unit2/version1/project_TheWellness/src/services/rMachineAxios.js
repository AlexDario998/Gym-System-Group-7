import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export async function getRmachine(){
  try{
      const response = await axios({
          url: `${baseUrl}/repair-request-gym-machines`,
          method: 'GET',
      })
      
      return response

  }catch(error){
    console.log(error)
  }
}

export async function saveRmachine(rmachineData, values, setValues){

  try{
    const response = await axios({
        url: `${baseUrl}/repair-request-gym-machines`,
        method: 'POST',
        data: rmachineData,
    })
    
    setValues({autor: '', local: '',serial:'',date:'',description:''})

  }catch(error){
    console.log(error)
    setValues({autor: '', local: '',serial:'',date:'',description:''})

  }
}