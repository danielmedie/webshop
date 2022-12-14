import { Product } from "./models/Product";

let painting1 = {
    title: "Syntetiska penslar bundle",
    description: "Eaque, consequuntur a expedita odit vero blanditiis autem explicabo nisi.",
    price: 300,
    imgURL: "https://images.tctc.se/nmp1vq8c1nu84kgsex6mbr9dse0aareo.jpg"
};

let painting2 = {
    title: "En sommardröm",
    description: "Eaque, consequuntur a expedita odit vero blanditiis autem explicabo nisi",
    price: 2600,
    imgURL: "https://www.annakarolina.se/wp-content/uploads/2021/11/Tavla_EnSommardrom_jpg.jpg"
};

let painting3 = {
    title: "Akvarellset",
    description: "Architecto minus laudantium consequatur quisquam accusantium voluptates hic quas aspernatur consectetur error!",
    price: 300,
    imgURL: "https://penstore.se/bilder/artiklar/zoom/106250_1.jpg?m=1598348763"
};
let painting4 = {
    title: "Vårblommor",
    description: "Architecto minus laudantium consequatur quisquam accusantium voluptates hic quas aspernatur consectetur error!",
    price: 1900,
    imgURL: "https://www.ikea.com/se/sv/images/products/bild-utslagna-blommor__0475243_pe615499_s5.jpg?f=s"
};
let painting5 = {
    title: "Canvas i bomull",
    description: "Architecto minus laudantium consequatur quisquam accusantium voluptates hic quas aspernatur consectetur error!",
    price: 350,
    imgURL: "https://static.panduro.com/ArticleImages/310x310/190054_01.jpg"
};

let painting6 = {
    title: "Kyssen",
    description: "Architecto minus laudantium consequatur quisquam accusantium voluptates hic quas aspernatur consectetur error!",
    price: 8800,
    imgURL: "https://stockholm87.files.wordpress.com/2013/09/the-kiss-19081.jpg"
};
let painting7 = {
    title: "Mona Lisa",
    description: "Architecto minus laudantium consequatur quisquam accusantium voluptates hic quas aspernatur consectetur error!",
    price: 25000,
    imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
};

let painting8 = {
    title: "Summer in Italy",
    description: "Architecto minus laudantium consequatur quisquam accusantium voluptates hic quas aspernatur consectetur error!",
    price: 900,
    imgURL: 'https://gretastravels.com/wp-content/uploads/2021/07/IMG-2490.jpg'
};



let products: Product[] = [painting1, painting2, painting3, painting4, painting5, painting6 ,painting7, painting8]
let productsDesktop: Product[] = [painting1, painting2, painting3, painting4, painting5, painting6 ,painting7, painting8]

let section: HTMLDivElement = document.getElementById('new-in__container') as HTMLDivElement
let selectionDesktop: HTMLDivElement = document.getElementById('new-in__container__desktop') as HTMLDivElement


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
    selectionDesktop.appendChild(art)

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

 let removeCartItems : HTMLCollection = document.getElementsByClassName('remove-item-btn') as HTMLCollection


for (let i = 0; i < removeCartItems.length; i++) {
    let remove = removeCartItems[i];
    remove.addEventListener('click', function (event) {
        let buttonClicked = event.target
        // buttonClicked.parent
    })
}