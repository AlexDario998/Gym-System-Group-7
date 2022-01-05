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

export async function saveRinfrastructure(
  rinfrastructureData,
  values,
  setValues
) {
  try {
    const response = await axios({
      url: `${baseUrl}/repair-request-infrastructures`,
      method: "POST",
      data: rinfrastructureData,
    });

    setValues({ autor: "", local: "", date: "", description: "" });
  } catch (error) {
    console.log(error);
    setValues({ autor: "", local: "", date: "", description: "" });
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
    console.log(dataReports)
    return dataReports;
  } catch (error) {
    console.log(error);
  }
}
