import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export async function getUsers(){
  try{
      const response = await axios({
          url: `${baseUrl}/users`,
          method: 'GET',
      })
      
      return response

  }catch(error){
    console.log(error)
  }
}

export async function saveUser(userData, values, setValues){

  try{
    const response = await axios({
        url: `${baseUrl}/users`,
        method: 'POST',
        data: userData,
    })
    
    setValues({
      name: '',
      userName: '',
      lastName: '',
      password: '',
      idCard: '',
      email: '',
      type: 0,
      gym: ''

    })

  }catch(error){
    console.log(error)
    setValues({
      name: '',
      userName: '',
      lastName: '',
      password: '',
      idCard: '',
      email: '',
      type: 0,
      gym: ''

    })

  }
}

export async function deleteUser(user){

  const response = await axios.delete(`${baseUrl}/users/${user}`)
  .then(response => {
    window.alert('Registro eliminado')
    window.location.reload()
  })
  .catch(error => {
    console.log(error)
  })
}

export async function updateUser(values){

  const response = await axios.put(`${baseUrl}/users/${values.id}`,{
    name: values.name,
    userName: values.userName,
    lastName: values.lastName,
    password: values.password,
    idCard: values.idCard,
    email: values.email,
    type: values.type,
    gym: values.gym
  })
  .then(response => {
    window.alert('Registro actualizado')
    window.location.reload()
  })
  .catch(error => {
    console.log(error)
  })
}