// Selecting the mobile menu button and navbar links
const mobileMenu = document.getElementById("mobile-menu");
const navbarLinks = document.getElementById("navbar-links");

// Toggle active class to show/hide menu on click
mobileMenu.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
