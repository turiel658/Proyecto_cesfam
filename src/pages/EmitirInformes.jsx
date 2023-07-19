import FormInforme from "../components/FormInforme"
import TablaInforme from "../components/TablaInforme"
import { Link } from "react-router-dom"

function EmitirInforme() {
    return (
      <div className="informe-contenedor">
        <h1 className="titulo-emitirinforme">Hola usuario, estas en "emitir informes" </h1>
        <FormInforme/>
        <TablaInforme/>
        <button><Link to="/home-farmacia">Volver</Link></button>
      </div>
    );
}
export default EmitirInforme