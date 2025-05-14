export function aplicarTema(tema) {
  const html = document.documentElement;
  const btnLight = document.querySelector(".btn-modo-light");
  const btnDark = document.querySelector(".btn-modo-dark");

  html.setAttribute("data-theme", tema);
  localStorage.setItem("tema", tema);

  if (tema === "escuro") {
    btnLight.style.opacity = "1";
    btnLight.style.pointerEvents = "auto";
    btnDark.style.opacity = "0";
    btnDark.style.pointerEvents = "none";
  } else {
    btnLight.style.opacity = "0";
    btnLight.style.pointerEvents = "none";
    btnDark.style.opacity = "1";
    btnDark.style.pointerEvents = "auto";
  }
}

export function detectarTemaInicial() {
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo) return temaSalvo;

  const prefereEscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefereEscuro ? "escuro" : "claro";
}