/*
// Loading indicator element
const loadingIndicator = document.getElementById('loading-indicator');

loadingIndicator.style.display = 'block';

// Get the product ID from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// HTML elements to update
const productImage = document.getElementById("productImage");
const productName = document.getElementById("productName");
const productDescription = document.getElementById("productDescription");
const productDiscountedPrice = document.getElementById("productDiscountedPrice");
const productRegularPrice = document.getElementById("productRegularPrice");
const productDetails = document.getElementById("productDetails");
const productFeatures = document.getElementById("productFeatures");
const productColor = document.getElementById("productColor");
const productSizes = document.getElementById("productSizes");

// Create the "Add to Bag" button element
const addToBagButton = document.createElement("button");
addToBagButton.textContent = "Add to Bag";
addToBagButton.classList.add("addtobag-button", "button"); // Add CSS classes for styling

addToBagButton.addEventListener("click", () => {
  // Retrieve the product information from the page
  const productInfo = {
    id: productId,
    title: productDescription.textContent,
    price: productRegularPrice.textContent,
    discountedPrice: productDiscountedPrice.textContent,
    image: productImage.src,
  };

  // Check if there is an existing cart in local storage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Add the selected product to the cart
  cart.push(productInfo);

  // Update the cart in local storage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Increment the count in local storage
  let itemCount = localStorage.getItem("itemCount");
  itemCount = itemCount ? parseInt(itemCount) + 1 : 1;
  localStorage.setItem("itemCount", itemCount);

  // Continue shopping or go to the cart
  const confirmationMessage = "Product added to your bag! What would you like to do next?";
  const continueShopping = confirm(`${confirmationMessage}\n\nClick 'OK' to continue shopping or 'Cancel' to go to the bag.`);

  if (!continueShopping) {
    // Redirect the user to the cart or perform other actions
    window.location.href = "bag.html"; 
  } else {
    // Refresh the page if the user chooses to continue shopping
    window.location.reload();
  }
});

// Append the button to the product page
document.querySelector(".product-info-container").appendChild(addToBagButton);

// Fetch product details using the product ID
fetch(`https://api.noroff.dev/api/v1/rainy-days/${productId}`)
  .then((response) => response.json())
  .then((product) => {
    // Update the HTML elements with the retrieved data
    productImage.src = product.image;
    productImage.alt = product.title;
    productName.textContent = product.vendor;
    productDescription.textContent = product.title;
    productDiscountedPrice.textContent = `${product.discountedPrice} kr`;
    productColor.textContent = product.baseColor;

    // Check if there are available sizes
    const sizes = product.sizes;
    sizes.forEach((size) => {
      const sizeButton = document.createElement("button");
      sizeButton.textContent = size;
      sizeButton.classList.add("size-button");

      // Append the size button to the size options container
      productSizes.appendChild(sizeButton);
    });

    if (product.onSale) {
      productDiscountedPrice.textContent = `${product.discountedPrice} kr`;
      productRegularPrice.textContent = `${product.price} kr`;
    } else {
      productRegularPrice.textContent = `${product.price} kr`;
      productRegularPrice.style.textDecoration = "none";
      productDiscountedPrice.style.display = "none";
    }

    productDetails.textContent = product.description;

    loadingIndicator.style.display = 'none';
  })

  .catch((error) => {
    console.error("Error fetching product data:", error);
    loadingIndicator.style.display = 'none';

    // Display the error message
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "Error: Product not found";
    errorMessage.style.display = 'block';
  });

*/

// Loading indicator element
const loadingIndicator = document.getElementById('loading-indicator');
loadingIndicator.style.display = 'block';

// Get the product ID from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// HTML elements to update
const productImage = document.getElementById("productImage");
const productName = document.getElementById("productName");
const productDescription = document.getElementById("productDescription");
const productDiscountedPrice = document.getElementById("productDiscountedPrice");
const productRegularPrice = document.getElementById("productRegularPrice");
const productDetails = document.getElementById("productDetails");
const productFeatures = document.getElementById("productFeatures");
const productColor = document.getElementById("productColor");

// Create the "Add to Bag" button element
const addToBagButton = document.createElement("button");
addToBagButton.textContent = "Add to Bag";
addToBagButton.classList.add("addtobag-button", "button"); // Add CSS classes for styling

addToBagButton.addEventListener("click", () => {
  // Retrieve the product information from the page
  const productInfo = {
    id: productId,
    title: productDescription.textContent,
    price: productRegularPrice.textContent,
    discountedPrice: productDiscountedPrice.textContent,
    image: productImage.src,
  };

  // Check if there is an existing cart in local storage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Add the selected product to the cart
  cart.push(productInfo);

  // Update the cart in local storage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Increment the count in local storage
  let itemCount = localStorage.getItem("itemCount");
  itemCount = itemCount ? parseInt(itemCount) + 1 : 1;
  localStorage.setItem("itemCount", itemCount);

  // Continue shopping or go to the cart
  const confirmationMessage = "Product added to your bag! What would you like to do next?";
  const continueShopping = confirm(`${confirmationMessage}\n\nClick 'OK' to continue shopping or 'Cancel' to go to the bag.`);

  if (!continueShopping) {
    // Redirect the user to the cart or perform other actions
    window.location.href = "bag.html"; 
  } else {
    // Refresh the page if the user chooses to continue shopping
    window.location.reload();
  }
});

// Append the button to the product page
document.querySelector(".product-info-container").appendChild(addToBagButton);

// Fetch product details using the product ID
fetch(`https://sandernilsen.com/wp-json/wc/store/products/${productId}`)
  .then((response) => response.json())
  .then((product) => {
    // Update the HTML elements with the retrieved data
    productImage.src = product.images[0].src;
    productImage.alt = product.description;
    productName.textContent = product.name;
    productDescription.innerHTML = product.short_description;
    productDiscountedPrice.textContent = `${product.prices.sale_price} kr`;
    productColor.textContent = product.base_color;


    if (product.on_sale) {
      productDiscountedPrice.textContent = `${product.prices.sale_price} kr`;
      productRegularPrice.innerHTML = `<s>${product.prices.regular_price} kr</s>`;
    } else {
      productRegularPrice.textContent = `${product.prices.regular_price} kr`;
      productRegularPrice.style.textDecoration = "none";
      productDiscountedPrice.style.display = "none";
    }

    productDetails.innerHTML = product.description;

    loadingIndicator.style.display = 'none';
  })
  .catch((error) => {
    console.error("Error fetching product data:", error);
    loadingIndicator.style.display = 'none';

    // Display the error message
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "Error: Product not found";
    errorMessage.style.display = 'block';
  });

