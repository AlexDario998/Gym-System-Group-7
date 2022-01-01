import axios from 'axios'
import Cookies from 'universal-cookie/es6'

const cookies = new Cookies()
const baseUrl = 'http://localhost:3000'

export function checkLogin(loginValues) {

    const response =  axios.get(`${baseUrl}/users`)
    .then(response => {
        const data = response.data;
        var dataLogin = null;

        for (var i=0; i<data.length; i++) {
            if (data[i].userName === loginValues.userName && data[i].password === loginValues.password) {
                dataLogin = data[i]
                break
            }
        }
        
        if (dataLogin !== null) {
            cookies.set('id', dataLogin.id, {path: "/"})
            cookies.set('name', dataLogin.name, {path: "/"})
            cookies.set('lastName', dataLogin.lastName, {path: "/"})
            cookies.set('userName', dataLogin.userName, {path: "/"})
            cookies.set('idCard', dataLogin.idCard, {path: "/"})
            cookies.set('email', dataLogin.email, {path: "/"})
            cookies.set('gym', dataLogin.gym, {path: "/"})
            cookies.set('type', dataLogin.type, {path: "/"})

            window.alert(`Bienvenido ${dataLogin.name} ${dataLogin.lastName}`)

            switch (dataLogin.type) {
                case 1:
                    window.location.href = "./reportLocals"
                    break

                case 2:

                    break

                case 3:

                    break

                case 4:

                    break
            }

        }else {
          window.alert('Usuario o contraseña incorrectos')
        }

    }).catch(error => {
        console.log(error)
    })
    
}

