document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("cartItems");

  function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    list.innerHTML = "";
    cart.forEach((item, i) => {
      const div = document.createElement("div");
      div.className = "product-card";
      div.innerHTML = \`
        <img src="\${item.img}">
        <h3>\${item.name}</h3>
        <p>\${item.price}</p>
      \`;
      list.appendChild(div);
    });
  }

  window.checkout = function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!cart.length) return alert("Your cart is empty.");
    const text = cart.map(c => \`\${c.name} - \${c.price}\`).join("%0A");
    window.open(\`https://wa.me/2347048692036?text=I'm ready to order:%0A\${text}\`);
  };

  loadCart();
});