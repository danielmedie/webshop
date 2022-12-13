/** @format */

//This code will be translated to typeScript
let productsInCart = [];
const parentElement = document.querySelector("section");
const cartSumPrice = document.createElement("p");
const products = document.createElement("p");

const updateShoppingCartHTML = function () {
  if (productsInCart.length > 0) {
  } else {
    document.querySelector("checkoutBtn").classList.add("hidden");
    parentElement.innerHTML =
      "<h4 class='empty'>Your shopping cart is empty</h4>";
    cartSumPrice.innerHTML = "";
  }
};
function updateProductsInCart(product) {
  for (let i = 0; i < productsInCart.length; i++) {
    if (productsInCart[i].id == product.id) {
      productsInCart[i].count += 1;
      productsInCart[i].price =
        productsInCart[i].basePrice * productsInCart[i].count;
      return;
    }
  }
  productsInCart.push(product);
}
