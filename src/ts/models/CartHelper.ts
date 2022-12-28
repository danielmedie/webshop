export default class {

	cartLocalStorageKey : string = 'cart'

	products = [
		{ id: 1, name: 'Foo', price : 1200 },
		{ id: 2, name: 'Bar', price : 200, imgUrl: "https://i.imgur.com/qVZbRew.jpg" },
		{ id: 3, name: 'Summer in Italy', price : 244 , imgUrl: "https://i.imgur.com/qVZbRew.jpg" }

	]

	

	// getProductById(productId) {
	// 	return this.products.find(p => p.id == productId)
	// }

	// Cart

	getProductsInCart() {
		return this.util.get(this.cartLocalStorageKey) || [];
	}

	getProductInCart(productId:any) {
		let productsInCart = this.getProductsInCart()
		return productsInCart.find((p: { id: any; }) => p.id == productId) || false
	}

	getProductById(productId:any) {
		return this.products.find(p => p.id == productId)
	}
	
	AddToCartById(productId :any, quantity = 1) { 
		let product = this.getProductById(productId)
		let productToStore = Object.assign({
			id : 0,
			name : '',
			price : 0,
			quantity,
			imgUrl : ''
		},product)
		let products = this.getProductsInCart()
		products.push(productToStore)
		this.util.set(this.cartLocalStorageKey,products)
	}
	
	UpdateCartById(product: any) { 
		if (!this.getProductInCart(product.id)) {
			return;
		}
		let products :any = this.getProductsInCart()
		products = products.map((p: { id: any; }) => {
			if (p.id == product.id) {
				return Object.assign(p,product);
			}
			return p;
		})
		this.util.set(this.cartLocalStorageKey,products)
	}

	RemoveFromCartById(productId:any) { 
		if (!this.getProductInCart(productId)) {
			return;
		}
		let products:any = this.getProductsInCart()
		products = products.filter((p: { id: any; }) => p.id != productId)
		this.util.set(this.cartLocalStorageKey,products)
	}

	IncrementProductQuantity(productId:any, change = 0) { 
		let productInCart = this.getProductInCart(productId)
		if (!productInCart) { 
			return;
		}
		productInCart.quantity = productInCart.quantity + change 
		this.UpdateCartById(productInCart)
	}

	clearProductsInCart() {
		return this.util.remove(this.cartLocalStorageKey) ;
	}

	// Checkout

	checkout() {
		// Submit
		this.clearProductsInCart()
	}

	// Util
	
	util = {
		
		get: (key: any) => (JSON.parse(localStorage.getItem(key)!)),
	
		set: (key: string, data: string) => (localStorage.setItem(key, JSON.stringify(data))),
	
		remove: (key: string) => (localStorage.removeItem(key))
	}

}