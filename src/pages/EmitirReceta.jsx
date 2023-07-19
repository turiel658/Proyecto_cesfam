import { useState } from "react";

function EmitirReceta() {
  const [medicamentos, setMedicamentos] = useState([{}])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (medicamentos.length === 0) {
      setMedicamentos({
        nombre: e.target.nombre.value,
        cantidad: e.target.cantidad.value,
        recurrencia: e.target.recurrencia.value
      })
    } else {
      setMedicamentos([...medicamentos, {
        nombre: e.target.nombre.value,
        cantidad: e.target.cantidad.value,
        recurrencia: e.target.recurrencia.value
      }])
    }
    e.target.nombre.value = "";
    e.target.cantidad.value = "";
    e.target.recurrencia.value = "";
  }
  return (
    <div>
      <h1 className="title-page">Emitir Receta</h1>
      <form className="form-emitir-receta" onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre Remedio" name="nombre"/>
        <input type="text" placeholder="Cantidad" name="cantidad"/>
        <input type="text" placeholder="Recurrencia" name="recurrencia"/>
        <div></div>
        <button>Agregar medicamento</button>
        <button onClick={() => {
          alert("La receta ha sido emitida")
        }}>Emitir receta</button>
      </form>
      { medicamentos.length === 0 ? <h2 className="no-medicamentos">No hay medicamentos agregados</h2> 
      : <ul className="lista-medicamentos-recetados">
        {
          medicamentos.map((medicamento, index) => {
            return (
              <li key={index} className="item-recetado">
                <p>{medicamento.nombre}</p>
                <p>{medicamento.cantidad}</p>
                <p>{medicamento.recurrencia}</p>
              </li>
            )
          })
        }
        </ul>
      }
    </div>
  );
}

export default EmitirReceta;