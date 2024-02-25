//Hamburger-menu

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Select the bag icon and the count element
const bagIcon = document.querySelector('.nav-right a img');
const itemCountElement = document.getElementById('bag-count');

// Retrieve the count from local storage
const itemCount = localStorage.getItem('itemCount');

// Update the count element with the item count
if (itemCount) {
  itemCountElement.textContent = itemCount;
  bagIcon.alt = `Bag Icon with ${itemCount} items`;
} else {
  itemCountElement.textContent = '';
  bagIcon.alt = 'Bag Icon';
}
