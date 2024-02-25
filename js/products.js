/*
// Loading indicator element
const loadingIndicator = document.getElementById('loading-indicator');

loadingIndicator.style.display = 'block'; 

// Fetch data from the Noroff API
fetch("https://api.noroff.dev/api/v1/rainy-days")
  .then((response) => response.json())
  .then((data) => {
    const productsContainer = document.querySelector(".products_container");

    data.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");

      const productLink = document.createElement("a");
      productLink.href = `product.html?id=${product.id}`;

      const productImage = document.createElement("img");
      productImage.classList.add("product_img");
      productImage.src = product.image;
      productImage.alt = product.title;

      const h3 = document.createElement("h3");
      h3.textContent = product.vendor;

      const productName = document.createElement("p");
      productName.textContent = product.title;

      const priceInfo = document.createElement("p");

      if (product.onSale) {
        priceInfo.innerHTML = `<span class="product-discountedPrice">${product.discountedPrice} kr</span> <s>${product.price} kr</s>`;
      } else {
        priceInfo.innerHTML = product.price;
      }

      const viewDetailsButton = document.createElement("button");
      viewDetailsButton.classList.add("viewdetails");
      viewDetailsButton.textContent = "View Details";
      viewDetailsButton.addEventListener("click", (e) => {
        window.location.href = productLink.href;
      });

      productLink.appendChild(productImage);
      productDiv.appendChild(productLink);
      productDiv.appendChild(h3);
      productDiv.appendChild(productName);
      productDiv.appendChild(priceInfo);
      productDiv.appendChild(viewDetailsButton);

      productsContainer.appendChild(productDiv);
    });
    loadingIndicator.style.display = 'none'; 
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    loadingIndicator.style.display = 'none'; 
  });
*/

// Loading indicator element
const loadingIndicator = document.getElementById('loading-indicator');
loadingIndicator.style.display = 'block';

fetch("https://sandernilsen.com/wp-json/wc/store/products")
  .then((response) => response.json())
  .then((data) => {
    const productsContainer = document.querySelector(".products_container");

    data.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");

      const productLink = document.createElement("a");
      productLink.href = `product.html?id=${product.id}`;

      const productImage = document.createElement("img");
      productImage.classList.add("product_img");
      productImage.src = product.images[0].src;
      productImage.alt = product.description;

      const h3 = document.createElement("h3");
      h3.textContent = product.name;

      const productName = document.createElement("p");
      productName.innerHTML = product.short_description;

      const priceInfo = document.createElement("p");
      if (product.on_sale) {
        priceInfo.innerHTML = `<span class="product-discountedPrice">${product.prices.sale_price} kr</span> <s>${product.prices.regular_price} kr</s>`;
      } else {
        priceInfo.innerHTML = `${product.prices.regular_price} kr`;
      }

      const viewDetailsButton = document.createElement("button");
      viewDetailsButton.classList.add("viewdetails");
      viewDetailsButton.textContent = "View Details";
      viewDetailsButton.addEventListener("click", () => {
        window.location.href = productLink.href;
      });

      productLink.appendChild(productImage);
      productDiv.appendChild(productLink);
      productDiv.appendChild(h3);
      productDiv.appendChild(productName);
      productDiv.appendChild(priceInfo);
      productDiv.appendChild(viewDetailsButton);

      productsContainer.appendChild(productDiv);
    });

    loadingIndicator.style.display = 'none';
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
    loadingIndicator.style.display = 'none';
  });

