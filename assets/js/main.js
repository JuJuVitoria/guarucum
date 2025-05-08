import { proximoSlide, slideAtual } from './carrossel.js';

document.querySelector("#btnProximo").addEventListener("click", () => proximoSlide(1));
document.querySelector("#btnAnterior").addEventListener("click", () => proximoSlide(-1));