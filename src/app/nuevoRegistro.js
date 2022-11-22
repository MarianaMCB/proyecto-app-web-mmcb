// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getDatabase,set,ref } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
import { showMessage } from './showMessage.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBX1aPSekS3XNPbG-mqsk6woHD6xDJ0JrI",
authDomain: "apps-firebase-mmcb.firebaseapp.com",
projectId: "apps-firebase-mmcb",
storageBucket: "apps-firebase-mmcb.appspot.com",
messagingSenderId: "280752131838",
appId: "1:280752131838:web:074d9a2a0f1a3c31bd1faf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

submitData.addEventListener('click', (e) => {
    e.preventDefault()

    var email = document.getElementById('email').value;
    var password = document.getElementById('psw').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ... user.uid
            set(ref(database, 'users/' + user.uid), {
                email: email,
                password: password,
            })
                .then(() => {
                    // Data saved successfully!
                    showMessage("Usuario creado exitosamente");
                    window.location.assign("iniciosesion.html")
                })
                .catch((error) => {
                    // The write failed...
                    if (error.code === 'auth/email-already-in-use') {
                        showMessage('Lo sentimos, el correo ya se encuentra en uso', "error")
                    } else if (error.code === 'auth/invalid-email') {
                        showMessage('El correo ingresado es inválido', "error")
                    } else if (error.code === "auth/weak-password") {
                        showMessage('La constraseña es insegura', "error")
                    } else if (error.code) {
                        showMessage('Algo a ocurrido, por favor intentelo de nuevo', "error")
                    } 
                });
        })

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            showMessage('Error, por favor vuelva a intentarlo', "error");
        });
});