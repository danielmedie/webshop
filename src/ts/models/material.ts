import { Product } from "./Product";

let painting1 = {
    title: "Syntetiska penslar bundle",
    description: "Eaque, consequuntur a expedita odit vero blanditiis autem explicabo nisi.",
    price: 300,
    imgURL: "https://i.imgur.com/4KpavDq.jpg"
};

let painting2 = {
    title: "En sommardröm",
    description: "Eaque, consequuntur a expedita odit vero blanditiis autem explicabo nisi",
    price: 2600,
    imgURL: "https://i.imgur.com/qVZbRew.jpg"
};




let products: Product[] = [painting1]

let section: HTMLDivElement = document.getElementById('new-in__container') as HTMLDivElement
let selectionDesktop: HTMLDivElement = document.getElementById('new-in__container__desktop') as HTMLDivElement


for (let i = 0; i < products.length; i++) {

    let art: HTMLDivElement = document.createElement('div')
    let pTitle: HTMLParagraphElement = document.createElement('p')
    let img: HTMLImageElement = document.createElement('img')
    let pDescription: HTMLParagraphElement = document.createElement('p')
    let pPrice: HTMLParagraphElement = document.createElement('p')
    let button: HTMLButtonElement = document.createElement('button')


    art.appendChild(pTitle)
    art.appendChild(img)
    art.appendChild(pDescription)
    art.appendChild(pPrice)
    art.appendChild(button)


    section.appendChild(art)
    // selectionDesktop.appendChild(art)
    button.innerHTML = 'Köp'
    button.className = 'shop-items-button'

    art.className = 'new-in__container__box'
    pTitle.className = 'new-in__container__box__title'
    img.className = 'new-in__container__box__image'
    pDescription.className = 'new-in__container__box__description'
    pPrice.className = 'new-in__container__box__price'

    pTitle.innerHTML = products[i].title;
    img.src = products[i].imgURL;
    img.alt = "Product image";
    pDescription.innerHTML = products[i].description;
    pPrice.innerHTML = products[i].price.toString() + ' kr';

}

/*-----------------------------------------------remove--------------------------------------------------------------*/


let removeCartItems : HTMLCollection = document.getElementsByClassName('remove-item-btn') as HTMLCollection


for (let i = 0; i < removeCartItems.length; i++) {
    let remove = removeCartItems[i];
    remove.addEventListener('click', function (event) {
        let buttonClicked = event.target
        // buttonClicked.parent
    })
}