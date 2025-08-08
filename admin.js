import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const db = window.firebaseDB;

// DOM references
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const addForm = document.getElementById("addForm");
const adminList = document.getElementById("adminList");

// Temporary password login (local only)
const ADMIN_EMAIL = "admin@bandeplug.com";
const ADMIN_PASSWORD = "aliyu7#@";

// ------------------- LOGIN -------------------
window.login = function () {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    localStorage.setItem("isAdmin", "true");
    alert("Login successful");
    showAdminPanel();
    loadJerseys();
  } else {
    alert("Invalid credentials");
  }
};

// ------------------- LOGOUT -------------------
window.logout = function () {
  localStorage.removeItem("isAdmin");
  location.reload();
};

// ------------------- ON LOAD -------------------
document.addEventListener("DOMContentLoaded", () => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  if (isAdmin) {
    showAdminPanel();
    loadJerseys();
  }
});

// ------------------- SHOW PANEL -------------------
function showAdminPanel() {
  if (addForm) {
    addForm.style.display = "block";
  }
}

// ------------------- ADD JERSEY -------------------
window.addJersey = async function () {
  const name = document.getElementById("jerseyName").value;
  const price = document.getElementById("jerseyPrice").value;
  const img = document.getElementById("jerseyImg").value;
  const team = document.getElementById("jerseyTeam").value;

  if (!name || !price || !img || !team) {
    alert("Please fill in all fields");
    return;
  }

  try {
    await addDoc(collection(db, "jerseys"), {
      name,
      price,
      img,
      team
    });
    alert("Jersey added!");
    loadJerseys();
  } catch (err) {
    console.error("Error adding jersey:", err);
    alert("Error adding jersey.");
  }
};

// ------------------- LOAD JERSEYS -------------------
async function loadJerseys() {
  adminList.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "jerseys"));
  querySnapshot.forEach((docSnap) => {
    const data = docSnap.data();

    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${data.img}" alt="${data.name}" />
      <h3>${data.name}</h3>
      <p>₦${data.price}</p>
      <button onclick="deleteJersey('${docSnap.id}')">Remove</button>
    `;

    adminList.appendChild(card);
  });
}

// ------------------- DELETE JERSEY -------------------
window.deleteJersey = async function (id) {
  try {
    await deleteDoc(doc(db, "jerseys", id));
    alert("Deleted successfully.");
    loadJerseys();
  } catch (err) {
    console.error("Delete error:", err);
    alert("Could not delete jersey.");
  }
};
