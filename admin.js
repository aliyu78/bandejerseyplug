window.addEventListener('DOMContentLoaded', () => {
  const auth = window.firebaseAuth;

  window.signup = async () => {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    try {
      await auth.createUserWithEmailAndPassword(email, pass);
      alert("Admin created!");
    } catch (e) {
      alert("Signup failed: " + e.message);
    }
  };

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
