window.addEventListener('DOMContentLoaded', () => {
  const stored = localStorage.getItem("loggedIn");

  if (stored !== "true") {
    document.getElementById("addForm").style.display = "none";
  } else {
    document.getElementById("addForm").style.display = "block";
    document.getElementById("email").style.display = "none";
    document.getElementById("password").style.display = "none";
    document.querySelector("button[onclick='login()']").style.display = "none";
    document.getElementById("logoutBtn").style.display = "block";
    renderJerseys();
  }

  window.login = () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "admin@bandeplug.com" && password === "Aliyu@123") {
      localStorage.setItem("loggedIn", "true");
      location.reload();
    } else {
      alert("Incorrect credentials!");
    }
  };

  window.logout = () => {
    localStorage.removeItem("loggedIn");
    location.reload();
  };

  window.addJersey = () => {
    const name = document.getElementById("jerseyName").value;
    const price = document.getElementById("jerseyPrice").value;
    const img = document.getElementById("jerseyImg").value;
    const team = document.getElementById("jerseyTeam").value;

    if (!name || !price || !img || !team) {
      return alert("Please fill all fields");
    }

    const jerseys = JSON.parse(localStorage.getItem("jerseys")) || [];
    jerseys.push({ name, price, img, team });
    localStorage.setItem("jerseys", JSON.stringify(jerseys));
    renderJerseys();
  };

  window.removeJersey = (index) => {
    const jerseys = JSON.parse(localStorage.getItem("jerseys")) || [];
    jerseys.splice(index, 1);
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
        <img src="${j.img}" />
        <h3>${j.name}</h3>
        <p>${j.price}</p>
        <button onclick="removeJersey(${i})">🗑 Remove</button>
      `;
      list.appendChild(div);
    });
  };
});
