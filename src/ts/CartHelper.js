export default class {

	cartLocalStorageKey = 'cart'

	products = [
		{ id: 1, name: 'Foo', price : 1200 },
		{ id: 2, name: 'Bar', price : 200, imgUrl: "https://i.imgur.com/qVZbRew.jpg" }
	]

	getProductById(productId) {
		return this.products.find(p => p.id == productId)
	}

	// Cart

	getProductsInCart() {
		return this.util.get(this.cartLocalStorageKey) || [];
	}

	getProductInCart(productId) {
		let productsInCart = this.getProductsInCart()
		return productsInCart.find(p => p.id == productId) || false
	}

	getProductById(productId) {
		return this.products.find(p => p.id == productId)
	}
	
	AddToCartById(productId, quantity = 1) { 
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
	
	UpdateCartById(product) { 
		if (!this.getProductInCart(product.id)) {
			return;
		}
		let products = this.getProductsInCart()
		products = products.map(p => {
			if (p.id == product.id) {
				return Object.assign(p,product);
			}
			return p;
		})
		this.util.set(this.cartLocalStorageKey,products)
	}

	RemoveFromCartById(productId) { 
		if (!this.getProductInCart(productId)) {
			return;
		}
		let products = this.getProductsInCart()
		products = products.filter(p => p.id != productId)
		this.util.set(this.cartLocalStorageKey,products)
	}

	IncrementProductQuantity(productId, change = 0) { 
		let productInCart = this.getProductInCart(productId)
		if (!productInCart) { 
			return;
		}
		productInCart.quantity = productInCart.quantity + change 
		this.UpdateCartById(productInCart)
	}

	clearProductsInCart() {
		return this.util.remove(this.cartLocalStorageKey) || [];
	}

	// Checkout

	checkout() {
		// Submit
		this.clearProductsInCart()
	}

	// Util
	
	util = {
		
		get: (key) => (JSON.parse(localStorage.getItem(key)) || null),
	
		set: (key,data) => (localStorage.setItem(key, JSON.stringify(data))),
	
		remove: (key) => (localStorage.removeItem(key))
	}

}