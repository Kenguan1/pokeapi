//CAMBIAR LA INFO DENTRO DE firebaseConfig CON TU DATA

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "tuKEY",
  authDomain: "reactauth-afd31.firebaseapp.com",
  projectId: "reactauth-afd31",
  storageBucket: "reactauth-afd31.appspot.com",
  messagingSenderId: "111",
  appId: "111"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
