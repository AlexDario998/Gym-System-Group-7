import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL;

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
    console.log(rmachineData)
    setValues({idLocal: '', idGymMachine:'', description:'', machineType: '', gymZone:''})
    window.location.reload()

  }catch(error){
    console.log(error)
    setValues({idLocal: '', idGymMachine:'', description:'', machineType: '', gymZone:''})

  }
}

export async function getReportsByState(state) {
  try {
    const response = await axios({
      url: `${baseUrl}/repair-request-gym-machines/${state}`,
      method: "GET",
    });
    
    return response

  } catch (error) {
    console.log(error);
  }
}

export async function getNumberCompletedRequests() {
  try {
    const response = await axios({
      url: `${baseUrl}/repair-request-gym-machines-false/count`,
      method: "GET",
    });
    
    return response

  } catch (error) {
    console.log(error);
  }
}

export async function getNumberNoCompletedRequests() {
  try {
    const response = await axios({
      url: `${baseUrl}/repair-request-gym-machines-true/count`,
      method: "GET",
    });
    
    return response

  } catch (error) {
    console.log(error);
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

    return dataReports;
  } catch (error) {
    console.log(error);
  }
}
export async function updateConfirmation(data){
  console.log(data)
  const response = await axios.put(`${baseUrl}/repair-request-gym-machines/${data.id}`,{
    idUser: data.idUser,
    idLocal: data.idLocal,
    idGymMachine: data.idGymMachine,
    date: data.date,
    machineType: data.machineType,
    gymZone: data.gymZone,
    description: data.description,
    confirmation: false
  })
  .then(response => {
    window.alert('Solicitud completada')
    window.location.reload()
  })
  .catch(error => {
    console.log(error)
  })

  
}
