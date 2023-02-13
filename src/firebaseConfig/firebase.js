// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRw9RCY3zk7vWLZ3Gi0R2K4wph-_j3q7I",
  authDomain: "clemenecommerce.firebaseapp.com",
  projectId: "clemenecommerce",
  storageBucket: "clemenecommerce.appspot.com",
  messagingSenderId: "785817157449",
  appId: "1:785817157449:web:c2c1115b1c675986aca498"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore (app)
