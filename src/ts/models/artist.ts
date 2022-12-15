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



let products: Product[] = [painting1, painting2, painting3, painting4]
let productsDesktop: Product[] = [painting5, painting6 ,painting7, painting8]

let section: HTMLDivElement = document.getElementById('new-in__container') as HTMLDivElement
let selectionDesktop: HTMLDivElement = document.getElementById('new-in__container__desktop') as HTMLDivElement


for (let i = 0; i < productsDesktop.length; i++) {

    let art: HTMLDivElement = document.createElement('div')
    let pTitle: HTMLParagraphElement = document.createElement('p')
    let img: HTMLImageElement = document.createElement('img')
    let pDescription: HTMLParagraphElement = document.createElement('p')
    let pPrice: HTMLParagraphElement = document.createElement('p')

    art.appendChild(pTitle)
    art.appendChild(img)
    art.appendChild(pDescription)
    art.appendChild(pPrice)

    section.appendChild(art)
    // selectionDesktop.appendChild(art)

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

for (let i = 0; i < products.length; i++) {

    let art: HTMLDivElement = document.createElement('div')
    let pTitle: HTMLParagraphElement = document.createElement('p')
    let img: HTMLImageElement = document.createElement('img')
    let pDescription: HTMLParagraphElement = document.createElement('p')
    let pPrice: HTMLParagraphElement = document.createElement('p')

    art.appendChild(pTitle)
    art.appendChild(img)
    art.appendChild(pDescription)
    art.appendChild(pPrice)

    selectionDesktop.appendChild(art)

    art.className = 'new-in__container__desktop__box'
    pTitle.className = 'new-in__container__desktop__box__title'
    img.className = 'new-in__container__desktop__box__image'
    pDescription.className = 'new-in__container__desktop__box__description'
    pPrice.className = 'new-in__container__desktop__box__price'

    pTitle.innerHTML = products[i].title;
    img.src = products[i].imgURL;
    img.alt = "Product image";
    pDescription.innerHTML = products[i].description;
    pPrice.innerHTML = products[i].price.toString() + ' kr';

}
