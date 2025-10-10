import React, { useState } from 'react';
import logo from "../../../assets/icon/logoGuarucumOlho.svg"
import { MdDarkMode, MdSunny } from "react-icons/md";
import './SiteHeader.scss';
import { Link } from 'react-router-dom';

export default function SiteHeader() {
  const [menuAtivo, setMenuAtivo] = useState(false);
  const [modoEscuro, setModoEscuro] = useState(false);

  const alternarMenu = () => {
    setMenuAtivo(!menuAtivo);
  };

  const alternarTema = () => {
    setModoEscuro(!modoEscuro);
    const html = document.documentElement;
    if (!modoEscuro) {
      html.setAttribute('data-theme', 'escuro');
    } else {
      html.setAttribute('data-theme', 'claro');
    }
  };

  React.useEffect(() => {
    // Seta o tema inicial na carga
    document.documentElement.setAttribute('data-theme', modoEscuro ? 'escuro' : 'claro');
  }, [modoEscuro]);

  return (
    <header className={`header ${menuAtivo ? 'header--menu-ativo' : ''}`}>
      <img src={logo} alt="Logo Olho Guarucum" className="logo-cabecalho" />

      <div className="cabecalho-direita">
        <nav className="navegacao">
          <div className="controle-menu-mobile">
            <button
              aria-label="Abrir menu"
              className={`btn-abrir-menu ${menuAtivo ? 'oculto' : ''}`}
              onClick={alternarMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 -960 960 960">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </button>
            <button
              aria-label="Fechar menu"
              className={`btn-fechar-menu ${menuAtivo ? '' : 'oculto'}`}
              onClick={alternarMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 -960 960 960">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </button>
          </div>

          <div className={`menu-navegacao ${menuAtivo ? 'menu-ativo' : ''}`}>
            <ul className="lista-navegacao">
              <li><Link to="/">Início</Link></li>
              <li><Link to="/contato">Contato</Link></li>
              <li><Link to="/sobre-pfnms">Sobre PFNMs</Link></li>
            </ul>

            <div className="linha-divisoria"></div>

            <div className="botoes-finais">
              <div className="area-autenticacao">
                <Link to="/auth" className='botao-entrar'>Entrar</Link>
                <Link to="/auth">Cadastrar</Link>
              </div>

              <div className="controle-tema">
                <button onClick={alternarTema} aria-label="Alternar tema" className={modoEscuro ? 'ativo' : ''}>
                  {modoEscuro ? (
                    <MdSunny size={24} color="#e3e3e3" />
                  ) : (
                    <MdDarkMode size={24} color="#e3e3e3" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}