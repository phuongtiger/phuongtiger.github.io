var overlay = document.getElementById('overlay');
var menuToggle = document.querySelector('.menu-toggle');
var menu = document.querySelector('.menu');
var menu_close = document.querySelector('.menu-close');
menuToggle.addEventListener('click', function() {
  overlay.style.display = 'block';
  menu.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

menu_close.addEventListener('click', function() {
  overlay.style.display = 'none';
  menu.style.display = 'none';
  document.body.style.overflow = 'auto';
});
