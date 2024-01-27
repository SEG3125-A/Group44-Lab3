import { products, restrictListProducts, getTotalPrice } from "./groceries.js";

// Always up-to-date set of all currently selected filters
let selectedFilters = new Set();

// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(tabName) {

	// Get all elements with class="tabcontent" and hide them
	const tabcontent = document.getElementsByClassName("tabcontent");
	for (let i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	const tablinks = document.getElementsByClassName("tablinks");
	for (let i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "flex";
	document.getElementById(tabName).classList.add('active');

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices() {
    var productsDiv = document.getElementById('displayProduct'); 
	// productsDiv represents the <div> in the Products tab, which shows the product list, so we first set it empty
    productsDiv.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, selectedFilters);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (let i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		productsDiv.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		productsDiv.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		productsDiv.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
		
}


const filters = document.getElementsByClassName('filter');
for (let i = 0; i < filters.length; i++) {
    filters[i].addEventListener('click', (event) => {
        event.preventDefault();
        // Checking the state BEFORE the change is actually made
        if (filters[i].checked) {
            selectedFilters.delete(filters[i].id);
        } else {
            selectedFilters.add(filters[i].id);
        }
        populateListProductChoices();
    });
}

openInfo('Products');

populateListProductChoices();

export { openInfo, selectedItems };
