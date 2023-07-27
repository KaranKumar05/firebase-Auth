


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC6TjhU3oeaFPHXkiRTLyEQhsDDABSvpME",
    authDomain: "fir-auth-67736.firebaseapp.com",
    projectId: "fir-auth-67736",
    storageBucket: "fir-auth-67736.appspot.com",
    messagingSenderId: "973950528158",
    appId: "1:973950528158:web:daa7a703b45227fb8d698f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

// taking data from Form
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');

// Function for sorting of data 
window.signup = function (e) {
    e.preventDefault();
    let obj = {
        username: username.value,
        email: email.value,
        password: password.value
    }
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then(function (success) {
            alert("SignUp Successfully");
            window.location.href = "./page/index.html"; 
        })
        .catch(function (err) {
            alert("The Email Is already Registered");
        })
};
