import { printCart } from "../addToCart";


let buyButton: HTMLButtonElement = document.getElementById(
  "btn-purchase"
) as HTMLButtonElement;

window.onload = () => {
  printCart();

  buyButton.addEventListener("click", () => {
    localStorage.clear();
  });
};
