	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "apple",
		vegetarian: true,
		glutenFree: true,
		price: 1.05
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		price: 3.29
	},
	{
		name: "cake",
		vegetarian: true,
		glutenFree: false,
		price: 18
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		price: 17.58
	},
	{
		name: "eggs",
		vegetarian: true,
		glutenFree: true,
		price: 6.99
	},
	{
		name: "ice-cream",
		vegetarian: true,
		glutenFree: true,
		price: 4.39
	},
	{
		name: "pasta",
		vegetarian: true,
		glutenFree: false,
		price: 8.99
	},
	{
		name: "pizza",
		vegetarian: false,
		glutenFree: false,
		price: 9.99
	},
	{
		name: "potatoes",
		vegetarian: true,
		glutenFree: true,
		price: 4.97
	},
	{
		name: "rice",
		vegetarian: true,
		glutenFree: true,
		price: 16.99
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}