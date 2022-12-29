import { Product } from "./models/Product";
import CartHelper from './models/CartHelper'

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

for (let i = 0; i < productsDesktop.length; i++) {

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

    selectionDesktop.appendChild(art)

    
    art.className = 'new-in__container__desktop__box'
    pTitle.className = 'new-in__container__desktop__box__title'
    img.className = 'new-in__container__desktop__box__image'
    pDescription.className = 'new-in__container__desktop__box__description'
    pPrice.className = 'new-in__container__desktop__box__price'
    button.className = 'shop-items-button'
    
    button.innerHTML = 'Köp'
    pTitle.innerHTML = products[i].title;
    img.src = products[i].imgURL;
    img.alt = "Product image";
    pDescription.innerHTML = products[i].description;
    pPrice.innerHTML = products[i].price.toString() + ' kr';

}


/*-----------------------------------------------remove--------------------------------------------------------------*/

let Cart :any = new CartHelper()

// let removeCartItemsButton : HTMLCollection = document.getElementsByClassName('remove-item-btn') as HTMLCollection

//let cart : HTMLCollectionElement = [];

function removeCartItems(event:any) {
    let cartRemoveBtn = document.getElementsByClassName('removeFromCart')
    for (let i = 0; i < cartRemoveBtn.length; i++) {
        cartRemoveBtn[i].addEventListener('click', Cart.RemoveFromCartById())

    }

}

// for (let i = 0; i < removeCartItems.length; i++) {
//     // let remove = removeCartItems[i];
//     // remove.addEventListener('click', removeCartItems)
// }



let addToCartButtons = document.getElementsByClassName('shop-items-button')
for (let i = 0; i <addToCartButtons.length; i++) {
    let button =addToCartButtons[i];
    button.addEventListener('click', addToCart)
}

// document.getElementsById('btn-purchase').addEventListener('click', purchasedClick)
// console.log(document.getElementsByClassName('btn-purchase'));
document.getElementById('btn-purchase')?.addEventListener('click', purchasedClick)

/** -------------------------------CHECKOUT ---------------------------------------------- */

function purchasedClick() {
    alert('Tack för ditt köp')
    let cartItems: any = document.getElementsByClassName('cart-itmes')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    // updateCartTotal();
    Cart.clearProductsInCart()
    console.log(Cart);
    
}

function addToCart(event:any) {
// let button = event.target
// let shopItem = button.parentElement

// console.log(shopItem);

// let title = shopItem.getElementsByClassName('new-in__container__box__title')[0].innerHTML


// let price = shopItem.getElementsByClassName('new-in__container__box__price')[0].innerHTML


// let imgSrc = shopItem.getElementsByClassName('new-in__container__box__image')[0].src

// console.log(title);
// console.log(price);
// console.log(imgSrc);

Cart.AddToCartById(2)

// addItemsToCart (title, price, imgSrc)
updateCartTotal()

}


let cartItems: HTMLDivElement = document.getElementById('items-preview')! as HTMLDivElement
// let cartItems: any = document.getElementById('items-preview') as any
console.log(cartItems);

// let section: HTMLDivElement = document.getElementById('new-in__container') as HTMLDivElement

function showInCart () {
    let productsInLS = Cart.getProductsInCart()

    for (let i = 0; i < productsInLS.length; i++) {
        // const element = products[i];
        
        let product: HTMLDivElement = document.createElement('div')
        let pTitle: HTMLParagraphElement = document.createElement('p')
        let img: HTMLImageElement = document.createElement('img')
        let pDescription: HTMLParagraphElement = document.createElement('p')
        let pPrice: HTMLParagraphElement = document.createElement('p')
        let removeButton: HTMLButtonElement = document.createElement('button')

        product.appendChild(pTitle)
        product.appendChild(img)
        product.appendChild(pDescription)
        product.appendChild(pPrice)
        product.appendChild(removeButton)
    
    
        cartItems.appendChild(product)


        removeButton.innerHTML = 'Remove'
        removeButton.className = 'shop-items-button'
    
        product.className = 'new-in__container__box'
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
}




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

// function previewItems() {

// }

/* LS */


// let Cart :any = new CartHelper()

// window.Cart = Cart;
console.log(Cart)

// Clear the Cart first (Remove later)
Cart.clearProductsInCart()

// Add by Id
Cart.AddToCartById()
Cart.AddToCartById(1)

// GEt All Prodcusts on cart
console.log(Cart.getProductsInCart())

Cart.RemoveFromCartById(1)

Cart.IncrementProductQuantity(2,3) // 4

// GEt All Prodcusts on cart
console.log(Cart.getProductsInCart())