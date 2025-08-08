document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("productList");
  const searchInput = document.getElementById("searchInput");

  function load() {
    const jerseys = JSON.parse(localStorage.getItem("jerseys")) || [];
    list.innerHTML = "";
    jerseys.forEach((j, i) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = \`
        <img src="\${j.img}">
        <h3>\${j.name}</h3>
        <p>\${j.price}</p>
        <p><button onclick="addToCart(\${i})">Add to Cart</button></p>
        <a href="https://wa.me/2347048692036?text=I want to order \${j.name} for \${j.price}" target="_blank">WhatsApp Order</a>
      \`;
      list.appendChild(card);
    });
  }

  window.addToCart = function(index) {
    const jerseys = JSON.parse(localStorage.getItem("jerseys")) || [];
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(jerseys[index]);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
  };

  searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();
    document.querySelectorAll(".product-card").forEach(card => {
      card.style.display = card.innerText.toLowerCase().includes(term) ? "block" : "none";
    });
  });

  load();
});