import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from "./firebase.js"
import { showMessage } from './showMessage.js'

const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value

    console.log(email, password)

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)

        showMessage("Bienvenido " + userCredentials.user.email)

    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            showMessage('Lo sentimos, el correo ya se encuentra en uso', "error")
        } else if (error.code === 'auth/invalid-email') {
            showMessage('El correo ingresado es inválido', "error")
        } else if (error.code === "auth/weak-password") {
            showMessage('La constraseña es insegura', "error")
        } else if (error.code) {
            showMessage('Algo a ocurrido, por favor intentelo de nuevo', "error")
        } 
    }

})