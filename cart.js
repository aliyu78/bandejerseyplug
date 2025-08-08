window.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const list = document.getElementById("cartItems");
  list.innerHTML = "";

  cart.forEach((item, i) => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${item.img}" />
      <h3>${item.name}</h3>
      <p>${item.price}</p>
      <button onclick="removeItem(${i})">Remove</button>
    `;
    list.appendChild(div);
  });
});

function removeItem(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

function checkoutCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (!cart.length) return alert("Cart is empty");

  const summary = cart.map(
    (item, i) => `${i + 1}. ${item.name} - ${item.price}`
  ).join("\n");

  const message = encodeURIComponent(`Hello, I'd like to order:\n${summary}`);
  const phone = "2347012345678"; // change to your WhatsApp number

  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");

  // Uncomment to clear cart after sending
  // localStorage.removeItem("cart");
}
