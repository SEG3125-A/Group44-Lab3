// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

const ALL_PRODUCTS = [
	{
        id: 1, 
		name: "Apples",
		vegetarian: true,
		glutenFree: true,
        dairyFree: true,
        organic: true,
		price: 1.05
	},
	{ 
        id: 2, 
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
        dairyFree: false,
        organic: true,
		price: 3.29
	},
	{
        id: 3, 
		name: "Cake",
		vegetarian: true,
		glutenFree: false,
        dairyFree: false,
        organic: false,
		price: 18
	},
	{
        id: 4, 
		name: "Chicken",
		vegetarian: false,
		glutenFree: true,
        dairyFree: true,
        organic: true,
		price: 17.58
	},
	{
        id: 5, 
		name: "Eggs",
		vegetarian: true,
		glutenFree: true,
        dairyFree: true,
        organic: true,
		price: 6.99
	},
	{
        id: 6, 
		name: "Ice Cream",
		vegetarian: true,
		glutenFree: true,
        dairyFree: false,
        organic: false,
		price: 4.39
	},
	{
        id: 7, 
		name: "Pasta",
		vegetarian: true,
		glutenFree: false,
        dairyFree: true,
        organic: true,
		price: 8.99
	},
	{
        id: 8, 
		name: "Pizza",
		vegetarian: false,
		glutenFree: false,
        dairyFree: false,
        organic: false,
		price: 9.99
	},
	{
        id: 9, 
		name: "Potatoes",
		vegetarian: true,
		glutenFree: true,
        dairyFree: true,
        organic: true,
		price: 4.97
	},
	{
        id: 10, 
		name: "Rice",
		vegetarian: true,
		glutenFree: true,
        dairyFree: true,
        organic: true,
		price: 16.99
	},
];

export { ALL_PRODUCTS };