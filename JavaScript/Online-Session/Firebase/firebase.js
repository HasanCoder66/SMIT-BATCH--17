// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection, query, where, getDocs
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

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

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const signupHandler = (username, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      console.log("signup ker raha hon ==>");
      const user = userCredential.user;
      console.log("signup user ==>", user);

      addUserData(
        {
          username: username,
          email: email,
          password: password,
        },
        user.uid,
      )

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
      console.log(uid)
      // console.log(user, "mera pooora user hai ye ==>");
      // console.log("Curretn User Id ==>", uid);
      // ...
      //   console.log(window.location.pathname)
      // if (window.location.pathname !== "/dashboard.html") {
      //   window.location.pathname = "/dashboard.html";
      // }
    } else {
      // window.location.href = "/login.html"
      if (
        window.location.pathname == "/login.html" ||
        window.location.pathname == "/index.html"
      ) {
        console.log("login or signup ke page mai hon ");
      } else {
        window.location.pathname = "/login.html";
      }
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

const addUserData = async (userDetails, uniqueId) => {
  try {
    // Add a new document in collection "cities"
    console.log("dataa add ker rahaa hon ==>");
    await setDoc(doc(db, "users", uniqueId), userDetails);

    console.log("dataa add kerdiya db mai ==>");
  } catch (error) {
    console.log(error, "Mera code phat giya =>");
  }
};

const getSingleUser = async (uniqueId) => {

const docRef = doc(db, "users", uniqueId);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
}

const getMultipleUsers = async () => {
let users = []
const q = query(collection(db, "users"));

const querySnapshot = await getDocs(q);

querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  users.push(doc.data())
  // console.log(users, "Users ka array hai ==>")
  // console.log(doc.id, " => ", doc.data());
});
return users
}


export {
  signupHandler,
  loginHandler,
  getCurrentUser,
  logoutHandler,
  addUserData,
  getSingleUser,
  getMultipleUsers
};
