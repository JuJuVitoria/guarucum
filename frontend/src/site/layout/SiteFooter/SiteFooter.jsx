import { Link } from "react-router-dom";
import logo from "../../../assets/icon/logoGuarucumOlho.svg"
import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function SiteFooter() {
    return (
        <footer className="bg-dark text-light pt-4 mt-5">
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center footer-flex">
                {/* Logo e Slogan */}
                <div className="d-flex flex-column flex-md-row align-items-center mb-3 mb-md-0">
                    <div className="footer-logo d-flex align-items-center me-md-3">
                        <img
                            src={logo}
                            className="footer-logo-olho ms-2"
                            alt="Guarucum logo - olho"
                            width={35}
                            height={35}
                        />
                    </div>
                    <p className="footer-slogan mb-0 mt-3 mt-md-0">Preservar é resistir</p>
                </div>

                {/* Navegação footer */}
                <nav className="footer-nav">
                    <ul className="list-unstyled d-flex gap-3 mb-0">
                        <li>
                            <Link to="/" className="text-light text-decoration-none">
                                Início
                            </Link>
                        </li>
                        <li>
                            <Link to="/contato" className="text-light text-decoration-none">
                                Contato
                            </Link>
                        </li>
                        <li>
                            <Link to="/sobre-pfnms" className="text-light text-decoration-none">
                                Sobre PFNMs
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Separador visual - horizontal */}
            <hr className="my-3 border-light opacity-25" />

            {/* Contato e redes sociais */}
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center pb-4">
                {/* Redes sociais */}
                <div className="d-flex gap-3 mb-3 mb-md-0">
                    {/* Instagram */}
                    <a href="https://www.instagram.com/guarucum/" target="_blank" rel="noopener noreferrer" className="text-light">
                        <FaInstagram size={30}/>
                    </a>

                    {/* Youtube */}
                    <a href="https://www.youtube.com/@Guarucum" target="_blank" rel="noopener noreferrer" className="text-light">
                        <FaYoutube size={30}/>
                    </a>
                </div>

                {/* Email */}
                <p className="mb-0">guarucum@gmail.com</p>
            </div>
        </footer>
    );
}