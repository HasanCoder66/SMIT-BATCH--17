// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPwojoR5IqwFJ3bwy0_qDRqNE5585Ps1E",
  authDomain: "smit-b-17.firebaseapp.com",
  projectId: "smit-b-17",
  storageBucket: "smit-b-17.firebasestorage.app",
  messagingSenderId: "714826926111",
  appId: "1:714826926111:web:86b3520ae954b6fff62d2a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const signupHandler = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      console.log("signup ker raha hon ==>");
      const user = userCredential.user;
      console.log("signup user ==>", user);

      setTimeout(() => {
        window.location.href = "/login.html"
      })
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, "Code phata ==> ");
      console.log(errorMessage, "Code phata ==> ");
      // ..
    });
};

const loginHandler = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Signin User ===> ", user);
      if (user) {
        setTimeout(() => {
          window.location.href = "/dashboard.html";
        }, 1000);
      }
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, "Error ayaa ==>");
      console.log(errorMessage, "Error ayaa ==>");
    });
};

const getCurrentUser = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(user, "mera pooora user hai ye ==>")
      console.log("Curretn User Id ==>", uid);
      // ...
      //   console.log(window.location.pathname)
      if (window.location.pathname !== "/dashboard.html") {
        window.location.href = "/dashboard.html";
      }
    } else {
            // window.location.href = "/login.html"

    }
  });
};

const logoutHandler = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("user Log out successfully ==>");
      setTimeout(() => {
        window.location.href = "/login.html";
      }, 1000);
    })
    .catch((error) => {
      // An error happened.
      console.log("error ayaa => ", error.code, error.message);
    });
};

export { signupHandler, loginHandler, getCurrentUser, logoutHandler };
