<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js"></script>
<script>
  const firebaseConfig = {
    apiKey: "AIzaSyDlK0m-RH1tHUUqiVejfKDKl216nMCZC7s",
    authDomain: "bandejerseyplug.firebaseapp.com",
    projectId: "bandejerseyplug",
    storageBucket: "bandejerseyplug.firebasestorage.app",
    messagingSenderId: "287861270979",
    appId: "1:287861270979:web:28b4cb0f3359d457aab576",
    measurementId: "G-WCBRL5M672"
  };

  firebase.initializeApp(firebaseConfig);
  window.firebaseAuth = firebase.auth();
</script>