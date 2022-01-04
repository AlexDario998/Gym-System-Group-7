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
    
    setValues({name:'', userName:'', email:'', password:'', idCard:'', gym:'', type:'',lastName:''})

  }catch(error){
    console.log(error)
    setValues({name:'', userName:'', email:'', password:'', idCard:'', gym:'', type:'',lastName:''})

  }
}