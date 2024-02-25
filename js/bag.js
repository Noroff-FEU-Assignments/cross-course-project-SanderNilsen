// Get the cart items from local storage
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const bagContainer = document.querySelector(".bag-container");

// Update the <h1> element to display the item count
const bagTitle = document.querySelector(".top-main-nav");
bagTitle.textContent = `Your bag (${cart.length})`;

// Create elements for each item
cart.forEach((item) => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product1");

  const productImage = document.createElement("img");
  productImage.classList.add("product_img");
  productImage.src = item.image;
  productImage.alt = item.name;

  const informationsDiv = document.createElement("div");
  informationsDiv.classList.add("informations");

  const productName = document.createElement("p");
  productName.textContent = item.title;
  
  const productDescription = document.createElement("p");

  const priceInfo = document.createElement("p");
  priceInfo.innerHTML = `<span id="productDiscountedPrice">${item.discountedPrice} </span> <s id="productRegularPrice">${item.price} </s>`;

  const removeLink = document.createElement("button");
  // Add remove the item from the cart
  removeLink.addEventListener("click", () => {
    // Find the item in the cart
    const index = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      // Remove the item from the cart
      cart.splice(index, 1);

      // Update the cart in local storage
      localStorage.setItem("cart", JSON.stringify(cart));

      // Remove the item's element from the bag
      bagContainer.removeChild(productDiv);

      // Update the item count
      const itemCount = cart.length;
      localStorage.setItem("itemCount", itemCount);

      // Update the item count displayed in the header
      const itemCountElement = document.getElementById("bag-count");
      if (itemCount > 0) {
        itemCountElement.textContent = itemCount;
      } else {
        itemCountElement.textContent = "";
      }
    }
  });

  // "Go to Checkout" button
  const checkoutButton = document.getElementById("checkout-button");
  checkoutButton.addEventListener("click", () => {
    window.location.href = "checkout.html";
  });

  const removeText = document.createElement("p");
  removeText.classList.add("remove-item");
  removeText.textContent = "x Remove";

  removeLink.appendChild(removeText);

  informationsDiv.appendChild(productName);
  informationsDiv.appendChild(productDescription);
  informationsDiv.appendChild(priceInfo);
  informationsDiv.appendChild(removeLink);

  productDiv.appendChild(productImage);
  productDiv.appendChild(informationsDiv);

  bagContainer.appendChild(productDiv);
});
