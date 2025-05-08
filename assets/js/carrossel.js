let slideIndex = 1;
mostraSlide(slideIndex);

export function proximoSlide(n) {
    mostraSlide(slideIndex += n);
}

export function slideAtual(n) {
    mostraSlide(slideIndex = n);
}

function mostraSlide(n) {
    const slides = document.getElementsByClassName("slide");
    const indicadores = document.getElementsByClassName("indicador");

    if (n > slides.length) {
    // Se n (o index do slide) for maior que a quantidade de slides slideIndex recebe 1, ou seja, retorna para o primeiro slide
        slideIndex = 1;
    }
    if (n < 1) {
    // Se n (o index do slide) for menor que 1 slideIndex recebe a quantidades total de slides, ou seja, retorna para o último slide
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < indicadores.length; i++) {
        indicadores[i].className = indicadores[i].className.replace(" ativo", "");
    }

    slides[slideIndex - 1].style.display = "block";
    indicadores[slideIndex - 1].className += " ativo";
}

// Vincula os cliques nos indicadores
const indicadores = document.querySelectorAll(".indicador");
indicadores.forEach((indicador, index) => {
    indicador.addEventListener("click", () => {
        slideAtual(index + 1);
    });
});