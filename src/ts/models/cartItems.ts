import { Product } from "./Product";

export class CartItems{
    constructor(public product: Product, public amount: number){}
}