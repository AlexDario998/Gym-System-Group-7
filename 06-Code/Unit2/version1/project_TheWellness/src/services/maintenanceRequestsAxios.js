import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export async function getReports(){
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
export async function getReportsByConfirmationMachines() {
  try {
    const response = await axios({
      url: `${baseUrl}/repair-request-gym-machines`,
      method: "GET",
    });
    const data = response.data;
    var dataReports = [];
    var j = 0;
    for (var i = 0; i < data.length; i++) {
      if (data[i].confirmation === true) {
        dataReports[j] = data[i];
        j++;
      }
    }
    console.log(dataReports)
    return dataReports;
  } catch (error) {
    console.log(error);
  }
}
