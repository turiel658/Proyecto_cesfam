import { Link } from "react-router-dom"
import  "../App.css" 

function Navbar() {
  return (
    <nav className="navbar-container">
      <h1>CESFAM</h1>
      <ul>
        <li className="navbar-items">
          <Link to="/home-farmacia">Home Farmacia</Link>
          <Link to="/home-medico">Home Médico</Link>
          <Link to="/login">Cerrar sesion</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar