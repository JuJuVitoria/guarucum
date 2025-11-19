import { Button, Image, Dropdown } from "react-bootstrap";
import { RiNotification3Line } from "react-icons/ri";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "@/context/ThemeContext";
import { useUser } from "@/context/userContext";
import { useLocation, useNavigate } from "react-router-dom";

const TITLE_MAP = {
    "/app/dashboard": "Dashboard",
    "/app/informativo": "Informativo",
    "/app/estoque": "Estoque",
    "/app/minhas-vendas": "Minhas vendas",
    "/app/territorio": "Território",
};

export const Header = () => {
    const { theme, setTheme } = useTheme();
    const { logout, currentUser } = useUser();
    const navigate = useNavigate();

    const { pathname } = useLocation();

    const pageTitle = TITLE_MAP[pathname] ?? "Name page";

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }
    const ThemeIcon = theme === "light" ? MdOutlineLightMode : MdOutlineDarkMode;

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <header style={{ borderBottom: "1px solid var(--bg-header)", backgroundColor: "var(--bg-header)" }}>
            <div className="d-flex align-items-center justify-content-between container-fluid px-3 px-md-4 py-3">
                <h1 className="m-0" style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}>
                    {pageTitle}
                </h1>

                <div className="d-flex align-items-center gap-2 gap-md-3">
                    <Button onClick={toggleTheme} variant="light" className="d-flex align-items-center justify-content-center p-0"
                        style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "var(--btn-color)", border: "none" }}>
                        <ThemeIcon size={20} color="var(--text-color)" />
                    </Button>

                    <Button variant="light" className="position-relative d-flex align-items-center justify-content-center p-0"
                        style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "var(--btn-color)", border: "none" }}>
                        <RiNotification3Line size={20} color="var(--text-color)" />
                        <span className="position-absolute rounded-circle"
                            style={{ top: 6, right: 6, width: 8, height: 8, background: "#ef4444" }} />
                    </Button>

                    <Dropdown>
                        <Dropdown.Toggle as={Button} variant="light" className="d-flex align-items-center gap-2 px-2 py-1"
                            style={{ backgroundColor: "var(--btn-color)", border: "none", color: "var(--text-color)" }}>
                            <Image roundedCircle width={32} height={32}
                                src={`https://ui-avatars.com/api/?name=${currentUser?.name ?? "User"}&background=random&size=128`}
                                alt="Avatar" />
                            <span className="d-none d-md-inline">{currentUser?.name ?? "User"}</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu align="end" style={{ backgroundColor: "var(--btn-color)", border: "none", color: "var(--text-color)" }}>
                            <Dropdown.Item style={{ color: "var(--text-color)" }}>Perfil</Dropdown.Item>
                            <Dropdown.Item style={{ color: "var(--text-color)" }}>Configurações</Dropdown.Item>
                            <Dropdown.Divider style={{ backgroundColor: "var(--text-color)" }} />
                            <Dropdown.Item onClick={handleLogout} style={{ color: "var(--text-color)" }}>
                                Sair
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </header>
    );
};