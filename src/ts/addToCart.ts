import { CartItem } from "./models/CartItem";
import { Product } from "./models/Product";

export let cart: CartItem[] = [];

export function LoadToLS() {
  localStorage.setItem("CartList", JSON.stringify(cart));
}

let totalSum = 0;

let itemsPreview: HTMLDivElement = document.getElementById(
  "items-preview"
) as HTMLDivElement;
let shoppingCart: HTMLAnchorElement = document.getElementById(
  "cart"
) as HTMLAnchorElement;
let totalPrice: HTMLHeadingElement = document.getElementById(
  "totalPrice"
) as HTMLHeadingElement;

export const printCart = () => {
  if (itemsPreview) {
    itemsPreview.innerHTML = "";
  }
  LoadToLS();
  totalSum = 0;
  totalPrice.innerHTML = "";
  
  itemsPreview.innerHTML = "";
for (let i = 0; i < cart.length; i++) {
    //* skapar HTMLelement
    let imgWrapper: HTMLDivElement = document.createElement("div");
    let cartDiv: HTMLDivElement = document.createElement("div");
    let productImg: HTMLImageElement = document.createElement("img");
    let productTittle: HTMLHeadElement = document.createElement("h1");
    let productPrice: HTMLParagraphElement = document.createElement("p");

    let minusButton: HTMLButtonElement = document.createElement("button");

    let plusButton: HTMLButtonElement = document.createElement("button");
    let ButtonContainer: HTMLDivElement = document.createElement("div");

    let totalAmountOfProduct: HTMLParagraphElement =
      document.createElement("p");

    productTittle.innerHTML = cart[i].product.title;
    productImg.src = cart[i].product.imgURL;

    productPrice.innerHTML = cart[i].product.price + "kr";

    minusButton.innerHTML = '<i class="fa-solid fa-minus"></i>';
    plusButton.innerHTML = '<i class="fa-solid fa-plus"></i>';

    itemsPreview.appendChild(cartDiv);
    cartDiv.appendChild(imgWrapper);
    cartDiv.appendChild(productTittle);
    imgWrapper.appendChild(productImg);
    cartDiv.appendChild(productPrice);
    cartDiv.appendChild(ButtonContainer);

    ButtonContainer.appendChild(plusButton);
    ButtonContainer.appendChild(totalAmountOfProduct);
    ButtonContainer.appendChild(minusButton);

    cartDiv.className = "cartDiv";
    imgWrapper.className = "img-wrapper";
    productImg.className = "productImg"; 
    productTittle.className = "productTittle";

    // räknar ihop summan av alla produkter som finns i checkoutpagen
    console.log("Total summa:" + totalPrice.innerHTML);

    
    // räkna ihop total amount av en produkt i local Storage
    totalAmountOfProduct.innerHTML = cart[i].amount.toString();

    minusButton.addEventListener("click", () => {
      if (cart[i].amount === 1) {
        cart.splice(i, 1);
        printCart();
      } else {
        cart[i].amount--;
        printCart();
      }
    });
    plusButton.addEventListener("click", () => {
      cart[i].amount++;
      printCart();
    });

    totalSum += cart[i].product.price * cart[i].amount;
    
    totalPrice.innerHTML = "Att betala: " + totalSum.toString() + "kr";
  }
};

export function LoadFormLs() {
  let itemFromLs: string = localStorage.getItem("CartList") || "[]";
  let objectFromLs: CartItem[] = JSON.parse(itemFromLs);


  cart = objectFromLs.map((cart: CartItem) => {
    return new CartItem(
      new Product(
        cart.product.title,
        cart.product.description,
        cart.product.price,
        cart.product.imgURL
      ),
      cart.amount
    );
  });
}

LoadFormLs();