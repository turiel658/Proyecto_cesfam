import { Link } from "react-router-dom";

function IngresarPrescripciones() {
  return (
    <div>
      <h1 className="title-page">Ingresar Prescipciones</h1>
      <form className="form-ingresar-pres">
          <input type="text" placeholder="RUT"/>
          <input type="date" />          
          <textarea placeholder="Indicaciones"></textarea>
          <textarea placeholder="Motivo de la consulta"></textarea>
          <button>Ingresar</button>
          <button><Link to="/emitir-receta">Ingresar y emitir receta</Link></button>
      </form>
    </div>
  );
}

export default IngresarPrescripciones;