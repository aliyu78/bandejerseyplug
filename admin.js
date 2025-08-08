const auth = window.firebaseAuth;
window.addEventListener('DOMContentLoaded', () => {
  const auth = window.firebaseAuth;

  window.login = async () => {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    try {
      await auth.signInWithEmailAndPassword(email, pass);
      document.getElementById("addForm").style.display = "block";
      renderJerseys();
      alert("Login successful!");
    } catch (e) {
      alert("Login failed: " + e.message);
    }
  };

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

  window.addJersey = () => {
    const name = document.getElementById("jerseyName").value;
    const price = document.getElementById("jerseyPrice").value;
    const img = document.getElementById("jerseyImg").value;
    const team = document.getElementById("jerseyTeam").value;
    if (!name || !price || !img || !team) return alert("Fill all fields");
    const jerseys = JSON.parse(localStorage.getItem("jerseys")) || [];
    jerseys.push({ name, price, img, team });
    localStorage.setItem("jerseys", JSON.stringify(jerseys));
    renderJerseys();
  };

  window.removeJersey = (i) => {
    const jerseys = JSON.parse(localStorage.getItem("jerseys")) || [];
    jerseys.splice(i, 1);
    localStorage.setItem("jerseys", JSON.stringify(jerseys));
    renderJerseys();
  };

  window.renderJerseys = () => {
    const list = document.getElementById("adminList");
    const jerseys = JSON.parse(localStorage.getItem("jerseys")) || [];
    list.innerHTML = "";
    jerseys.forEach((j, i) => {
      const div = document.createElement("div");
      div.className = "product-card";
      div.innerHTML = `
        <img src="${j.img}">
        <h3>${j.name}</h3>
        <p>${j.price}</p>
        <button onclick="removeJersey(${i})">🗑 Remove</button>
      `;
      list.appendChild(div);
    });
  };
});
