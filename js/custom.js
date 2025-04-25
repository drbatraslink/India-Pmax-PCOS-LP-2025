// Google rating carousel initialization
$('#googlerating_slider').owlCarousel({
  loop: true,
  responsiveClass: true,
  nav: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 8000,
  smartSpeed: 400,
  navText: [
    "<img src='images/previmage.webp' alt='004 prev' width='50' height='50' />",
    "<img src='images/nextimage.webp' alt='004 next' width='50' height='50' />"
  ],
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
    1200: { items: 3 }
  }
});

// Set ARIA role for navigation buttons
$(".owl-nav .owl-prev").attr("role", "button");
$(".owl-nav .owl-next").attr("role", "button");

// Scroll to top button logic
const scrollToTopBtn = document.querySelector('.scrollToTopBtn');
const rootElement = document.documentElement;

function handleScroll() {
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  scrollToTopBtn.classList.toggle('showBtn', rootElement.scrollTop / scrollTotal > 0.02);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

scrollToTopBtn.addEventListener('click', scrollToTop);
window.addEventListener('scroll', handleScroll);

// Open & Close Form
function openForm() {
  document.getElementById("myForm").style.display = "block";
  $("#myForm .myForm-top-form").append($(".form-top-new"));
  $(".contactFormHolder .contactForm").hide();
}

function closeForm() {
  $(".contactFormHolder .contactForm").show().append($(".form-top-new"));
  document.getElementById("myForm").style.display = "none";
}

// Popup Video Initialization (Vimeo)
$(function () {
  $(".popup-vimeo").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: true
  });
});

// Popup Video Initialization (YouTube)
$(document).ready(function () {
  $(".popup-youtube").magnificPopup({
    type: "iframe",
    iframe: {
      patterns: {
        youtube: {
          index: "youtube.com/embed/",
          id: function (url) {
            return url;
          },
          src: "%id%"
        }
      }
    },
    mainClass: "mfp-fade",
    preloader: false,
    fixedContentPos: false
  });
});

// Accordion functionality
const togglers = document.querySelectorAll('[data-bs-toggle]');
togglers.forEach((btn) => {
  const targetBlock = document.querySelector(btn.dataset.bsToggle);

  if (btn.classList.contains('active')) {
    targetBlock.style.maxHeight = targetBlock.scrollHeight + 'px';
    btn.closest('.accordion__item').classList.add('active');
  }

  btn.addEventListener('click', (e) => {
    const currentBtn = e.currentTarget;
    const block = document.querySelector(currentBtn.dataset.bsToggle);

    if (currentBtn.classList.contains('active')) {
      block.style.maxHeight = '';
      currentBtn.closest('.accordion__item').classList.remove('active');
    } else {
      block.style.maxHeight = block.scrollHeight + 'px';
      currentBtn.closest('.accordion__item').classList.add('active');
    }

    currentBtn.classList.toggle('active');

    document.querySelectorAll('.accordion__header').forEach((header) => {
      if (header !== currentBtn) {
        header.classList.remove('active');
        const otherBlock = document.querySelector(header.dataset.bsToggle);
        otherBlock.style.maxHeight = '';
        header.closest('.accordion__item').classList.remove('active');
      }
    });
  });
});
