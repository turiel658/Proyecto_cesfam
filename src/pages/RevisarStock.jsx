import axios from "axios"
import { useState } from "react"

function RevisarStock() {
  const [medicamentos, setMedicamentos] = useState([])
  async function getData() {
    const res = await axios.get("http://localhost:4000/api/medicamentos%22")
    return setMedicamentos(res.data)
  }
  console.log(medicamentos)
  return (
    <div>
      <h1 className="title-page">Revisar Stock Disponible</h1>
      { 
        medicamentos.length === 0 ? <p>No hay elementos para mostrar...</p>
        : <table>
          <thead>
            <tr>
              <td>Nombre</td>
              <td>Tipo</td>
              <td>Presentacion</td>
              <td>Composicion</td>
              <td>Cantidad</td>
            </tr>
          </thead>
          <tbody>
            { medicamentos.map(medicamento => (
              <tr>
                <td>{medicamento.nombre}</td>
                <td>{medicamento.tipo}</td>
                <td>{medicamento.presentacion}</td>
                <td>{medicamento.composicion}</td>
                <td>{medicamento.cantidad}</td>
              </tr>
            )) }
          </tbody>
        </table>
      }
    </div>
  );
}

export default RevisarStock