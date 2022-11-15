import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from "./firebase.js"
import { showMessage } from './showMessage.js'

const signInForm = document.querySelector('#login-form')

signInForm.addEventListener('submit', async e => {
    e.preventDefault()

    const email = signInForm['login-email'].value;
    const password = signInForm['login-password'].value;

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(credentials)

        showMessage('Bienvenido ' + credentials.user.email)

    } catch (error) {
        if (error.code === 'auth/wrong-password') {
            showMessage('Correo o contraseña incorrecta', "error")
            console.log(error)
        } else if (error.code === 'auth/user-not-found') {
            showMessage('Usuario no encontrado', "error")
        } else {
            showMessage('Algo a ocurrido, por favor intentelo de nuevo', "error")
        }
    }
})
