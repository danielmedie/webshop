import { Product } from "./Product";

let p001 = {
    title: "Syntetiska penslar bundle",
    description: "Eaque, consequuntur a expedita odit vero blanditiis autem explicabo nisi.",
    price: 300,
    imgURL: "https://i.imgur.com/4KpavDq.jpg"
};

let p002 = {
    title: "En sommardröm",
    description: "Eaque, consequuntur a expedita odit vero blanditiis autem explicabo nisi",
    price: 2600,
    imgURL: "https://i.imgur.com/qVZbRew.jpg"
};

let p003 = {
    title: "Blommor",
    description: "Architecto minus laudantium consequatur quisquam accusantium voluptates hic quas aspernatur consectetur error!",
    price: 300,
    imgURL: "https://i.imgur.com/etBrsnr.jpg"
};
let p004 = {
    title: "Earth",
    description: "Architecto minus laudantium consequatur quisquam accusantium voluptates hic quas aspernatur consectetur error!",
    price: 1900,
    imgURL: "https://i.imgur.com/Odg2LBb.jpg"
};
let p005 = {
    title: "Cold sky",
    description: "Architecto minus laudantium consequatur quisquam accusantium voluptates hic quas aspernatur consectetur error!",
    price: 350,
    imgURL: "https://i.imgur.com/ptvOZZj.jpg"
};

let p006 = {
    title: "Kyssen",
    description: "Architecto minus laudantium consequatur quisquam accusantium voluptates hic quas aspernatur consectetur error!",
    price: 8800,
    imgURL: "https://i.imgur.com/pTsJGO1.jpg"
};
let p007 = {
    title: "Mona Lisa",
    description: "Architecto minus laudantium consequatur quisquam accusantium voluptates hic quas aspernatur consectetur error!",
    price: 25000,
    imgURL: "https://i.imgur.com/PMhRVTo.jpg"
};

let p008 = {
    title: "Summer in Italy",
    description: "Architecto minus laudantium consequatur quisquam accusantium voluptates hic quas aspernatur consectetur error!",
    price: 900,
    imgURL: 'https://i.imgur.com/HXCuzXZ.jpg'
};



let products: Product[] = [p001, p002, p003, p004, p005, p006, p007, p008]


let section: HTMLDivElement = document.getElementById('products__container') as HTMLDivElement


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

}


// Funktion för att sortera produkterna i bokstavsordning

function sortProducts(products: Product[]): Product[] {
    return products.sort((a: Product, b: Product) => {
      const nameA = a.title.toLowerCase();
      const nameB = b.title.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
 
  const productContainer: HTMLElement = document.getElementById("products__container")!;
  const sortButton = document.getElementById("sort-button");
  if (sortButton){
  sortButton.addEventListener("click", () => {
    const sortedProducts = sortProducts(products);
  productContainer.innerHTML = "";
  sortedProducts.forEach((product) => {
    const productElement = document.createElement ("div");
    // productElement.innerHTML = products;
    // productContainer.appendChild(productElement);
    
    productContainer.innerHTML += `
      <div class="product">
        <h2 class="product-title">${product.title}</h2>
        <p class="product-description">${product.description}</p>
        <p class="product-price">${product.price}</p>
        <img class="product-image" src="${product.imgURL}" alt="${product.title}">
      </div>
    `;
  });
});
// for (let i = 0; i < productsDesktop.length; i++) {

//     let art: HTMLDivElement = document.createElement('div')
//     let pTitle: HTMLParagraphElement = document.createElement('p')
//     let img: HTMLImageElement = document.createElement('img')
//     let pDescription: HTMLParagraphElement = document.createElement('p')
//     let pPrice: HTMLParagraphElement = document.createElement('p')
//     let button: HTMLButtonElement = document.createElement('button')


//     art.appendChild(pTitle)
//     art.appendChild(img)
//     art.appendChild(pDescription)
//     art.appendChild(pPrice)
//     art.appendChild(button)

//     selectionDesktop.appendChild(art)

    
//     art.className = 'new-in__container__desktop__box'
//     pTitle.className = 'new-in__container__desktop__box__title'
//     img.className = 'new-in__container__desktop__box__image'
//     pDescription.className = 'new-in__container__desktop__box__description'
//     pPrice.className = 'new-in__container__desktop__box__price'
//     button.className = 'shop-items-button'
    
//     button.innerHTML = 'Köp'
//     pTitle.innerHTML = products[i].title;
//     img.src = products[i].imgURL;
//     img.alt = "Product image";
//     pDescription.innerHTML = products[i].description;
//     pPrice.innerHTML = products[i].price.toString() + ' kr';

// }


/*-----------------------------------------------remove--------------------------------------------------------------*/


let removeCartItemsButton : HTMLCollection = document.getElementsByClassName('remove-item-btn') as HTMLCollection

//let cart : HTMLCollectionElement = [];

function removeCartItems(event:any) {
    let buttonClicked = event.target
    buttonClicked.parentElement.remove()

}

for (let i = 0; i < removeCartItems.length; i++) {
    // let remove = removeCartItems[i];
    // remove.addEventListener('click', removeCartItems)
}



let addToCartButtons = document.getElementsByClassName('shop-items-button')
for (let i = 0; i <addToCartButtons.length; i++) {
    let button =addToCartButtons[i];
    button.addEventListener('click', addToCart)
    
}

document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchasedClick)

function purchasedClick() {
    alert('Tack för ditt köp')
    let cartItems: any = document.getElementsByClassName('cart-itmes')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal();
    ;
    
}

function addToCart(event:any) {
let button = event.target
let shopItem = button.parentElement

console.log(shopItem);

let title = shopItem.getElementsByClassName('new-in__container__box__title')[0].innerHTML


let price = shopItem.getElementsByClassName('new-in__container__box__price')[0].innerHTML


let imgSrc = shopItem.getElementsByClassName('new-in__container__box__image')[0].src

console.log(title);
console.log(price);
console.log(imgSrc);

addItemsToCart (title, price, imgSrc)
updateCartTotal()

}
let cartItems = document.getElementsByClassName('items-preview')[0]
console.log(cartItems);
let cartItemsNames = cartItems.getElementsByClassName('new-in__container__box__title')
function addItemsToCart (title : string, price : number, imgSrc : string) {
    let cartRow = document.createElement('div')
    cartRow.innerText = `${title} ${price.toString()} ${imgSrc}`
    for (let i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerHTML == title) {
            alert('Denna produkt är finns redan i varukorgen')
        }
        return
    }
    cartItems.append(cartRow)
}
function updateCartTotal() {
    let cartItemsContainer = document.getElementsByClassName('new-in__container__desktop')[0]
    let cartRows = cartItemsContainer.getElementsByClassName('new-in__container__desktop__box')

    for (let i = 0; i < cartRows.length; i++) {
        let cartRow =cartRows[i];
        let priceElement = products[i].price
    }
    
}

/*--------------------------------------------------------------------------------------------------------*/



// let CartItems : HTMLCollection = document.getElementsByClassName('items-preview') as HTMLCollection

function previewItems() {

}}
