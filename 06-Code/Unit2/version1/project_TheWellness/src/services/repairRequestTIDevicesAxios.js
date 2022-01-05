import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export async function getReports(){
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
export async function deleteRequest(idRequest){

  const response = await axios.delete(`${baseUrl}/repair-request-ti-devices/${idRequest}`)
  .then(response => {
    window.alert('Registro eliminado')
    window.location.reload()
  })
  .catch(error => {
    console.log(error)
  })

  
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

export async function getReportsByConfirmation() {
  try {
    const response = await axios({
      url: `${baseUrl}/repair-request-ti-devices`,
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

export async function updateConfirmation(data){
  const response = await axios.put(`${baseUrl}/repair-request-ti-devices/${data.id}`,{
    idUser: data.idUser,
    idLocal: data.idLocal,
    idTIDevice: data.idTIDevice,
    date: data.date,
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

