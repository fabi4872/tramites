import { Route, Routes } from "react-router-dom";
import GestorMotivoSubMotivoABM from "./components/GestorMotivoSubMotivoABM";
import GestorTramiteABM from "./components/GestorTramiteABM";
import GestorMotivosAdmin from "./pages/tramites/Tramite/views/GestorMotivosAdmin";
import ClinicasSinInternacionCAADialisis from "./components/FormularioInteligente/ServiciosMedicos/ClinicasSinInternacionCAADialisis";
import "../src/styles/formularios.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GestorMotivosAdmin />} />
      <Route path="/Gestor/ConsultasPor" element={<GestorTramiteABM />} />
      <Route path="/Gestor/Motivos" element={<GestorMotivoSubMotivoABM />} />
      
      {/* http://127.0.0.1:5173/FormulariosInteligentes/ClinicasSinInternacionCAA/1 */}
      <Route path="/FormulariosInteligentes/ClinicasSinInternacionCAA/1" element={<ClinicasSinInternacionCAADialisis />} />
    </Routes>
  );
}

export default App;
