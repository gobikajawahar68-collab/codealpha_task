const products = [
  { name: "Laptop", description: "Powerful laptop", price: 500 },
  { name: "Phone", description: "Smartphone with great camera", price: 300 },
  { name: "Headphones", description: "Noise-cancelling headphones", price: 100 }
];

function loadProducts() {
  const container = document.getElementById("products");
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<h3>${p.name}</h3><p>${p.description}</p><p>Price: $${p.price}</p>`;
    container.appendChild(div);
  });
}

loadProducts();
