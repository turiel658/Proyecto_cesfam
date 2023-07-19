function IngresarProductosStock() {
  return (
    <div className="App">
      <header><p className="Fondo">
          CESFAM
        </p>
        <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div className="segundoFondo" class="col-md-2">
            <p>INGRESAR PRODUCTOS AL STOCK</p>
          </div>
          <div className="segundoFondo" class="col-md-10">
            <p align="center">Hola, 'USUARIO'. Estas en añadir productos al stock</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-2"></div>
          <div className="segundoFondo" class="col-md-2"></div>
          <div className="segundoFondo" class="col-md-1">
            <p>Código</p>
          </div>
          <div className="segundoFondo" class="col-md-4">
            <input type="number" class="form-control" id="id-product" name="id_product"/>
          </div>
          <div className="segundoFondo" class="col-md-3">
            <button id='botones'>Añadir</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-2"></div>
          <div className="segundoFondo" class="col-md-3"></div>
          <div className="segundoFondo" class="col-md-4">
            <table border="_">
              <tr>
                <th>Medicina</th>
                <th>ID</th>
                <th>Gramos</th>
                <th>Cantidad</th>
                <th>Total</th>
              </tr>
              <tr>
                <td>Paracetamol</td>
                <td>1</td>
                <td>15</td>
                <td>50</td>
                <td>200</td>
              </tr>
              <tr>
                <td>Ibuprofeno</td>
                <td>2</td>
                <td>30</td>
                <td>25</td>
                <td>150</td>
              </tr>
              <tr>
                <td>Alcohol</td>
                <td>3</td>
                <td>50</td>
                <td>70</td>
                <td>400</td>
              </tr>
              <tr>
                <td>Agua oxigenada</td>
                <td>4</td>
                <td>40</td>
                <td>50</td>
                <td>300</td>
              </tr>
              <tr>
                <td>Mentholatum</td>
                <td>5</td>
                <td>5</td>
                <td>80</td>
                <td>500</td>
              </tr>
            </table>
          </div>
          <div className="segundoFondo" class="col-md-1">
            <button onclick="myFunction()">Ingresar Productos</button>
          </div>
          <div className="segundoFondo" class="col-md-2"></div>
        </div>
      </div>
    </div>
  </div>
      </header>
    </div>
  );
}

export default IngresarProductosStock;