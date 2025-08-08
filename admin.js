let isLoggedIn = false;
window.addEventListener('DOMContentLoaded', () => {
  const auth = window.firebaseAuth;

  window.login = async function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      alert("Login successful!");
      document.getElementById('addForm').style.display = 'block';
      renderJerseys();
      isLoggedIn = true;
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  window.signup = async function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      alert("Admin account created!");
    } catch (error) {
      alert("Signup failed: " + error.message);
    }
  };

  window.addJersey = function () {
    const name = document.getElementById('jerseyName').value;
    const price = document.getElementById('jerseyPrice').value;
    const img = document.getElementById('jerseyImg').value;
    const team = document.getElementById('jerseyTeam').value;
    if (!name || !price || !img || !team) return alert("All fields required");
    const jerseys = JSON.parse(localStorage.getItem("jerseys")) || [];
    jerseys.push({ name, price, img, team });
    localStorage.setItem("jerseys", JSON.stringify(jerseys));
    renderJerseys();
  };

  window.removeJersey = function (index) {
    const jerseys = JSON.parse(localStorage.getItem("jerseys")) || [];
    jerseys.splice(index, 1);
    localStorage.setItem("jerseys", JSON.stringify(jerseys));
    renderJerseys();
  };

  window.renderJerseys = function () {
    const container = document.getElementById('adminList');
    const jerseys = JSON.parse(localStorage.getItem('jerseys')) || [];
    container.innerHTML = '';
    jerseys.forEach((j, i) => {
      const div = document.createElement('div');
      div.className = 'product-card';
      div.innerHTML = \`
        <img src="\${j.img}">
        <h3>\${j.name}</h3>
        <p>\${j.price}</p>
        <button onclick="removeJersey(\${i})">🗑 Remove</button>
      \`;
      container.appendChild(div);
    });
  };
});