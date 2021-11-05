let burgerIcon = document.getElementById('burger-icon');
let burgerMenu = document.getElementById('burger-menu');

burgerIcon.addEventListener('click', function () {
  burgerMenu.classList.toggle('active');
})

window.addEventListener('resize', function() {
  if (window.matchMedia("(min-width: 1000px)").matches) {
    burgerMenu.classList.remove('active');
  }
})
