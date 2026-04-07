import { NavLink } from "react-router"
import CartWidget from "./CartWidget"
import "./navbar.css"

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">MiTienda</NavLink>
      </div>

      <ul className="navbar-links">
        <li>
          <NavLink to="/category/remeras" className="nav-link">Remeras👕</NavLink>
        </li>
        <li>
          <NavLink to="/category/calzado" className="nav-link">Calzado👞</NavLink>
        </li>
        <li>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="nav-link">
            Instagram
          </a>
        </li>
      </ul>

      <div className="navbar-cart">
        <CartWidget />
      </div>
    </nav>
  )
}