// Ganti isi firebaseConfig di bawah dengan konfigurasi Web App dari Firebase Console.
// Project Settings > General > Your apps > Web app > SDK setup and configuration > Config
// Firebase Storage TIDAK diperlukan oleh aplikasi versi ini.

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";

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
const requiredKeys = ["apiKey","authDomain","projectId","messagingSenderId","appId"];
export const firebaseReady = requiredKeys.every(key => firebaseConfig[key] && !String(firebaseConfig[key]).includes("GANTI_DENGAN"));
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
