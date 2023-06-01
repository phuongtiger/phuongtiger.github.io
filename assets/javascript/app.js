
//Open menu

var overlay = document.getElementById('overlay');
var menuToggle = document.querySelector('.menu-toggle');
var menu = document.querySelector('.menu');
var menu_close = document.querySelector('.menu-close');
menuToggle.addEventListener('click', function () {
  var element = document.documentElement; // Hoặc document.body cho trình duyệt cũ
  element.scrollIntoView({
    behavior: "smooth" // Sử dụng hiệu ứng mượt khi scroll
  });
  overlay.style.display = 'block';
  menu.style.display = 'block';
  setTimeout(function(){
    menu.style.transform = 'scale(1.1)';
  }, 100);
  setTimeout(function(){
    menu.style.transform = 'scale(1)';
  }, 500);
  document.body.style.overflow = 'hidden';
});

menu_close.addEventListener('click', function () {
  overlay.style.display = 'none';
  setTimeout(function(){
    menu.style.transform = 'scale(0.1)';
  }, 100);
  setTimeout(function(){
    menu.style.display = 'none';
  }, 500);
  document.body.style.overflow = 'auto';
});

// Reload page animation

document.addEventListener('DOMContentLoaded', function () {
  var elements = document.querySelectorAll('.animate');
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.opacity = '1';
    elements[i].style.transform = 'translateY(0)';
  }
});

//Scroll page animation

window.addEventListener('scroll', function () {
  var images = document.querySelectorAll('.animate-on-scroll');

  for (var i = 0; i < images.length; i++) {
    var imagePosition = images[i].getBoundingClientRect().top;
    var windowHeight = window.innerHeight-200;

    if (imagePosition <= windowHeight) {
      images[i].style.opacity = '1';
      images[i].style.transform = 'translateY(0)';
    }
  }
});


// Scroll to the top function
function scrollToTop() {
  var currentPosition = window.pageYOffset; // Vị trí hiện tại của scroll
  var duration = 500; // Thời gian diễn ra hiệu ứng scroll (miliseconds)
  var start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    var easeInOutQuad = progress / duration;

    window.scrollTo(0, currentPosition * (1 - easeInOutQuad));

    if (progress < duration) {
      window.requestAnimationFrame(step);
    } else {
      window.scrollTo(0, 0); // Scroll đến đầu trang khi hoàn thành
    }
  }

  window.requestAnimationFrame(step);
}
function goToHomePage() {
  window.location.href = "index.html";
}