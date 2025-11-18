import { useState } from "react";
import { Navbar, Container, Nav, Offcanvas, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "@/assets/icon/logoGuarucumOlho.svg";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "@/context/ThemeContext";
import "./SiteHeader.scss";

export const SiteHeader = () => {
  const [show, setShow] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const ThemeIcon = theme === "light" ? MdOutlineLightMode : MdOutlineDarkMode;

  return (
    <header className="site-header-wrapper">
      <Navbar
        expand="md"
        className="site-header shadow-sm px-3"
        style={{ backgroundColor: "var(--bg-header)" }}
      >
        <Container fluid className="d-flex align-items-center">

          {/* Logo */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src={logo}
              alt="Logo Guarucum"
              width="32"
              height="32"
              className="me-2"
            />
          </Navbar.Brand>

          {/* Botão mobile */}
          <Navbar.Toggle
            aria-controls="menu-mobile"
            onClick={() => setShow(true)}
            className="border-0"
          />

          {/* Menu desktop */}
          <Navbar.Collapse className="justify-content-end d-none d-md-flex">
            <Nav className="align-items-center gap-3">

              <Nav.Link as={Link} to="/" className="nav-link-custom">Início</Nav.Link>
              <Nav.Link as={Link} to="/contato" className="nav-link-custom">Contato</Nav.Link>
              <Nav.Link as={Link} to="/sobre-pfnms" className="nav-link-custom">Sobre PFNMs</Nav.Link>

              <div className="d-flex align-items-center gap-2 ms-3">

                {/* Botões de autenticação */}
                <Button variant="danger">
                  <Link to="/auth" style={{color: "white", textDecoration: "none"}}>Entrar</Link>
                </Button>
                <Button variant="danger">
                  <Link to="/auth" style={{color: "white", textDecoration: "none"}}>Cadastrar</Link>
                </Button>

                {/* Tema */}
                <Button
                  onClick={toggleTheme}
                  variant="light"
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Menu Mobile (Offcanvas) */}
      <Offcanvas
        id="menu-mobile"
        show={show}
        onHide={() => setShow(false)}
        placement="top"
        className="offcanvas-menu"
        style={{ backgroundColor: "var(--bg-header)", color: "var(--text-color)" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="d-flex align-items-center">
            <img src={logo} alt="Logo" width="28" height="28" className="me-2" />
            Menu
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="d-flex flex-column align-items-center gap-4">

          <Nav className="flex-column text-center gap-3 w-100">
            <Nav.Link as={Link} to="/" onClick={() => setShow(false)} className="nav-link-custom">
              Início
            </Nav.Link>
            <Nav.Link as={Link} to="/contato" onClick={() => setShow(false)} className="nav-link-custom">
              Contato
            </Nav.Link>
            <Nav.Link as={Link} to="/sobre-pfnms" onClick={() => setShow(false)} className="nav-link-custom">
              Sobre PFNMs
            </Nav.Link>
          </Nav>

          <div className="d-flex flex-column gap-3 w-100 px-4">

            {/* Autenticação */}
            <Link to="/auth" className="btn-auth-outline w-100">Entrar</Link>
            <Link to="/auth" className="btn-auth-fill w-100">Cadastrar</Link>

            {/* Tema */}
            <Button
              onClick={toggleTheme}
              className="btn-theme mx-auto mt-2"
              style={{ backgroundColor: "var(--btn-color)" }}
            >
              <ThemeIcon size={22} color="var(--text-color)" />
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};