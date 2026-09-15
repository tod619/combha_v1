document.addEventListener('DOMContentLoaded', function () {
  // Navbar mobile
  const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar__mobile-menu-items');

  toggleButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
});
