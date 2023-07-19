import React, { Fragment, useState } from 'react';

const EntregaMed = () => {
  const [idProducto, setIdProducto] = useState('');
  const [nombreComercial, setNombreComercial] = useState('');
  const [fechaVencimiento, setFechaVencimiento] = useState('');
  const [descripcionProducto, setDescripcionProducto] = useState('');
  const [fabricante, setFabricante] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [listaProductos, setListaProductos] = useState([]);

  const limpiarCasillas = () => {
    setIdProducto('');
    setNombreComercial('');
    setFechaVencimiento('');
    setDescripcionProducto('');
    setFabricante('');
    setCantidad('');
  };

  const guardarProducto = () => {
    const producto = {
      id: idProducto,
      nombre: nombreComercial,
      fechaVencimiento: fechaVencimiento,
      descripcion: descripcionProducto,
      fabricante: fabricante,
      cantidad: cantidad
    };

    setListaProductos([...listaProductos, producto]);
    limpiarCasillas();
  };

  return (
    <Fragment>
      <h2 align="center">Cesfam</h2>
      <style
    dangerouslySetInnerHTML={{
      __html:
        "\n      #contenedor {\n        background-color: cyan;\n        width: 50%;\n        margin: auto;\n        padding: 20px;\n        text-align: center;\n      }\n      #imagen {\n        float: left;\n        margin-right: 20px;\n      }\n      #texto {\n        text-align: center;\n        font-weight: bold;\n        margin-top: 10px;\n      }\n      input[type=text] {\n        padding: 10px;\n        margin: 5px;\n        border-radius: 5px;\n        border: none;\n        font-size: 16px;\n        width: 20%;\n      }\n      input[type=button] {\n        padding: 10px;\n        margin: 5px;\n        border-radius: 5px;\n        border: none;\n        background-color: #4CAF50;\n        color: white;\n        font-size: 16px;\n      }\n    "
    }}
  />
      <div id="contenedor">
        <div id="imagen">
          <div id="texto">Entrega de medicamentos</div>
          <img
            src="img/Entrega-med.avif"
            alt="Imagen"
            width="100px"
            height="100px"
          />
        </div>
        <div>
          <h2>Hola "Usuario" estás en Entrega de medicamentos</h2>
          <input
            type="text"
            name="idProducto"
            placeholder="ID Producto"
            value={idProducto}
            onChange={(e) => setIdProducto(e.target.value)}
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
            name="fechaVencimiento"
            placeholder="Fecha de Vencimiento"
            value={fechaVencimiento}
            onChange={(e) => setFechaVencimiento(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            name="descripcionProducto"
            placeholder="Descripción del producto"
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
            name="cantidad"
            placeholder="Cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </div>
        <br />
        <div align="right">
          <input type="button" value="Agregar" onClick={guardarProducto} />
          <input type="button" value="Eliminar" onClick={limpiarCasillas} />
          <input type="button" value="Guardar" />
        </div>
        <br />
        <div>
          <h3>Productos Agregados:</h3>
          <ul>
            {listaProductos.map((producto, index) => (
              <li key={index}>
                ID: {producto.id}, Nombre: {producto.nombre}, Fecha de Vencimiento: {producto.fechaVencimiento}, Descripción: {producto.descripcion}, Fabricante: {producto.fabricante}, Cantidad: {producto.cantidad}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default EntregaMed;

/*
import  { Fragment, useState } from 'react';
import axios from 'axios';

const EntregaMed = () => {
  const [idProducto, setIdProducto] = useState('');
  const [nombreComercial, setNombreComercial] = useState('');
  const [fechaVencimiento, setFechaVencimiento] = useState('');
  const [descripcionProducto, setDescripcionProducto] = useState('');
  const [fabricante, setFabricante] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [listaProductos, setListaProductos] = useState([]);

  const limpiarCasillas = () => {
    setIdProducto('');
    setNombreComercial('');
    setFechaVencimiento('');
    setDescripcionProducto('');
    setFabricante('');
    setCantidad('');
  };

  const guardarProducto = async () => {
    const producto = {
      id: idProducto,
      nombre: nombreComercial,
      fechaVencimiento: fechaVencimiento,
      descripcion: descripcionProducto,
      fabricante: fabricante,
      cantidad: cantidad
    };

    try {
      // Realizar una solicitud POST utilizando Axios
      await axios.post("./routes/index.routes.js", producto);
      
      // Actualizar la lista de productos
      setListaProductos([...listaProductos, producto]);
      
      // Limpiar las casillas de entrada
      limpiarCasillas();
    } catch (error) {
      // Manejar errores...
    }
  };

  return (
    <Fragment>
      <h2 align="center">Cesfam</h2>
      {/* Resto del código... }
    </Fragment>
  );
}

export default EntregaMed;
*/