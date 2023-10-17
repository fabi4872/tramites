import { Route, Routes } from "react-router-dom";
import GestorMotivoSubMotivoABM from "./components/GestorMotivoSubMotivoABM";
import GestorTramiteABM from "./components/GestorTramiteABM";
import GestorMotivosAdmin from "./pages/tramites/Tramite/views/GestorMotivosAdmin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GestorMotivosAdmin />} />
      <Route path="/Gestor/ConsultasPor" element={<GestorTramiteABM />} />
      <Route path="/Gestor/Motivos" element={<GestorMotivoSubMotivoABM />} />
    </Routes>
  );
}

export default App;
