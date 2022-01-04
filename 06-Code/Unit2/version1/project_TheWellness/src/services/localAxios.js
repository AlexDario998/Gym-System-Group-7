import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export async function getLocals(){
  try{
      const response = await axios({
          url: `${baseUrl}/gyms`,
          method: 'GET',
      })
      
      return response

  }catch(error){
    console.log(error)
  }
}

export async function saveLocal(localData, values, setValues){

  try{
    const response = await axios({
        url: `${baseUrl}/gyms`,
        method: 'POST',
        data: localData,
    })
    
    setValues({namegym: '', city: ''})

  }catch(error){
    console.log(error)
    setValues({namegym: '', city: ''})

  }
}

export async function deleteLocal(idLocal){

  const response = await axios.delete(`${baseUrl}/gyms/${idLocal}`)
  .then(response => {
    window.alert('Registro eliminado')
    window.location.reload()
  })
  .catch(error => {
    console.log(error)
  })

  
}

export async function updateLocal(values){

  const response = await axios.put(`${baseUrl}/gyms/${values.id}`,{
    namegym: values.namegym,
    city: values.city
  })
  .then(response => {
    window.alert('Registro actualizado')
    window.location.reload()
  })
  .catch(error => {
    console.log(error)
  })

  
}
