// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"

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
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getDatabase(app)
export const db = getFirestore(app)