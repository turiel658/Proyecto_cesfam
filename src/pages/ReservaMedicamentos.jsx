import React, { Fragment, useState } from 'react';
import axios from 'axios';

const ReservaMed = () => {
  // Your existing useState declarations

  const agregarProducto = () => {
    const producto = {
      codProducto,
      nombreComercial,
      compuestoActivo,
      descripcionProducto,
      fabricante,
      cantidadPrincipioActivo,
      cantidadStock,
      fechaRetiro,
      rutPaciente,
    };

    axios.post('/api/endpoint', producto)
      .then(response => {
        // Handle the response
        // For example, you can update the UI or perform any necessary actions
      })
      .catch(error => {
        // Handle the error
        // For example, you can display an error message or perform any necessary actions
      });

    setProductos([...productos, producto]);
    limpiarCasillas();
  };

  const eliminarProducto = () => {
    if (selectedItemIndex !== null) {
      const updatedProductos = [...productos];
      updatedProductos.splice(selectedItemIndex, 1);

      axios.delete(`/api/endpoint/${selectedItemIndex}`)
        .then(response => {
          // Handle the response
          // For example, you can update the UI or perform any necessary actions
        })
        .catch(error => {
          // Handle the error
          // For example, you can display an error message or perform any necessary actions
        });

      setProductos(updatedProductos);
      setSelectedItemIndex(null);
    }
  };

  const editarProducto = () => {
    if (selectedItemIndex !== null) {
      const producto = {
        codProducto,
        nombreComercial,
        compuestoActivo,
        descripcionProducto,
        fabricante,
        cantidadPrincipioActivo,
        cantidadStock,
        fechaRetiro,
        rutPaciente,
      };

      const updatedProductos = [...productos];
      updatedProductos[selectedItemIndex] = producto;

      axios.put(`/api/endpoint/${selectedItemIndex}`, producto)
        .then(response => {
          // Handle the response
          // For example, you can update the UI or perform any necessary actions
        })
        .catch(error => {
          // Handle the error
          // For example, you can display an error message or perform any necessary actions
        });

      setProductos(updatedProductos);
      limpiarCasillas();
      setSelectedItemIndex(null);
    }
  };

  // The rest of your code remains the same
};

export default ReservaMed;



/*import React, { Fragment, useState } from 'react';

const ReservaMed = () => {
  const [productos, setProductos] = useState([]);
  const [codProducto, setCodProducto] = useState('');
  const [nombreComercial, setNombreComercial] = useState('');
  const [compuestoActivo, setCompuestoActivo] = useState('');
  const [descripcionProducto, setDescripcionProducto] = useState('');
  const [fabricante, setFabricante] = useState('');
  const [cantidadPrincipioActivo, setCantidadPrincipioActivo] = useState('');
  const [cantidadStock, setCantidadStock] = useState('');
  const [fechaRetiro, setFechaRetiro] = useState('');
  const [rutPaciente, setRutPaciente] = useState('');
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const agregarProducto = () => {
    const producto = {
      codProducto,
      nombreComercial,
      compuestoActivo,
      descripcionProducto,
      fabricante,
      cantidadPrincipioActivo,
      cantidadStock,
      fechaRetiro,
      rutPaciente,
    };

    setProductos([...productos, producto]);
    limpiarCasillas();
  };

  const eliminarProducto = () => {
    if (selectedItemIndex !== null) {
      const updatedProductos = [...productos];
      updatedProductos.splice(selectedItemIndex, 1);
      setProductos(updatedProductos);
      setSelectedItemIndex(null);
    }
  };

  const limpiarCasillas = () => {
    setCodProducto('');
    setNombreComercial('');
    setCompuestoActivo('');
    setDescripcionProducto('');
    setFabricante('');
    setCantidadPrincipioActivo('');
    setCantidadStock('');
    setFechaRetiro('');
    setRutPaciente('');
  };

  const editarProducto = () => {
    if (selectedItemIndex !== null) {
      const producto = {
        codProducto,
        nombreComercial,
        compuestoActivo,
        descripcionProducto,
        fabricante,
        cantidadPrincipioActivo,
        cantidadStock,
        fechaRetiro,
        rutPaciente,
      };

      const updatedProductos = [...productos];
      updatedProductos[selectedItemIndex] = producto;
      setProductos(updatedProductos);
      limpiarCasillas();
      setSelectedItemIndex(null);
    }
  };

  return (
    <Fragment>
      <h2 align="center">Cesfam</h2>
      <div id="contenedor">
        <div id="imagen">
          <div id="texto">Reserva de medicamentos</div>
          <br />
          <br />
          <img
            src="img/Reloj.png"
            alt="Imagen"
            width="100px"
            height="100px"
          />
        </div>
        <div>
          <h2>Hola "Usuario" estás en Reserva de medicamentos</h2>
          <input
            type="text"
            name="codProducto"
            placeholder="Codigo producto"
            value={codProducto}
            onChange={(e) => setCodProducto(e.target.value)}
          />
          <input
            type="text"
            name="nombreComercial"
            placeholder="Nombre Comercial"
            value={nombreComercial}
            onChange={(e) => setNombreComercial(e.target.value)}
          />
          <input
            type="text"
            name="compuestoActivo"
            placeholder="Compuesto activo"
            value={compuestoActivo}
            onChange={(e) => setCompuestoActivo(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            name="descripcionProducto"
            placeholder="Descripcion del producto"
            value={descripcionProducto}
            onChange={(e) => setDescripcionProducto(e.target.value)}
          />
          <input
            type="text"
            name="fabricante"
            placeholder="Fabricante"
            value={fabricante}
            onChange={(e) => setFabricante(e.target.value)}
          />
          <input
            type="text"
            name="cantidadPrincipioActivo"
            placeholder="Cantidad principio activo"
            value={cantidadPrincipioActivo}
            onChange={(e) => setCantidadPrincipioActivo(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            name="cantidadStock"
            placeholder="Cantidad Stock"
            value={cantidadStock}
            onChange={(e) => setCantidadStock(e.target.value)}
          />
          <input
            type="text"
            name="fechaRetiro"
            placeholder="Fecha de retiro"
            value={fechaRetiro}
            onChange={(e) => setFechaRetiro(e.target.value)}
          />
          <input
            type="text"
            name="rutPaciente"
            placeholder="Rut del paciente"
            value={rutPaciente}
            onChange={(e) => setRutPaciente(e.target.value)}
          />
        </div>
        <br />
        <div align="right">
          <input
            type="button"
            value={selectedItemIndex !== null ? 'Editar' : 'Agregar'}
            onClick={selectedItemIndex !== null ? editarProducto : agregarProducto}
          />
          <input
            type="button"
            value="Eliminar"
            onClick={eliminarProducto}
            disabled={selectedItemIndex === null}
          />
          <input
            type="button"
            value="Limpiar"
            onClick={limpiarCasillas}
          />
        </div>
        <h3>Reservas Agregadas:</h3>
        <ul>
          {productos.map((producto, index) => (
            <li
              key={index}
              onClick={() => setSelectedItemIndex(index)}
              style={{ backgroundColor: selectedItemIndex === index ? 'cyan' : 'purple' }}
            >
              {producto.codProducto}, {producto.nombreComercial}, {producto.compuestoActivo}, {producto.descripcionProducto}, {producto.fabricante}, {producto.cantidadPrincipioActivo}, {producto.cantidadStock}, {producto.fechaRetiro}, {producto.rutPaciente}
            </li>
          ))}
        </ul>
        </div>
    </Fragment>
  );
}
//Seleccionar una lista creada(Agregada) para poder editar o eliminar
export default ReservaMed;
*/