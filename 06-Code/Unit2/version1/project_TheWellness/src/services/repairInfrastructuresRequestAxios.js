import axios from "axios";

const baseUrl = "http://localhost:3000";

export async function getReports() {
  try {
    const response = await axios({
      url: `${baseUrl}/repair-request-infrastructures`,
      method: "GET",
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function saveRinfrastructure(rinfrastructureData,values,setValues) {
  try {
    const response = await axios({
      url: `${baseUrl}/repair-request-infrastructures`,
      method: "POST",
      data: rinfrastructureData,
    });

    setValues({ idLocal: "", description: "" });
  } catch (error) {
    console.log(error);
    setValues({ idLocal: "", description: "" });
  }
}

export async function getReportsByConfirmation() {
  try {
    const response = await axios({
      url: `${baseUrl}/repair-request-infrastructures`,
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
  const response = await axios.put(`${baseUrl}/repair-request-infrastructures/${data.id}`,{
    idUser: data.idUser,
    idLocal: data.idLocal,
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
