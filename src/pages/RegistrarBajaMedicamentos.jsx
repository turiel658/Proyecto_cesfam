import axios from 'axios';
import Card from '../components/Card';

function RegistrarBajaMedicamentos() {
  const enviarDatos = async () => {
    try {
      const response = await axios.post('/api/endpoint', {
        // Include your request payload here
      });
      // Process the response data
    } catch (error) {
      // Handle the error
    }
  };

  return (
    <div className="App">
      {/* Your existing JSX code */}
      {/* ... */}
      <div className="container">
        {/* ... */}
        <div className="row">
          <div className="col-md-12">
            <form>
              {/* ... */}
              <div className="col-md-1">
                <button id="botones" onClick={enviarDatos}>Buscar</button>
              </div>
              {/* ... */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrarBajaMedicamentos;




/*
function RegistrarBajaMedicamentos() {
  return (
    <div className="App">
        <p className="fondo">CESFAM</p>
        <div class="container">
    <div class="row">
      <div class="col-md-12">
        <form>
          <div class="row">
            <div className="segundoFondo" class="col-md-2">
              <p>Prescripciones pendientes</p>
            </div>
            <div class="col-md-10" className="segundoFondo">
              <p align="center">Hola, 'USUARIO'. Estas en prescripciones pendientes.</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <form>
          <div class="row">
            <div class="col-md-2">
            </div>
            <div className="segundoFondo" class="col-md-4">
              <label for="name_doc" class="control-label">Nombre doctor</label>
            </div>
            <div className="segundoFondo" class="col-md-4">
              <label for="name_patient" class="control-label">Nombre paciente</label>
            </div>
            <div className="segundoFondo" class="col-md-2">
              <label for="id-product" class="control-label">ID producto</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <form>
          <div class="row">
            <div class="col-md-2">
            </div>
            <div className="segundoFondo" class="col-md-4">
              <input type="text" class="form-control" id="name_doc" name="name_doc"/>
            </div>
            <div className="segundoFondo" class="col-md-4">
              <input type="text" class="form-control" id="name_patient" name="name_patient"/>
            </div>
            <div className="segundoFondo" class="col-md-2">
              <input type="number" class="form-control" id="id-product" name="id_product"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <form>
          <div class="row">
            <div class="col-md-2">
            </div>
            <div className="segundoFondo" class="col-md-4">
              <label for="date-emission" class="control-label">Fecha de emisión</label>
            </div>
            <div className="segundoFondo" class="col-md-4">
              <label for="date-retreat" class="control-label">Fecha de retiro</label>
            </div>
            <div className="segundoFondo" class="col-md-2">
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <form>
          <div class="row">
            <div class="col-md-2">
            </div>
            <div className="segundoFondo" class="col-md-4">
              <input type="date" class="form-control" id="date-emission" name="date-emission"/>
            </div>
            <div className="segundoFondo" class="col-md-4">
              <input type="date" class="form-control" id="date-retreat" name="date-retreat"/>
            </div>
            <div className="segundoFondo" class="col-md-2">
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <form>
          <div class="row">
            <div class="col-md-2"></div>
            <div className="segundoFondo" class="col-md-7"></div>
            <div className="segundoFondo" class="col-md-1">
              <button id="botones">Buscar</button>
            </div>
            <div className="segundoFondo" class="col-md-1">
              <button id="botones">eliminar</button>
            </div>
            <div className="segundoFondo" class="col-md-1">
              <button id="botones">Guardar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
    </div>
  );
}

export default RegistrarBajaMedicamentos;

*/