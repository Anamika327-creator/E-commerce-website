

let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
  alert("Item added to cart!");
}

  function scrollToDiv(id) {
    if (id) {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }
  }
