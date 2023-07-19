import { Link } from "react-router-dom";
import FormPres from "../components/FormPres";
import TablaPres from "../components/TablaPres";

function RevisarPres() {
    return (
      <div className="pres-contenedor">
        <h1>Hola usuario, estas en "Revisar preescripciones" </h1>
        <FormPres/>
        <TablaPres/>        
        <button><Link to="/home-farmacia">Volver</Link></button>
      </div>
    );
}
export default RevisarPres
