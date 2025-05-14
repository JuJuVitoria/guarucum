import { proximoSlide, slideAtual } from './carrossel.js';
import { alternarMenuMobile } from './menuMobile.js';
import { aplicarTema, detectarTemaInicial } from './tema.js';

const btnProximo = document.querySelector("#btnProximo");
const btnAnterior = document.querySelector("#btnAnterior");

if (btnProximo) {
  btnProximo.addEventListener("click", () => proximoSlide(1));
}
if (btnAnterior) {
  btnAnterior.addEventListener("click", () => proximoSlide(-1));
}

alternarMenuMobile();

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
