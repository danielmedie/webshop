let theCart = [];

let addCartItemButtons: HTMLButtonElement = document.getElementsByClassName ("addOneItem") as unknown as HTMLButtonElement;
//addCartItemButton.innerHTML = "+";
let deleteCartItemButtons: HTMLButtonElement = document.getElementsByClassName ("subOneItem") as unknown as HTMLButtonElement;
//deleteCartItemButton.innerHTML = "-";
let checkoutCartItemButtons: HTMLButtonElement = document.getElementsByClassName("deleteAllItems") as unknown as HTMLButtonElement;

//checkoutCartItemButton.innerHTML = "Gå till kassan";

// for (let i = 0; i < deleteCartItemButton.length; i ++ ){
//         let button : any = deleteCartItemButton [i];
//     button.addEventListener("click", function(event){
//         event.target
//     })
// }