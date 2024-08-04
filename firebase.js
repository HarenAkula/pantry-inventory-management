// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0CYmWHI1e-fKQQ4k2K3CAH1KqX571GdI",
  authDomain: "pantry-inventory-management.firebaseapp.com",
  projectId: "pantry-inventory-management",
  storageBucket: "pantry-inventory-management.appspot.com",
  messagingSenderId: "683690173340",
  appId: "1:683690173340:web:a6d2b26c65d7f35de5de59",
  measurementId: "G-CSDBKBVRYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore= getFirestore(app);

export {firestore}