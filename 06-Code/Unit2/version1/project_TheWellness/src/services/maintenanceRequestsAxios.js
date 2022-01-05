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
    
    setValues({idLocal: '', idTIDevice:'', description:'', machineType: '', gymZone:''})

  }catch(error){
    console.log(error)
    setValues({idLocal: '', idTIDevice:'', description:'', machineType: '', gymZone:''})

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
