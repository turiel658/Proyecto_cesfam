import { Link } from "react-router-dom";
import image from "../images/RecetaMedica.png"

function Card({title, url}) {
  return (
    <div className="home-card" to="/home-medico">
      <h2>{title}</h2>
      <img src={image} className="home-card-img"/>
      <button><Link to={url}>Ingresar</Link></button>
    </div>
  );
}

export default Card;
