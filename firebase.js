<!-- firebase.js -->
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js"></script>
<script>
  const firebaseConfig = {
    apiKey: "AIzaSyDlK0m-RH1tHUUqiVejfKDKl216nMCZC7s",
    authDomain: "bandejerseyplug.firebaseapp.com",
    projectId: "bandejerseyplug",
    storageBucket: "bandejerseyplug.appspot.com",
    messagingSenderId: "287861270979",
    appId: "1:287861270979:web:28b4cb0f3359d457aab576"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Make auth available globally
  window.firebaseAuth = firebase.auth();
</script>
