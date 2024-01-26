/**
 *  Custom reusable webcomponent 
 *  Learn more about these here: https://developer.mozilla.org/en-US/docs/Web/API/Web_components
 * 
 *  Internal structure generated:
 * 
 *  <div class="navbar">
 *      <div class="left">
 *          <svg class="lucide lucide-carrot carrot" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"/><path d="M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"/><path d="M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"/></svg>
 *          Everyday Groceries
 *      </div>
 *      <div class="right">
 *          <a class="products active" href="../../pages/products.html">Products</a>
 *          <a href="../../pages/cart.html">
 *              <svg class="lucide lucide-shopping-cart page-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
 *          </a>
 *          <a href="../../pages/client.html">
 *              <svg class="lucide lucide-circle-user-round page-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="4"/><path d="M18 20a6 6 0 0 0-12 0"/></svg>
 *          </a>
 *      </div>
 *  </div>
 */


// Create a class for the element
class Navbar extends HTMLElement {
    static observedAttributes = ["page"];

    constructor() {
        // Always call super first in constructor
        super();
    }
  
    // Called when the element is added to the page
    connectedCallback() {

        // Create a shadow root
        const shadow = this.attachShadow({ mode: "open" });
        
        // --- Create internal elements ---

        // Outermost element
        const navbar = document.createElement("div");
        navbar.setAttribute("class", "navbar");
    
        // Left side including carrot logo and website title
        const left = document.createElement("div");
        left.setAttribute("class", "left");
        left.innerHTML = `
            <svg class="lucide lucide-carrot carrot" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"/><path d="M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"/><path d="M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"/></svg>
                Everyday Groceries
        `;
        
        // Right side container for page links
        const right = document.createElement("div");
        right.setAttribute("class", "right");

        // Products page link
        const products = document.createElement("a");               // <- Change to "div" if using in a single page application (SPA)
        products.classList.add("products");
        products.setAttribute("href", "../../pages/products.html"); // <- Delete this line if using in an SPA
        products.innerText = "Products";
        // products.addEventListener('click', () => {
        //     If converting to a single page application, the function call to change content goes here
        // });
        
        // Cart page link
        const cart = document.createElement("a");                   // <- Change to "div" if using in an SPA
        cart.setAttribute("href", "../../pages/cart.html");         // <- Delete this line if using in an SPA
        cart.innerHTML = `<svg class="lucide lucide-shopping-cart page-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`;
        // cart.addEventListener('click', () => {
        //     If converting to a single page application, the function call to change content goes here  
        // });

        // Client page link
        const client = document.createElement("a");                 // <- Change to "div" if using in in an SPA
        client.setAttribute("href", "../../pages/client.html");     // <- Delete this line if using in an SPA
        client.innerHTML = `<svg class="lucide lucide-circle-user-round page-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="4"/><path d="M18 20a6 6 0 0 0-12 0"/></svg>`;
        // client.addEventListener('click', () => {
        //     If using converting to a single page applications, the function call to change content goes here    
        // });

        const currentPage = this.getAttribute("page");

        // Set the active page
        if (currentPage == "products") {
            products.classList.add("active");

        } else if (currentPage == "cart") {
            cart.childNodes[0].classList.add("active");

        } else if (currentPage == "client") {
            client.childNodes[0].classList.add("active");
        }

        // Apply our custom external styles
        const CSSLink = document.createElement("link");
        CSSLink.setAttribute("rel", "stylesheet");
        CSSLink.setAttribute("href", "../components/navbar/navbar.css");

        // Adding our sub-elements to the shadow-DOM 
        shadow.appendChild(CSSLink);
        shadow.appendChild(navbar);
        navbar.appendChild(left);
        navbar.appendChild(right);
        right.appendChild(products);
        right.appendChild(cart);
        right.appendChild(client);
    }

  }
  
  customElements.define("nav-bar", Navbar);