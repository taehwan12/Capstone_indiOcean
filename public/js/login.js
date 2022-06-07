import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getDataBase
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtxX9yy9wwNxz_bauidUEZJQiHvoyfwp4",
  authDomain: "indiocean-login.firebaseapp.com",
  databaseURL: "https://indiocean-login-default-rtdb.firebaseio.com",
  projectId: "indiocean-login",
  storageBucket: "indiocean-login.appspot.com",
  messagingSenderId: "691886584876",
  appId: "1:691886584876:web:58899e28cd5c70a2654d89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatBase(app);
const auth = getAuth();

signUp.addEventListener('click', (e) => {
  var name = document.getElementById('name').value;
  var artistName = document.getElementById('artistName').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert('Signed Up!');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('errorMessage');
      // ..
    });
});
