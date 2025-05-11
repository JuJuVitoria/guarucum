import { proximoSlide, slideAtual } from './carrossel.js';
import { alternarMenuMobile } from './menuMobile.js';

document.querySelector("#btnProximo").addEventListener("click", () => proximoSlide(1));
document.querySelector("#btnAnterior").addEventListener("click", () => proximoSlide(-1));

alternarMenuMobile();