import { Product } from "./models/Product";

let painting1 = {
    title: "John",
    description: "Doe",
    price: 50,
    imgURL: "..."
};

let painting2 = {
    title: "John",
    description: "Doe",
    price: 70,
    imgURL: "..."
};
let painting3 = {
    title: "John",
    description: "Doe",
    price: 50,
    imgURL: "..."
};

let painting4 = {
    title: "John",
    description: "Doe",
    price: 70,
    imgURL: "..."
};
let painting5 = {
    title: "John",
    description: "Doe",
    price: 50,
    imgURL: "..."
};

let painting6 = {
    title: "John",
    description: "Doe",
    price: 70,
    imgURL: "..."
};
let painting7 = {
    title: "John",
    description: "Doe",
    price: 50,
    imgURL: "..."
};

let painting8 = {
    title: "John",
    description: "Doe",
    price: 70,
    imgURL: "..."
};



let products: Product[] = [painting1, painting2]
let section: HTMLDivElement = document.getElementById('new-in__container') as HTMLDivElement


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

    section.appendChild(art)

    pTitle.innerHTML = products[i].title
    img.src = products[i].imgURL
    pDescription.innerHTML = products[i].description
    pPrice.innerHTML = products[i].price.toString()

}

console.log(section);
