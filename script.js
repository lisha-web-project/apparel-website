// Select menu button and navigation
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

// Add click event
menuToggle.addEventListener("click", function() {

    mainNav.classList.toggle("active");

    const isOpen = mainNav.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

});
/* Week 3: Category Filtering */

// Select filter buttons and product cards
const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

// Add click event to each filter button
filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Remove active class from all buttons
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        // Add active class to clicked button
        button.classList.add("active");

        // Get selected category
        const selectedCategory = button.getAttribute("data-filter");

        // Filter product cards
        productCards.forEach(function(card) {

            const cardCategory = card.getAttribute("data-category");

            if (
                selectedCategory === "all" ||
                selectedCategory === "dresses" ||
                selectedCategory === cardCategory
            ) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }

        });

    });

});
/* Week 3: Explore Collection Button */

const exploreButton = document.getElementById("explore-btn");
const collectionSection = document.getElementById("collection");

exploreButton.addEventListener("click", function() {

    collectionSection.scrollIntoView({
        behavior: "smooth"
    });

});