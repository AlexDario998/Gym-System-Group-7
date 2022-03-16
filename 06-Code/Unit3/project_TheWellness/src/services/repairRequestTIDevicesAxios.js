import axios from 'axios'
import Cookies from 'universal-cookie/es6'

const baseUrl = process.env.REACT_APP_BASE_URL;
const cookies = new Cookies()

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

export async function saveRsystems(data, values, setValues){
  try{
    const response = await axios({
      url: `${baseUrl}/repair-request-ti-devices`,
      method: 'POST',
      data: data,
    })
    
    setValues({...values,
      idLocal: '',
      idTIDevice: '',
      date: '',
      description: '',
      confirmation: true,
      fullNameUser: '',
      emailUser: '',
      passwordUser: '',
      nameLocal: '',
      city: '',
      tiDevice: '',
      tiDeviceSerialNumber: ''
    })

    return response

  }catch(error){
    console.log(error)

  }
}

export async function getReportsByState(state) {
  try {
    const response = await axios({
      url: `${baseUrl}/repair-request-ti-devices/${state}`,
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
      url: `${baseUrl}/repair-request-ti-devices-false/count`,
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
      url: `${baseUrl}/repair-request-ti-devices-true/count`,
      method: "GET",
    });
    
    return response

  } catch (error) {
    console.log(error);
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

export async function updateConfirmationTrue(data){
  const response = await axios.put(`${baseUrl}/repair-request-ti-devices/${data.id}`,{
    idUser: data.idUser,
    idLocal: data.idLocal,
    idTIDevice: data.idTIDevice,
    date: data.date,
    description: data.description,
    confirmation: true
  })
  .then(response => {
    window.alert('Solicitud Rechazada, Volver Hacerlo!')
    window.location.reload()
  })
  .catch(error => {
    console.log(error)
  })

  
}

