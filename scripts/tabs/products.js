import { data } from "../datastore.js";

class ProductsTab {

    tab;               // Main div corresponding to the Products tab
    filtersDiv;        // Div containing the product filters
    productsDiv;       // Div containing the displayed products list
    btnAddToCart;      // "Add to Cart" button
    btnApplyFilters;   // "Apply Filters" button

    // Gets called once on application startup
    constructor() {
        this.tab = document.getElementById('Products');
        this.filtersDiv = document.getElementById('filtersContainer');
        this.productsDiv = document.getElementById('displayProduct');
        this.btnAddToCart = document.getElementById('addCart');
        this.btnApplyFilters = document.getElementById('applyFilters');
        
        this.btnAddToCart.addEventListener('click', () => { 
            this.addSelectedToCart(); 
        });

        this.btnApplyFilters.addEventListener('click', () => {
            data.setMaxPrice(document.getElementById('rangeSlider').value);
        });
    }

    // Make this tab visible and active
    showTab() {
        this.tab.style.display = "flex";
        this.tab.classList.add('active');
        data.updateProductList();   // Apply any selected restrictions
        this.displayFilters();
        this.displayProducts();
    }

    displayFilters() {
        var sliderContainer = document.createElement("div");
        sliderContainer.setAttribute("class", "sliderContainer");

        var sliderInput = document.createElement("input");
        sliderInput.setAttribute("type", "range");
        sliderInput.setAttribute("min", "1");
        sliderInput.setAttribute("max", "20");
        sliderInput.setAttribute("value", "20");
        sliderInput.setAttribute("class", "slider");
        sliderInput.setAttribute("id", "rangeSlider");

        sliderContainer.appendChild(sliderInput);


        var sliderValue = document.createElement("p");
        sliderValue.textContent = sliderInput.value;
        sliderValue.setAttribute("id", "sliderValue");

        var priceFilterContainer = document.createElement("div");
        priceFilterContainer.appendChild(sliderValue);
        priceFilterContainer.appendChild(sliderContainer);

        this.filtersDiv.appendChild(priceFilterContainer);

        sliderInput.addEventListener('click', () => {
            sliderValue.textContent = sliderInput.value;
        });
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

            var productImage = document.createElement("img");
            productImage.setAttribute("src", "../../assets/" + productName.toLowerCase().replace(" ", "-") + ".png");
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

let productsTab = new ProductsTab();
export { productsTab };