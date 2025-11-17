import { Button, Image, Dropdown } from "react-bootstrap";
import { RiNotification3Line } from "react-icons/ri";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "@/context/ThemeContext";

export const Header = () => {
    const { theme, setTheme } = useTheme();

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }

    const ThemeIcon = theme === "light" ? MdOutlineLightMode : MdOutlineDarkMode;

    return (
        <header
            style={{ borderBottom: "1px solid var(--bg-header)", backgroundColor: "var(--bg-header)" }}
        >
            <div className="d-flex align-items-center justify-content-between container-fluid px-3 px-md-4 py-3">

                {/* TÍTULO */}
                <h1 className="m-0" style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}>
                    Name page
                </h1>

                <div className="d-flex align-items-center gap-2 gap-md-3">

                    {/* BOTÃO DE TEMA */}
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

                    {/* NOTIFICAÇÕES */}
                    <Button
                        variant="light"
                        className="position-relative d-flex align-items-center justify-content-center p-0"
                        style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "var(--btn-color)", border: "none" }}
                    >
                        <RiNotification3Line size={20} color="var(--text-color)" />
                        <span
                            className="position-absolute rounded-circle"
                            style={{
                                top: 6,
                                right: 6,
                                width: 8,
                                height: 8,
                                background: "#ef4444",
                            }}
                        />
                    </Button>

                    {/* AVATAR */}
                    <Dropdown>
                        <Dropdown.Toggle
                            as={Button}
                            variant="light"
                            className="d-flex align-items-center gap-2 px-2 py-1"
                            style={{ backgroundColor: "var(--btn-color)", border: "none", color: "var(--text-color)" }}
                        >
                            <Image
                                roundedCircle
                                width={32}
                                height={32}
                                src={`https://ui-avatars.com/api/?name=${"UserTest"}&background=random&size=128`}
                                alt="Avatar"
                            />
                            <span className="d-none d-md-inline">User</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu align="end"
                            style={{ backgroundColor: "var(--btn-color)", border: "none", color: "var(--text-color)" }}
                        >
                            <Dropdown.Item style={{ color: "var(--text-color)" }}>Perfil</Dropdown.Item>
                            <Dropdown.Item style={{ color: "var(--text-color)" }}>Configurações</Dropdown.Item>
                            <Dropdown.Divider style={{ backgroundColor: "var(--text-color)" }}/>
                            <Dropdown.Item style={{ color: "var(--text-color)" }}>Sair</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </div>
            </div>
        </header>
    );
}