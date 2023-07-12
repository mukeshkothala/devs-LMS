// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYF7L1uXIh63Zki9Co8FiVDiLy3Ap5c74",
  authDomain: "devrevtask2-lms.firebaseapp.com",
  databaseURL: "https://devrevtask2-lms-default-rtdb.firebaseio.com",
  projectId: "devrevtask2-lms",
  storageBucket: "devrevtask2-lms.appspot.com",
  messagingSenderId: "324632108353",
  appId: "1:324632108353:web:a1df2ea28bc0302c8815c0",
  measurementId: "G-Y8J7ZMNDT4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

var email = document.getElementById("email");
var password = document.getElementById("password");
window.login= function(e) {
  e.preventDefault();
  var obj = {
    email: email.value,
    password: password.value,
  };

  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      alert("Logged in Successfully");
      var aaaa =  success.user.uid;
      localStorage.setItem("uid", aaaa);
      console.log(aaaa);
      window.location.replace('LMS.html');
    })
    .catch(function (err) {
      alert("Login error: " + err);
    });

  console.log(obj);
};
