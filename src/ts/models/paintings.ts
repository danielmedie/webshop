import { cart, printCart } from "../addToCart";
import { CartItem } from "./CartItem";
import { Product } from "./Product";



let painting2 = {
    title: "En sommardröm",
    description: "Eaque, consequuntur a expedita odit vero blanditiis autem explicabo nisi",
    price: 2600,
    imgURL: "https://i.imgur.com/qVZbRew.jpg"
};

let painting3 = {
    title: "Blommor",
    description: "Architecto minus laudantium consequatur quisquam accusantium voluptates hic quas aspernatur consectetur error!",
    price: 300,
    imgURL: "https://i.imgur.com/etBrsnr.jpg"
};
let painting4 = {
    title: "Earth",
    description: "Architecto minus laudantium consequatur quisquam accusantium voluptates hic quas aspernatur consectetur error!",
    price: 1900,
    imgURL: "https://i.imgur.com/Odg2LBb.jpg"
};
let painting5 = {
    title: "Cold sky",
    description: "Architecto minus laudantium consequatur quisquam accusantium voluptates hic quas aspernatur consectetur error!",
    price: 350,
    imgURL: "https://i.imgur.com/ptvOZZj.jpg"
};

let painting6 = {
    title: "Kyssen",
    description: "Architecto minus laudantium consequatur quisquam accusantium voluptates hic quas aspernatur consectetur error!",
    price: 8800,
    imgURL: "https://i.imgur.com/pTsJGO1.jpg"
};
let painting7 = {
    title: "Mona Lisa",
    description: "Architecto minus laudantium consequatur quisquam accusantium voluptates hic quas aspernatur consectetur error!",
    price: 25000,
    imgURL: "https://i.imgur.com/PMhRVTo.jpg"
};

let painting8 = {
    title: "Summer in Italy",
    description: "Architecto minus laudantium consequatur quisquam accusantium voluptates hic quas aspernatur consectetur error!",
    price: 900,
    imgURL: 'https://i.imgur.com/HXCuzXZ.jpg'
};



let products: Product[] = [painting2, painting3, painting4, painting5, painting6 ,painting7, painting8];

let section: HTMLTableSectionElement = document.getElementById(
    "new-in__container"
  ) as HTMLTableSectionElement;


for (let i = 0; i < products.length; i++) {

    let art: HTMLDivElement = document.createElement('div')
    let pTitle: HTMLParagraphElement = document.createElement('p')
    let img: HTMLImageElement = document.createElement('img')
    let pDescription: HTMLParagraphElement = document.createElement('p')
    let pPrice: HTMLParagraphElement = document.createElement('p')
    let buyButton: HTMLButtonElement = document.createElement("button");
    
    section.appendChild(art)
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
      console.log(art);
}

