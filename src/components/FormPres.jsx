function FormPres() {
    return (
      <div>
        <form action="" className="form-pres"> 
            <input type="text" placeholder="Nombre paciente" />
            <input type="text" placeholder="Nombre doctor" />
            <input type="date" placeholder="Fecha emision" />
            <button>Enviar informe</button>
        </form>
      </div>
    );
  }
  export default FormPres