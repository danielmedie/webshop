import { Product } from "./Product";
import { cart, printCart } from "../addToCart";
import { CartItem } from "./CartItem";

let painting1 = {
    title: "Syntetiska penslar bundle",
    description: "Eaque, consequuntur a expedita odit vero blanditiis autem explicabo nisi.",
    price: 300,
    imgURL: "https://i.imgur.com/4KpavDq.jpg"
};



let products: Product[] = [painting1]

let section: HTMLDivElement = document.getElementById('products__container') as HTMLDivElement


for (let i = 0; i < products.length; i++) {
    section.innerHTML = ""
    let art: HTMLDivElement = document.createElement('div')
    let pTitle: HTMLParagraphElement = document.createElement('p')
    let img: HTMLImageElement = document.createElement('img')
    let pDescription: HTMLParagraphElement = document.createElement('p')
    let pPrice: HTMLParagraphElement = document.createElement('p')
let buyButton: HTMLButtonElement = document.createElement("button");

    art.appendChild(pTitle)
    art.appendChild(img)
    art.appendChild(pDescription)
    art.appendChild(pPrice)
    art.appendChild(buyButton)


    section.appendChild(art)
    buyButton.innerHTML = 'Köp'
    buyButton.className = 'shop-items-button'

    art.className = 'products__container__box'
    pTitle.className = 'products__container__box__title'
    img.className = 'products__container__box__image'
    pDescription.className = 'products__container__box__description'
    pPrice.className = 'products__container__box__price'

    pTitle.innerHTML = products[i].title;
    img.src = products[i].imgURL;
    img.alt = "Product image";
    pDescription.innerHTML = products[i].description;
    pPrice.innerHTML = products[i].price.toString() + ' kr';

    buyButton.addEventListener("click", () => {
        for (let match = 0; match < cart.length; match++) {
          if (cart[match].product.title === products[i].title) {
            cart[match].amount++;
            printCart();
            localStorage.setItem("CartList", JSON.stringify(cart));
            return;
          }
        }
        cart.push(new CartItem(products[i], 1));
        printCart();
        localStorage.setItem("CartList", JSON.stringify(cart));
      });
}