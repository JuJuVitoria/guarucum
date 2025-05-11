export function alternarMenuMobile() {
  const botaoAbrir = document.getElementById('abrirMenu');
  const botaoFechar = document.getElementById('fecharMenu');
  const menu = document.getElementById('menuNavegacao');
  const header = document.querySelector('header');

  botaoAbrir.addEventListener('click', () => {
    menu.classList.add('menu-ativo');
    header.classList.add('header--menu-ativo');
    botaoAbrir.style.opacity = 0;
    botaoFechar.style.opacity = 1;
    botaoFechar.style.pointerEvents = 'auto';
  });

  botaoFechar.addEventListener('click', () => {
    menu.classList.remove('menu-ativo');
    header.classList.remove('header--menu-ativo');
    botaoAbrir.style.opacity = 1;
    botaoFechar.style.opacity = 0;
    botaoFechar.style.pointerEvents = 'none';
  });
}