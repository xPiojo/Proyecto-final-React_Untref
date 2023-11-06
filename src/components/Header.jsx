import { NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa6";
import headerStyle from "../styles/Header.module.css"

export const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
            <nav>
                <NavLink to="/" title="Ir a home"><FaHome /></NavLink>
                <NavLink to="/historial" title="Ver Historial"><FaClipboardList /></NavLink>
            </nav>

        </header>
    )
}
