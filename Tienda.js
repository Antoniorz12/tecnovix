function filtrarProductos() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const productos = document.querySelectorAll(".product-card");

  productos.forEach(card => {
    const texto = card.textContent.toLowerCase();
    card.style.display = texto.includes(input) ? "block" : "none";
  });
}
