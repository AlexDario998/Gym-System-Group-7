import axios from 'axios'

const baseUrl = 'http://localhost:3000'

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

export async function saveTIDevice(tiDeviceData){
  try{
      const response = await axios({
          url: `${baseUrl}/timachines`,
          method: 'POST',
          data: tiDeviceData,
      })

  }catch(error){
    console.log(error)
  }
}