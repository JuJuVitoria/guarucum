import { Link } from "react-router-dom";
import logo from "../../assets/icon/logoGuarucumOlho.svg"
import { navigation } from "../../data/navigation";

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
        <aside className="col-sm-auto bg-light sticky-top">
            <div className="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
                <div className="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                    <img src={logo} alt="Logo olho guarucum" style={{ width: '32px' }} />
                </div>

                <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center justify-content-between w-100 px-3 align-items-center">
                    {itens.map((item, index) => (
                        <li key={index} className="nav-item">
                            <Link to={`/${item}`} className="nav-link py-3 px-2">
                                {iconsMap[item] || null}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div class="dropdown">
                    <button
                        className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
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