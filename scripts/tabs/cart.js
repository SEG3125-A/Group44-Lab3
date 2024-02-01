import { data } from "../datastore.js";

class CartTab {

    tab;               // Main div corresponding to the Cart tab
    cartContent;       // div containing displayed cart items

    // Gets called once on application startup
    constructor() {
        this.tab = document.getElementById('Cart');
        this.cartContent = document.getElementById('cartContent');
    }

    // Make this tab visible and active
    showTab() {
        this.tab.style.display = "flex";
        this.tab.classList.add('active');
        this.displayCartItems();
    }

    displayCartItems() {

        this.cartContent.innerHTML = "";
        let cartItems = data.getCartItems();
        let cartDisplay = document.createElement("P");
        
        // Cart title section
        cartDisplay.innerHTML = "You selected : ";
        cartDisplay.appendChild(document.createElement("br"));
    
        // build list of selected items
        cartItems.forEach(cartItem => {
            cartDisplay.appendChild(document.createTextNode(cartItem.product.name));
            cartDisplay.appendChild(document.createElement("br"));
        });
            
        // Display list and total price
        this.cartContent.appendChild(cartDisplay);
        this.cartContent.appendChild(document.createTextNode("Total Price is " + data.getTotalPrice().toFixed(2)));
    }

}

let cartTab = new CartTab();
export { cartTab };