import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js"

const firebaseConfig = {
    apiKey: "AIzaSyBJ-v-UuoZFVO--nqyiHGY6iC8njeLaZxE",
    authDomain: "test-code-3c187.firebaseapp.com",
    projectId: "test-code-3c187",
    storageBucket: "test-code-3c187.firebasestorage.app",
    messagingSenderId: "452212989448",
    appId: "1:452212989448:web:42db6e28339105c5f53bbd",
    measurementId: "G-F172XVDX11"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
sumbit.addEventListener("click", function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value
    console.log(email, password);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...

            alert("SHOP NOW!");
            window.location.href = "success.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
})