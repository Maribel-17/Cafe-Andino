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