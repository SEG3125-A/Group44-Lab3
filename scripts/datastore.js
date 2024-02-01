import { ALL_PRODUCTS } from "./product_list.js"; 

// One stop shop where all the app data is stored, managed, and can be accessed

class DataStore {

    restrictions;
    productList;
    cart;

    // Gets called once on application startup
    constructor() {
        this.restrictions = new Set();
        this.cart = {
            items: new Array(),
            totalPrice: 0,
        }
    }



    // --- RESTRICTIONS ---

    // Add & Remove dietary restrictions
    addRestriction(filterName) { this.restrictions.add(filterName); }
    removeRestriction(filterName) { this.restrictions.delete(filterName); }



    // --- PRODUCTS ---

    // Update the list of products to display
    updateProductList() {
        let productSet = new Set();
    
        // Add all products to the set
        for (let i = 0; i < ALL_PRODUCTS.length; i++) {
            productSet.add(ALL_PRODUCTS[i]);
        }
    
        // Remove the ones that don't meet the restriction
        this.restrictions.forEach ((restriction) => {
            ALL_PRODUCTS.forEach(product => {
                if ((restriction == "vegetarian") 
                    && (product.vegetarian == false)
                    && (productSet.has(product))){
                        productSet.delete(product);
    
                } else if ((restriction == "gluten-free") 
                    && (product.glutenFree == false)
                    && (productSet.has(product))){
                        productSet.delete(product);
    
                } else if ((restriction == "lactose-intolerant") 
                    && (product.dairyFree == false)
                    && (productSet.has(product))){
                        productSet.delete(product);
    
                } else if ((restriction == "organic") 
                    && (product.organic == false)
                    && (productSet.has(product))){
                        productSet.delete(product);
                }
            });
        });
    
        // Convert the set to an array that can be sorted
        this.productList = [];
        productSet.forEach ((product) => { this.productList.push(product); });
    
        // Sort array
        this.productList.sort((a, b) => a.price - b.price);
        console.log(this.productList);
    }

    getProducts() {
        return this.productList;
    }

    getProductByID(id) {
        for (let i = 0; i < ALL_PRODUCTS.length; i++) { 
            if (ALL_PRODUCTS[i].id == id) {
                return ALL_PRODUCTS[i];
            }
        }
        return null;
    }



    // --- CART ---

    addToCart(selected) {
        let cartItems = [];
        selected.forEach(product => {
            cartItems.push({
                product: product,
                quantity: 1
            });
        });

        this.cart.items = cartItems;
        this.updateTotalPrice();
    }

    emptyCart() {
        this.cart = {
            items: new Array(),
            totalPrice: 0,
        }
    }

    getCartItems() {
        return this.cart.items;
    }



    // --- TOTAL PRICE ---

    updateTotalPrice() {
        let totalPrice = 0;
        this.cart.items.forEach(cartItem => {
            totalPrice += (cartItem.product.price * cartItem.quantity);
        });
        this.cart.totalPrice = totalPrice;
    }

    getTotalPrice() {
        return this.cart.totalPrice;
    }

}

let data = new DataStore();
export { data };