window.addEventListener('DOMContentLoaded', () => {
  const auth = window.firebaseAuth;

  window.login = async () => {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    try {
      await auth.signInWithEmailAndPassword(email, pass);
      alert("Login successful!");
      document.getElementById("addForm").style.display = "block";
      renderJerseys();
    } catch (e) {
      alert("Login failed: " + e.message);
    }
  };
});
