import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
import { auth, db } from './app/firebase.js'
import { loginCheck } from "./app/loginCheck.js"

import './app/signupForm.js'
import './app/signinForm.js'
import './app/logout.js'

auth.onAuthStateChanged(user =>{
    if (user) {
        const uid = user.uid;
        console.log('user logged in', user, uder.uid)
    } else {
        console.log('user logged out', user)
    }
})

//onAuthStateChanged(auth, async (user) => {
//    if (user) {
//        getDocs(collection)
//    } else {
//     
//    }
//   loginCheck(user)
//
//})
