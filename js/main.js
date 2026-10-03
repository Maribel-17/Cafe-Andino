// ========================================
// MENÚ MOBILE
// ========================================

const menu = document.querySelector("#menu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const menuItems = document.querySelectorAll("#menu .lista-menu a");


// Abrir menú
abrir.addEventListener("click", () => {
  menu.classList.add("visible");
});


// Cerrar menú
cerrar.addEventListener("click", () => {
  menu.classList.remove("visible");
});


// Cerrar menú al seleccionar un enlace
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("visible");
  });
});





// ========================================
// GALERÍA
// ========================================

const galeriaTrack = document.querySelector(".galeria-track");
const galeriaSlides = document.querySelectorAll(".galeria-slide");

const botonAnterior = document.querySelector(".galeria-prev");
const botonSiguiente = document.querySelector(".galeria-next");

const contenedorIndicadores = document.querySelector(
  ".galeria-indicadores"
);


let posicionActual = 0;


// ========================================
// CANTIDAD DE IMÁGENES VISIBLES
// ========================================

function obtenerSlidesVisibles() {

  if (window.innerWidth >= 1024) {
    return 4;
  }

  if (window.innerWidth >= 768) {
    return 2;
  }

  return 1;
}


// ========================================
// ACTUALIZAR GALERÍA
// ========================================

function actualizarGaleria() {

  const slidesVisibles = obtenerSlidesVisibles();

  const primerSlide = galeriaSlides[0];

  const anchoSlide = primerSlide.getBoundingClientRect().width;

  const estilosTrack = window.getComputedStyle(galeriaTrack);

  const gap = parseFloat(estilosTrack.gap) || 0;


  const desplazamiento =
    posicionActual * (anchoSlide + gap);


  galeriaTrack.style.transform =
    `translateX(-${desplazamiento}px)`;


  const posicionMaxima =
    galeriaSlides.length - slidesVisibles;


  botonAnterior.disabled =
    posicionActual === 0;


  botonSiguiente.disabled =
    posicionActual >= posicionMaxima;


  actualizarIndicadores();
}


// ========================================
// SIGUIENTE
// ========================================

botonSiguiente.addEventListener("click", () => {

  const slidesVisibles = obtenerSlidesVisibles();

  const posicionMaxima =
    galeriaSlides.length - slidesVisibles;


  if (posicionActual < posicionMaxima) {

    posicionActual++;

    actualizarGaleria();
  }

});


// ========================================
// ANTERIOR
// ========================================

botonAnterior.addEventListener("click", () => {

  if (posicionActual > 0) {

    posicionActual--;

    actualizarGaleria();
  }

});


// ========================================
// INDICADORES
// ========================================

function crearIndicadores() {

  contenedorIndicadores.innerHTML = "";


  galeriaSlides.forEach((slide, index) => {

    const indicador =
      document.createElement("button");


    indicador.classList.add(
      "galeria-indicador"
    );


    indicador.type = "button";


    indicador.addEventListener(
      "click",
      () => {

        posicionActual = index;

        const slidesVisibles =
          obtenerSlidesVisibles();

        const posicionMaxima =
          galeriaSlides.length -
          slidesVisibles;


        if (posicionActual > posicionMaxima) {
          posicionActual = posicionMaxima;
        }


        actualizarGaleria();
      }
    );


    contenedorIndicadores.appendChild(
      indicador
    );

  });
}


// ========================================
// ACTUALIZAR INDICADORES
// ========================================

function actualizarIndicadores() {

  const indicadores =
    document.querySelectorAll(
      ".galeria-indicador"
    );


  indicadores.forEach(
    (indicador, index) => {

      indicador.classList.toggle(
        "activo",
        index === posicionActual
      );

    }
  );
}


// ========================================
// RESPONSIVE
// ========================================

window.addEventListener(
  "resize",
  () => {

    const slidesVisibles =
      obtenerSlidesVisibles();

    const posicionMaxima =
      galeriaSlides.length -
      slidesVisibles;


    if (posicionActual > posicionMaxima) {
      posicionActual = posicionMaxima;
    }


    actualizarGaleria();
  }
);


// ========================================
// INICIALIZAR
// ========================================

crearIndicadores();

actualizarGaleria();