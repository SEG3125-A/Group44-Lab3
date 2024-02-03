import { data } from "../datastore.js";
import { switchTabs } from "../main.js";

class ShopTab {

    tab;               // Main div corresponding to the Products tab
    productsDiv;       // Div containing the displayed products list
    btnAddToCart;      // "Add to Cart" button

    // Gets called once on application startup
    constructor() {
        this.tab = document.getElementById('Product');
        this.displayProduct = document.getElementById('current-product')
        this.btnAddToCart = document.getElementById('add-product');
        
        this.btnAddToCart.addEventListener('click', () => { 
            this.addSelectedToCart(); 
        });
    }

    // Make this tab visible and active
    showTab() {
        this.tab.style.display = "flex";
        this.tab.classList.add('active');
        this.switchProduct();
    }
    
    
    // Updates the data store with the selected cart items
    addSelectedToCart() {
        
        // let products = document.getElementsByName("product");
        // let selected = [];

        // for (let i = 0; i < products.length; i++) { 
        //     if (products[i].checked) {
        //         let product = data.getProductByID(products[i].id);
        //         if (product) {
        //             selected.push(product);
        //         }
        //     }
        // }

        // data.emptyCart();
        // data.addToCart(selected);
    }

}

let shopTab = new ShopTab();
export { shopTab };