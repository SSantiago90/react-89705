import { NavLink } from "react-router"
import CartWidget from "./CartWidget"
export default function NavBar(){
  return(
    <nav>
      <NavLink to="/">Inicio</NavLink>
      <br/>
      <NavLink to="/category/remeras">Remeras👕</NavLink>
      <br/>
      <NavLink to="/category/calzado">Calzado👞</NavLink>
      <br/>
      <a href="https://en.wikipedia.org/wiki/Wiki">Seguinos en Instagram</a>
      <CartWidget />
    </nav>
  )
}