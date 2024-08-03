// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-jcY1k-p2KC2xNw4juM5q-LpCK5S834o",
  authDomain: "inventory-management-c4632.firebaseapp.com",
  projectId: "inventory-management-c4632",
  storageBucket: "inventory-management-c4632.appspot.com",
  messagingSenderId: "303710917871",
  appId: "1:303710917871:web:b387f85ae27cd3f7a1b71a",
  measurementId: "G-30PF9BK1NV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };