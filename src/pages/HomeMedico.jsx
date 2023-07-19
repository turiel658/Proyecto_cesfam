import axios from 'axios';
import Card from '../components/Card';

function HomeMedico() {
  const fetchData = async () => {
    try {
      const response = await axios.get('/api/endpoint');
      // Process the response data
    } catch (error) {
      // Handle the error
    }
  };

  return (
    <div>
      <h1 className='home-title'>Home Médico</h1>
      <div className="home-medico-card-container">
        <Card title={"Revisar stock disponible"} url={"/revisar-stock"} onClick={fetchData} />
        <Card title={"Ingresar Prescripciones"} url={"/ingresar-prescipciones"} />
      </div>
    </div>    
  );
}

export default HomeMedico;







/*
import Card from '../components/Card';

function HomeMedico() {
  return (
    <div>
      <h1 className='home-title'>Home Médico</h1>
      <div className="home-medico-card-container">
        <Card title={"Revisar stock disponible"} url={"/revisar-stock"}/>
        <Card title={"Ingresar Prescripciones"} url={"/ingresar-prescipciones"}/>
      </div>
    </div>    
  )
}

export default HomeMedico;
*/
