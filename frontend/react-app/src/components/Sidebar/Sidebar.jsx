import { Link } from "react-router-dom";
import logo from "../../assets/icon/logoGuarucumOlho.svg"
import { navigation } from "../../data/navigation";
import "./Sidebar.scss"
import { IoPersonCircleOutline } from "react-icons/io5";
import { LuLayoutDashboard, LuShoppingCart, LuBox } from "react-icons/lu";

export default function Sidebar() {
    const itens = navigation;

    const iconsMap = {
        'Dashboard': <LuLayoutDashboard size={30} />,
        'Vendas': <LuShoppingCart size={30} />,
        'Estoque': <LuBox size={30} />,
    };

    return (
        <aside className="sidebar-fixed col-md-auto bg-light sticky-top">
            <div className="sidebar-flex bg-light py-2 py-md-4">
                <div className="d-block link-dark text-decoration-none mb-md-4">
                    <img src={logo} alt="Logo olho guarucum" style={{ width: '32px' }} />
                </div>

                <ul className="nav nav-pills nav-flush flex-md-column flex-row mb-auto text-center gap-2">
                    {itens.map((item, index) => (
                        <li key={index} className="nav-item">
                            <Link to={`/${item}`} className="nav-link">
                                {iconsMap[item] || null}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="dropdown">
                    <button
                        className="d-flex align-items-center justify-content-center link-dark text-decoration-none dropdown-toggle"
                        id="dropdownUser3"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ background: 'none', border: 'none' }}
                    >
                        <IoPersonCircleOutline size={35} />
                    </button>

                    <ul className="dropdown-menu dropdown-menu-light text-small shadow">
                        <li><Link className="dropdown-item" to="/settings">Configurações</Link></li>
                        <li><Link className="dropdown-item" to="/profile">Perfil</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="/logout">Sair</Link></li>
                    </ul>
                </div>
            </div>
        </aside>

    );
}