  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import {
    getAuth,
    createUserWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

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
  const auth = getAuth()


var fullName = document.getElementById("fullname");
var contact = document.getElementById("contact");
var email = document.getElementById("email");
var password = document.getElementById("password");
var copassword = document.getElementById("copassword")
window.signup = function (e) {
if(password)

    if(fullName.value == "" || contact.value=="" || email.value =="" || password.value ==""){
        alert("All Field Are Required")
    }
    if(password.value == copassword.value){
     
    }
    else{
        alert("Password Confirmation is Wrong")
        return false
    }

    e.preventDefault();
    var obj = {
      firstName: fullName.value,
      contact: contact.value,
      email: email.value,
      password: password.value,
    };
  
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success){
        window.location.replace('HTML/login.html')
      // console.log(success.user.uid)
      alert("signup successfully")
    })
    .catch(function(err){
      alert("Error in " + err)
    });
   console.log()
    console.log(obj);
  };