import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomeMedico from './pages/HomeMedico'
import Navbar from './components/Navbar'
import HomeFarmacia from './pages/HomeFarmacia'
import NotFoundPage from "./pages/NotFounded"
import EmitirInforme from './pages/EmitirInformes'
import RevisarPres from './pages/RevisarPres'
import EntregaMed from './pages/EntregaMedicamentos'
import ReservaMed from './pages/ReservaMedicamentos'
import IngresarPrescripciones from './pages/IngresarPrescripciones'
import EmitirReceta from './pages/EmitirReceta'
import RevisarStock from './pages/RevisarStock'
import LoginPage from './pages/LoginPage'
import IngresarProductosStock from './pages/IngresarProductosStock'
import RegistrarBajaMedicamentos from './pages/RegistrarBajaMedicamentos'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home-medico" element={<HomeMedico/>} />
        <Route path="/home-farmacia" element={<HomeFarmacia/>} />
        <Route path="/emitir-informe-stock" element={<EmitirInforme/>} />
        <Route path="/revisar-prescripciones" element={<RevisarPres/>} />
        <Route path="/entrega-medicamentos" element={<EntregaMed/>} />
        <Route path="/reserva-medicamentos" element={<ReservaMed/>} />
        <Route path="/ingresar-prescipciones" element={<IngresarPrescripciones/>} />
        <Route path="/emitir-receta" element={<EmitirReceta/>} />
        <Route path="/revisar-stock" element={<RevisarStock/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/ingresar-productos-stock" element={<IngresarProductosStock/>} />
        <Route path="/baja-medicamentos" element={<RegistrarBajaMedicamentos/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>

    </>
  )
}

export default App
