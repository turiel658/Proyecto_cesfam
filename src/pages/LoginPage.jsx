import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [medico, cambiar] = useState(true)

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Realiza una solicitud POST utilizando Axios
    try {
      const response = await axios.get("http://localhost:4000/api/medicos%22");
      const data = await response.data

      // Hacer algo con la respuesta...

      // Redireccionar a la página correspondiente
      data.map(dato => {
        if (data.nombreUsuario === event.target.nombreUsuario && data.contraseña === event.target.contraseña) {
          return window.location.href = "/home-medico";
        }
      })
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <h1 className="title-page">LoginPage</h1>
      <form className="form-login" onSubmit={handleSubmit}>
        <input type="checkbox" onChange={() => cambiar(!medico)} />
        {medico ? <h2>Login Médico</h2> : <h2>Login Farmacia</h2>}
        <input type="text" placeholder="Nombre de usuario" name="username" />
        <input type="password" placeholder="Contraseña" name="password" />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default LoginPage;




/*import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [medico, cambiar] = useState(true)
  return (
    <div>
      <h1 className="title-page">LoginPage</h1>
      <form className="form-login">
        <input type="checkbox" onChange={() =>{
          cambiar(!medico)
        }}/>
        {medico? <h2>Login Médico</h2>: <h2>Login Farmacia</h2>}
        <input type="text" placeholder="Nombre de usuario"/>
        <input type="password" placeholder="Contraseña"/>
        <button><Link to={medico? "/home-medico": "/home-farmacia"}>Ingresar</Link></button>
      </form>
    </div>
  );
}

export default LoginPage
*/