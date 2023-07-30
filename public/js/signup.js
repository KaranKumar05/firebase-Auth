import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

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
    console.log(app);



    //----- New Registration code start	  
    document.getElementById("register").addEventListener("click", ()=> {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        //For new registration
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                alert("Registration successfully!!");
                window.location.href = "./page/index.html"; 
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorMessage);
                alert(error);
            });
    });
    //----- End

    //----- Login code start	  
    