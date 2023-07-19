function FormInforme() {
    return (
      <div>
        <form action="" className="form-informe"> 
            <input type="text" placeholder="Nombre producto" />
            <input type="text" placeholder="ID producto" />
            <input type="text" placeholder="Cantidad en stock" />
            <input type="text" placeholder="Cantidad reservada"/>
            <button>Agregar producto</button>
            <button>Enviar informe</button>
        </form>
      </div>
    );
}

export default FormInforme;

