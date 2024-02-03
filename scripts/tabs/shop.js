import { data } from "../datastore.js";
import { switchTabs } from "../main.js";

class ShopTab {

    tab;               // Main div corresponding to the Products tab
    sortOrder;
    productsDiv;       // Div containing the displayed products list
    btnAddToCart;      // "Add to Cart" button
    applyRestrictionToggle = false; 

    // Gets called once on application startup
    constructor() {
        this.tab = document.getElementById('Shop');
        this.productsDiv = document.getElementById('visible-products')
        this.btnAddToCart = document.getElementById('addCart');
        this.sortOrder = document.getElementById('sort-order-dropdown');
        this.applyRestrictionToggle = document.getElementById('applyRestrictionsFlag')

        this.btnAddToCart.addEventListener('click', () => { 
            this.addSelectedToCart(); 
        });
        this.sortOrder.addEventListener('change', () => { 
            data.changeSortOrder(this.sortOrder.options[this.sortOrder.selectedIndex].value)
        });
        this.applyRestrictionToggle.addEventListener('change',() =>{
            if(this.applyRestrictionToggle.checked){
                data.setApplyRestrictionsBool(true);
            }
            else if(this.applyRestrictionToggle.checked == false){
                data.setApplyRestrictionsBool(false);
            }
        });

    }

    // Make this tab visible and active
    showTab() {
        this.tab.style.display = "flex";
        this.tab.classList.add('active');
        data.updateProductList();   // Apply any selected restrictions
        this.displayProducts();
    }

    // Generate a checkbox for each product to be displayed
    displayProducts() {

        this.productsDiv.innerHTML = "";        // Clear the current products list
        this.productsDiv.setAttribute("class", "products-div");
        let products = data.getProducts();      // Get list of products from the data store
            
        for (let i = 0; i < products.length; i++) {
            var productName = products[i].name;

            var productDiv = document.createElement("div");
            productDiv.setAttribute("class", "product-div");
            productDiv.addEventListener('click', (e) => {
                switchTabs('product', products[i].id);
            });

            var productImage = document.createElement("img");
            productImage.setAttribute("src", "./assets/" + productName.toLowerCase().replace(" ", "-") + ".png");
            productImage.setAttribute("class", "product-image");

            // Create the checkbox and add in HTML DOM
            const checkbox = document.createElement("styled-checkbox");
            checkbox.setAttribute("id", products[i].id);
            checkbox.setAttribute("name", "product");
            checkbox.setAttribute("label", productName + " - $" + products[i].price.toFixed(2));

            var checkboxLabel = document.createElement("label");
            checkboxLabel.setAttribute("for", products[i].id);
            checkboxLabel.appendChild(productImage);

            checkbox.addEventListener('click', (event) => { event.preventDefault(); });
            
            productDiv.appendChild(checkboxLabel);
            productDiv.appendChild(checkbox);

            this.productsDiv.appendChild(productDiv);
            this.productsDiv.appendChild(document.createElement("br"));     // Add line break before moving on to next product
        }
    }
    
    // Updates the data store with the selected cart items
    addSelectedToCart() {
        
        let products = document.getElementsByName("product");
        let selected = [];

        for (let i = 0; i < products.length; i++) { 
            if (products[i].checked) {
                let product = data.getProductByID(products[i].id);
                if (product) {
                    selected.push(product);
                }
            }
        }

        data.emptyCart();
        data.addToCart(selected);
    }

}

let shopTab = new ShopTab();
export { shopTab };