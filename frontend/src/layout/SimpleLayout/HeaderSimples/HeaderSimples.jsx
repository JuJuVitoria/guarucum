import React from "react"; 
import { Button } from "react-bootstrap";
import logo from "@/assets/icon/logoGuarucumOlho.svg";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "@/context/ThemeContext";
import "./HeaderSimples.scss";

export const HeaderSimples = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
    const ThemeIcon = theme === "light" ? MdOutlineLightMode : MdOutlineDarkMode;

    return (
        <header className="site-header-wrapper">
            <div className="site-header px-3" style={{ backgroundColor: "var(--bg-header)" }}>

                {/* Logo */}
                <img
                    src={logo}
                    alt="Logo Guarucum"
                    width="36"
                    height="36"
                    className="logo"
                />

                {/* Botão tema */}
                <div className="cabecalho-direita d-flex align-items-center">

                    <Button
                        onClick={toggleTheme}
                        className="d-flex align-items-center justify-content-center p-0"
                        style={{
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            backgroundColor: "var(--btn-color)",
                            border: "none"
                        }}
                    >
                        <ThemeIcon size={20} color="var(--text-color)" />
                    </Button>

                </div>
            </div>
        </header>
    );
}