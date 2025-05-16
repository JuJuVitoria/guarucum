import { aplicarTema, detectarTemaInicial } from './tema.js';

document.addEventListener("DOMContentLoaded", () => {
  const tema = detectarTemaInicial();
  aplicarTema(tema);

  const btnLight = document.querySelector(".btn-modo-light");
  const btnDark = document.querySelector(".btn-modo-dark");

  btnLight.addEventListener("click", (e) => {
    e.preventDefault();
    aplicarTema("claro");
  });

  btnDark.addEventListener("click", (e) => {
    e.preventDefault();
    aplicarTema("escuro");
  });
});