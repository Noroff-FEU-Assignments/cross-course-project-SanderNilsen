//  Slider constants and variables
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
const container = document.querySelector('.sale-container');

let currentIndex = 0;

// Move to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

// Update the slider position
function updateSlider() {
    const translateX = -currentIndex * 100;
    slider.style.transform = 'translateX(' + translateX + '%)';
}

// Automatically switch to the next slide every 5 seconds
setInterval(nextSlide, 5000);

// Loading indicator
const loadingIndicator = document.getElementById('loading-indicator');
loadingIndicator.style.display = 'block'; 

// Fetch data from the Noroff API
fetch('https://api.noroff.dev/api/v1/rainy-days')
  .then(response => response.json())
  .then(data => {
    // Filter products where "onSale" is true
    const onSaleProducts = data.filter(product => product.onSale === true);

    // Create HTML elements for on-sale products
    onSaleProducts.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('sale-product');

      const productImage = document.createElement('img');
      productImage.classList.add('sale-img');
      productImage.src = product.image;
      productImage.alt = 'Sale-Product';

      const productTitle = document.createElement('h3');
      productTitle.classList.add('sale-title');
      productTitle.textContent = product.title;

      const priceParagraph = document.createElement('p');
      priceParagraph.classList.add('sale-price');
      priceParagraph.textContent = `${product.price} kr`;

      const discountedPriceParagraph = document.createElement('p');
      discountedPriceParagraph.classList.add('sale-discountedPrice');
      discountedPriceParagraph.textContent = `${product.discountedPrice} kr`;

      const productLink = document.createElement('a');
      productLink.href = `product.html?id=${product.id}`;
      productLink.textContent = 'View Details';

      productDiv.appendChild(productImage);
      productDiv.appendChild(productTitle);
      productDiv.appendChild(priceParagraph);
      productDiv.appendChild(discountedPriceParagraph);
      productDiv.appendChild(productLink);

      container.appendChild(productDiv);
    });

    loadingIndicator.style.display = 'none';
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    loadingIndicator.style.display = 'none';
  });
