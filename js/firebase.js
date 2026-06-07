// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js"; // 🔥 INI YANG KURANG
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn1kK9yI3xdvS3_aOpCW1KDtQW2e7UBJU",
  authDomain: "teamsync-5e4c2.firebaseapp.com",
  projectId: "teamsync-5e4c2",
  storageBucket: "teamsync-5e4c2.firebasestorage.app",
  messagingSenderId: "242657589018",
  appId: "1:242657589018:web:850c959416531a4db35ea3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, "default");
export const auth = getAuth(app); // 🔥 INI YANG KURANG