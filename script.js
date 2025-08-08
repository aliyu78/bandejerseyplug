window.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById("productList");
  const jerseys = JSON.parse(localStorage.getItem("jerseys")) || [];

  jerseys.forEach((j) => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${j.img}" />
      <h3>${j.name}</h3>
      <p>${j.price}</p>
      <button onclick="addToCart('${j.name}', '${j.price}', '${j.img}')">Add to Cart</button>
    `;
    list.appendChild(div);
  });
});

function addToCart(name, price, img) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price, img });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}
