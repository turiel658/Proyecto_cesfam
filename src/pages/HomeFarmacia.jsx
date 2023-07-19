import Card from "../components/Card";

function HomeFarmacia() {
  return (
    <div>
      <h1 className="home-title">Home Farmacia</h1>
      <div className="home-card-container">
        <Card title={"Ingresar productos al stock"} url={"/ingresar-productos-stock"}/>
        <Card title={"Registrar entrega de medicamentos"} url={"/entrega-medicamentos"}/>
        <Card title={"Registrar baja de medicamentos"} url={"/baja-medicamentos"}/>
        <Card title={"Emitir Informe de stock"} url={"/emitir-informe-stock"}/>
        <Card title={"Revisar prescripciones pendientes"} url={"/revisar-prescripciones"}/>
        <Card title={"Emitir informe de medicamentos reservados"} url={"/reserva-medicamentos"}/>
      </div>
    </div>
  )
}

export default HomeFarmacia;