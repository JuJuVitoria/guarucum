import React, { useState } from "react";
import logo from "../../../../assets/icon/logoGuarucumOlho.svg"
import { MdDarkMode, MdSunny } from "react-icons/md";

export default function SimpleLayout() {
    const [modoEscuro, setModoEscuro] = useState(false);

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
        <header className={`header 'header--menu-ativo' : ''}`}>
            <img src={logo} alt="Logo Olho Guarucum" className="logo-cabecalho" />

            <div className="cabecalho-direita">
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
        </header >
    )
}