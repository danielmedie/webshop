import { Product } from "./Product";
let theCart = [];

let cartBtn = document.getElementsByClassName("bi bi-cart");
let cartSection = document.createElement("section");
let cartSectionTitle = document.createElement("h2");
let productsInCart = document.createElement("article");

// let addCartItemButtons: HTMLButtonElement = document.getElementsByClassName ("addOneItem") as unknown as HTMLButtonElement;
// //addCartItemButton.innerHTML = "+";
// let deleteCartItemButtons: HTMLButtonElement = document.getElementsByClassName ("subOneItem") as unknown as HTMLButtonElement;
// //deleteCartItemButton.innerHTML = "-";
// let deleteItemButtons: HTMLButtonElement = document.getElementsByClassName("deleteAllItems") as unknown as HTMLButtonElement;
// let checkoutCartButtons : HTMLButtonElement = document.getElementsByClassName("checkoutCart") as unknown as HTMLButtonElement;





Product.forEach(() =>{
    Product.addEventListener("click", (event)=>{
        if(event.target.classList.add("addToCart")){

        }
    });
});


//checkoutCartItemButton.innerHTML = "Gå till kassan";

// for (let i = 0; i < deleteCartItemButton.length; i ++ ){
//         let button : any = deleteCartItemButton [i];
//     button.addEventListener("click", function(event){
//         event.target
//     })
// }