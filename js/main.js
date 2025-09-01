const menu = document.querySelector("#menu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const menuItems = document.querySelectorAll("#menu .lista-menu a");

abrir.addEventListener("click", () => {
  menu.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  menu.classList.remove("visible");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("visible");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const sectionInicio = document.querySelector(".section-inicio");

  const ajustarPadding = () => {
    const alturaHeader = header.offsetHeight;
    sectionInicio.style.paddingTop = `${alturaHeader}px`;
  };

  ajustarPadding();
  window.addEventListener("resize", ajustarPadding);
});

const parte1 = "consultas";
const parte2 = "mpestudiodisenio";
const parte3 = "com.ar";
const email = `${parte1}@${parte2}.${parte3}`;

const emailText = document.getElementById("email-text");
emailText.innerHTML = `<a href="mailto:${email}">${email}</a>`;

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const sliderContainer = document.querySelector('.slider-container');

let currentSlide = 0;

function isMobile() {
  return window.innerWidth < 1024;
}

// Mostrar solo una slide en mobile
function showSlide(index) {
  if (isMobile()) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      dots[i].classList.remove('active');
    });

    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  }
}

// Botones dots (solo en mobile)
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    if (isMobile()) {
      const index = parseInt(dot.getAttribute('data-slide'));
      showSlide(index);
    }
  });
});

// Botones flecha
prev.addEventListener('click', () => {
  if (isMobile()) {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(newIndex);
  } else {
    sliderContainer.scrollBy({ left: -320, behavior: 'smooth' });
  }
});

next.addEventListener('click', () => {
  if (isMobile()) {
    const newIndex = (currentSlide + 1) % slides.length;
    showSlide(newIndex);
  } else {
    sliderContainer.scrollBy({ left: 320, behavior: 'smooth' });
  }
});

// Iniciar
window.addEventListener('load', () => {
  if (isMobile()) showSlide(0);
});

// Si se redimensiona la pantalla (de desktop a mobile por ejemplo)
window.addEventListener('resize', () => {
  if (isMobile()) {
    showSlide(currentSlide);
  }
});



document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.carousel-slide');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);

  showSlide(currentIndex); // Muestra la primera diapositiva al cargar la página
});

