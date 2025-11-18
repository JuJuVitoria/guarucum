import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import logo from "@/assets/icon/logoGuarucumOlho.svg";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import "./SiteFooter.scss"

export default function SiteFooter() {
  return (
    <footer
      className="pt-4 mt-5"
      style={{ backgroundColor: "var(--bg-header)", color: "var(--text-color)" }}
    >
      <Container className="pb-3">

        {/* Linha superior */}
        <Row className="align-items-center text-center text-md-start">

          {/* Logo + slogan */}
          <Col md={4} className="mb-3 mb-md-0 d-flex flex-column flex-md-row align-items-center">
            <img
              src={logo}
              className="footer-logo-olho me-md-2 mb-2 mb-md-0"
              alt="Logo Guarucum"
              width={40}
              height={40}
            />
            <p className="m-0 fw-semibold">Preservar é resistir</p>
          </Col>

          {/* Navegação */}
          <Col md={8} className="d-flex justify-content-md-end justify-content-center">
            <nav>
              <ul className="list-unstyled d-flex gap-4 mb-0">
                <li>
                  <Link className="footer-link" to="/">Início</Link>
                </li>
                <li>
                  <Link className="footer-link" to="/contato">Contato</Link>
                </li>
                <li>
                  <Link className="footer-link" to="/sobre-pfnms">Sobre PFNMs</Link>
                </li>
              </ul>
            </nav>
          </Col>

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