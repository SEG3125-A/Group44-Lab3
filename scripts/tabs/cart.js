import { data } from "../datastore.js";

class CartTab {

    tab;               // Main div corresponding to the Cart tab
    cartContent;       // div containing displayed cart items
    productNameCart;   // id for product name in cart
    

    // Gets called once on application startup
    constructor() {
        this.tab = document.getElementById('Cart');
        this.cartContent = document.getElementById('cartContent');
        this.productNameCart = document.getElementById('productNameCart');
    }

    // Make this tab visible and active
    showTab() {
        this.tab.style.display = "flex";
        this.tab.classList.add('active');
        this.displayCartItems();
    }

    displayCartItems() {

        // Clear content, otherwise every click on the "Cart" tap will generate the content again
        this.cartContent.innerHTML = "";

        // Retrieve cart items
        let cartItems = data.getCartItems();

        // The cart title
        let cartTitle = document.createElement("h3");

        if (cartItems.length === 0) {
            // Set the cartTitle
            cartTitle.appendChild(document.createTextNode("Cart is empty"));

            // Append the cartTitle to the cartContent
            this.cartContent.appendChild(cartTitle);
        } else {
            // Set the cartTitle
            cartTitle.appendChild(document.createTextNode("Shopping Cart"));

            // Append the cartTitle to the cartContent
            this.cartContent.appendChild(cartTitle);

            let cartTable = document.createElement("table");
            // cartTable.setAttribute("class", "table");
            let cartTableBody = document.createElement("tbody");

            for (let i = 0; i < cartItems.length; i++) {
                let productName = cartItems[i].product.name;
                let productPrice = cartItems[i].product.price;

                let cartTableRow = document.createElement("tr");

                // Add content (product name) to the table cell
                let cartTableDataNameColumn = document.createElement("td");
                cartTableDataNameColumn.appendChild(document.createTextNode(productName));

                // Add content (product image) to the table cell
                let cartTableDataImageColumn = document.createElement("td");

                let productImage = document.createElement("img");
                productImage.setAttribute("src", "../../assets/" + productName.toLowerCase().replace(" ", "-") + ".png");
                productImage.setAttribute("class", "product-image");

                // Add content (product price) to the table cell
                let cartTableDataPriceColumn = document.createElement("td");
                cartTableDataPriceColumn.appendChild(document.createTextNode("$" + productPrice));
                
                // Append the image to the table cell
                cartTableDataImageColumn.appendChild(productImage)

                // Append the table cell to the table row
                cartTableRow.appendChild(cartTableDataNameColumn);
                cartTableRow.appendChild(cartTableDataImageColumn);
                cartTableRow.appendChild(cartTableDataPriceColumn);

                // Append the table row to the table body
                cartTableBody.appendChild(cartTableRow);
            }

            // Append the table body to the table
            cartTable.appendChild(cartTableBody);

            // Display table and total price
            this.cartContent.appendChild(cartTable);
            this.cartContent.appendChild(document.createTextNode("Total Price is $" + data.getTotalPrice().toFixed(2)));
        }
    }

}

let cartTab = new CartTab();
export { cartTab };