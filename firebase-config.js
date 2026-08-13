// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6L79sJgPihMKzein-wAUDahldc-K3eAQ",
  authDomain: "rapot-kelas-vii-b.firebaseapp.com",
  projectId: "rapot-kelas-vii-b",
  storageBucket: "rapot-kelas-vii-b.firebasestorage.app",
  messagingSenderId: "514459569653",
  appId: "1:514459569653:web:c899425d7c009315a5a4bc",
  measurementId: "G-1ES24E72DV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);