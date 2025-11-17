// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Nav } from "react-bootstrap";
import { RiLayoutGridFill } from "react-icons/ri";
import { LuBox, LuReceipt } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/icon/logoGuarucumOlho.svg"

const items = [
    { key: "dashboard", label: "Dashboard", icon: RiLayoutGridFill, path: "/app/dashboard" },
    { key: "estoque", label: "Estoque", icon: LuBox, path: "/app/estoque" },
    { key: "minhas-vendas", label: "Minhas Vendas", icon: LuReceipt, path: "/app/minhas-vendas" },
];

export const Sidebar = () => {
    const iconInactive = "#9ca3af";
    const iconActive = "#ffffff";

    return (
        <>
            {/* Desktop */}
            <aside
                className="d-none d-md-flex flex-column align-items-center py-4 gap-3"
                style={{ width: 80, backgroundColor: "var(--bg-sidebar)", minHeight: "100vh" }}
            >
                <div
                    className="d-flex align-items-center justify-content-center mb-2"
                    style={{
                        width: 48,
                        height: 48,
                        borderRadius: 16,
                    }}
                    title="Logo"
                >
                    <span><img src={logo} alt="Logo olho guarucum" style={{ width: '32px' }} /></span>
                </div>

                <LayoutGroup id="sidebar">
                    <Nav className="flex-column align-items-center gap-2 w-100" as="nav">
                        {items.map((item) => {
                            const Icon = item.icon;
                            return (
                                <NavLink
                                    key={item.key}
                                    to={item.path}
                                    title={item.label}
                                    end={item.path === "/app/dashboard"}
                                    className={() => "position-relative d-inline-block"}
                                    style={({ isActive }) => ({
                                        width: 48,
                                        height: 48,
                                        borderRadius: 12,
                                        color: isActive ? iconActive : iconInactive,
                                        textDecoration: "none",
                                    })}
                                >
                                    {({ isActive }) => (
                                        <>
                                            <AnimatePresence>
                                                {isActive && (
                                                    <motion.span
                                                        layoutId="sidebar-pill"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        transition={{ type: "spring", stiffness: 450, damping: 30 }}
                                                        style={{
                                                            position: "absolute",
                                                            inset: 0,
                                                            background: "rgba(255,255,255,0.08)",
                                                            borderRadius: 12,
                                                        }}
                                                    />
                                                )}
                                            </AnimatePresence>

                                            <span
                                                className="d-flex align-items-center justify-content-center position-relative"
                                                style={{ width: "100%", height: "100%", zIndex: 1 }}
                                            >
                                                <motion.span
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                                    style={{ display: "inline-flex" }}
                                                >
                                                    <Icon size={20} />
                                                </motion.span>
                                            </span>
                                        </>
                                    )}
                                </NavLink>
                            );
                        })}
                    </Nav>
                </LayoutGroup>
            </aside>

            {/* Mobile bottom nav */}
            <nav
                className="d-md-none position-fixed bottom-0 start-0 end-0 border-top"
                style={{
                    background: "var(--bg-sidebar)",
                    borderColor: "#2d2d2d",
                    zIndex: 1050,
                }}
            >
                <div className="d-flex align-items-center justify-content-around px-3 py-2">
                    {items.map((item) => {
                        const Icon = item.icon;
                        return (
                            <NavLink
                                key={item.key}
                                to={item.path}
                                end={item.path === "/app/dashboard"}
                                className={() => "d-flex flex-column align-items-center gap-1"}
                                style={({ isActive }) => ({
                                    background: "transparent",
                                    border: "none",
                                    color: isActive ? iconActive : iconInactive,
                                    padding: 6,
                                    textDecoration: "none",
                                })}
                                title={item.label}
                            >
                                <motion.span
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                                >
                                    <Icon size={20} />
                                </motion.span>
                                <span style={{ fontSize: 10 }}>{/* opcional label */}</span>
                            </NavLink>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}