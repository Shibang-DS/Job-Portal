// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWgUnZsum1mdI8B1f519sJaIMP30wkAG4",
  authDomain: "online-job-portal-1c40d.firebaseapp.com",
  projectId: "online-job-portal-1c40d",
  storageBucket: "online-job-portal-1c40d.appspot.com",
  messagingSenderId: "349110410249",
  appId: "1:349110410249:web:9e58497c5db9b546ea2cd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};