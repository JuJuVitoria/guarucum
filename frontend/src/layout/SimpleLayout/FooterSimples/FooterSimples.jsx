import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import logo from "@/assets/icon/logoGuarucumOlho.svg";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export const FooterSimples = () => {
    return (
        <footer
            className="pt-4 mt-5"
            style={{ backgroundColor: "var(--bg-header)", color: "var(--text-color)" }}
        >
            <Container className="pb-3">

                {/* Linha superior */}
                <Row className="align-items-center text-center">
                    {/* Logo + slogan */}
                    <img
                        src={logo}
                        className="footer-logo-olho me-md-2 mb-2 mb-md-0"
                        alt="Logo Guarucum"
                        width={40}
                        height={40}
                    />
                    <p className="mt-2 fw-semibold">Preservar é resistir</p>
                </Row>
            </Container>

            <hr className="my-2 opacity-25" style={{ borderColor: "var(--text-color)" }} />

            <Container>
                <Row className="py-3 align-items-center text-center text-md-start">

                    {/* Redes sociais */}
                    <Col md={6} className="mb-3 mb-md-0 d-flex justify-content-center justify-content-md-start gap-4">
                        <a
                            href="https://www.instagram.com/guarucum/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram Guarucum"
                            className="footer-icon"
                        >
                            <FaInstagram size={30} />
                        </a>

                        <a
                            href="https://www.youtube.com/@Guarucum"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube Guarucum"
                            className="footer-icon"
                        >
                            <FaYoutube size={30} />
                        </a>
                    </Col>

                    {/* Email */}
                    <Col md={6} className="d-flex justify-content-center justify-content-md-end">
                        <p className="m-0 fw-medium">guarucum@gmail.com</p>
                    </Col>

                </Row>
            </Container>
        </footer>
    );
}