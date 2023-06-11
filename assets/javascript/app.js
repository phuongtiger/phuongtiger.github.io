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
  setTimeout(function () {
    menu.style.transform = 'scale(1.1)';
  }, 100);
  setTimeout(function () {
    menu.style.transform = 'scale(1)';
  }, 500);
  document.body.style.overflow = 'hidden';
});

menu_close.addEventListener('click', function () {
  overlay.style.display = 'none';
  setTimeout(function () {
    menu.style.transform = 'scale(0.1)';
  }, 100);
  setTimeout(function () {
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
    var windowHeight = window.innerHeight - 200;

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
function goToHomePage(href) {
  window.location.href = href;
}

// Hover element

var overlay_hover = document.querySelectorAll('.animate-hover-overlay');
var button_hover = document.querySelectorAll('.animate-hover-button');

// Lặp qua từng phần tử và gắn sự kiện hover
for (var i = 0; i < overlay_hover.length; i++) {
  overlay_hover[i].addEventListener("mouseenter", function () {
    this.style.background = 'rgba(0, 0, 0, 0.5)';
    var button = this.parentElement.querySelector('.animate-hover-button');
    if (button) {
      button.style.transform = 'scale(1.2)';
    }
  });
  overlay_hover[i].addEventListener("mouseleave", function () {
    this.style.background = 'rgba(0, 0, 0, 0)';
    var button = this.parentElement.querySelector('.animate-hover-button');
    if (button) {
      button.style.transform = 'scale(1)';
    }
  });
  button_hover[i].addEventListener("mouseenter", function () {
    var overlay = this.closest('.work-box').querySelector('.animate-hover-overlay');
    if (overlay) {
      overlay.style.background = 'rgba(0, 0, 0, 0.5)';
    }
    this.style.transform = 'scale(1.2)';
  });

  button_hover[i].addEventListener("mouseleave", function () {
    var overlay = this.closest('.work-box').querySelector('.animate-hover-overlay');
    if (overlay) {
      overlay.style.background = 'rgba(0, 0, 0, 0)';
    }
    this.style.transform = 'scale(1)';
  });
}

// Click to change URL

function clickToChange(href) {
  window.location.href = href;
}

// slider

var slider = document.querySelector('.b-box-list');
var prevBtn = document.querySelector('.b-button-prev');
var nextBtn = document.querySelector('.b-button-next');
var currentIndex = 0;

prevBtn.addEventListener('click', function () {
  var sliderElements = document.querySelectorAll('.b-box-item');
  slider.insertBefore(sliderElements[sliderElements.length-1], sliderElements[0]);
});

nextBtn.addEventListener('click', function () {
  var sliderElements = document.querySelectorAll('.b-box-item');
  slider.insertBefore(sliderElements[0], sliderElements[sliderElements.length]);
});extBtn