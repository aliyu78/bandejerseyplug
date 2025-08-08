// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDlK0m-RH1tHUUqiVejfKDKl216nMCZC7s",
  authDomain: "bandejerseyplug.firebaseapp.com",
  projectId: "bandejerseyplug",
  storageBucket: "bandejerseyplug.firebasestorage.app",
  messagingSenderId: "287861270979",
  appId: "1:287861270979:web:28b4cb0f3359d457aab576",
  measurementId: "G-WCBRL5M672"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Make available globally
window.firebaseApp = app;
window.firebaseAuth = auth;
window.firebaseDB = db;
