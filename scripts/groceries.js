	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "apple",
		vegetarian: true,
		glutenFree: true,
        dairyFree: true,
        lowSugar: true,
		price: 1.05
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
        dairyFree: false,
        lowSugar: true,
		price: 3.29
	},
	{
		name: "cake",
		vegetarian: true,
		glutenFree: false,
        dairyFree: false,
        lowSugar: false,
		price: 18
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
        dairyFree: true,
        lowSugar: true,
		price: 17.58
	},
	{
		name: "eggs",
		vegetarian: true,
		glutenFree: true,
        dairyFree: true,
        lowSugar: true,
		price: 6.99
	},
	{
		name: "ice-cream",
		vegetarian: true,
		glutenFree: true,
        dairyFree: false,
        lowSugar: false,
		price: 4.39
	},
	{
		name: "pasta",
		vegetarian: true,
		glutenFree: false,
        dairyFree: true,
        lowSugar: true,
		price: 8.99
	},
	{
		name: "pizza",
		vegetarian: false,
		glutenFree: false,
        dairyFree: false,
        lowSugar: true,
		price: 9.99
	},
	{
		name: "potatoes",
		vegetarian: true,
		glutenFree: true,
        dairyFree: true,
        lowSugar: true,
		price: 4.97
	},
	{
		name: "rice",
		vegetarian: true,
		glutenFree: true,
        dairyFree: true,
        lowSugar: true,
		price: 16.99
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictions) {
    let products = new Set();

    // Add all products to the set
    for (let i = 0; i < prods.length; i++) {
        products.add(prods[i].name);
    }

    // Remove the ones that don't meet the restriction
    restrictions.forEach ((restriction) => {
        for (let i = 0; i < prods.length; i++) {

            if ((restriction == "vegetarian") 
                && (prods[i].vegetarian == false)
                && (products.has(prods[i].name))){
                    products.delete(prods[i].name);

            } else if ((restriction == "gluten-free") 
                && (prods[i].glutenFree == false)
                && (products.has(prods[i].name))){
                    products.delete(prods[i].name);

            } else if ((restriction == "lactose-intolerant") 
                && (prods[i].dairyFree == false)
                && (products.has(prods[i].name))){
                    products.delete(prods[i].name);

            } else if ((restriction == "low-sugar") 
                && (prods[i].lowSugar == false)
                && (products.has(prods[i].name))){
                    products.delete(prods[i].name);
            }

        }
    });

    // Convert the set to an array (expected return type)
    let products_array = [];
    products.forEach ((product) => { products_array.push(product); });

    console.log(products_array);
	return products_array;
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

export { products, restrictListProducts, getTotalPrice };