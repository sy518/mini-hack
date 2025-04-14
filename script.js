// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js"
const firebaseConfig = {
    apiKey: "AIzaSyCzzxYn_w71v--iCgqH_DnHF_1w3WewnCA",
    authDomain: "hackaton-ab3d4.firebaseapp.com",
    projectId: "hackaton-ab3d4",
    storageBucket: "hackaton-ab3d4.firebasestorage.app",
    messagingSenderId: "658877111926",
    appId: "1:658877111926:web:74f99ae75b8543e4d7c957",
    measurementId: "G-QSB8HB4K9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
let sumbit = document.getElementById("btn");
sumbit.addEventListener("click", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value
    console.log(email, password);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            alert("login done");
            window.location.href = "login.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    
})