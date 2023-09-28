import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import RepositorioGenerales from './RepositorioGenerales';

const GestorTramiteABM = () => {
  return (
    <Tabs
      className="mb-3 gestor-tramite-abm-tab"
      defaultActiveKey="art"
      id="fill-tab-example"
    >
      <Tab eventKey="art" title="ART">
        Repositorio ART
      </Tab>
      <Tab eventKey="generales" title="Generales">
        <RepositorioGenerales />
      </Tab>
      <Tab eventKey="vida" title="Vida">
        Repositorio Vida
      </Tab>
    </Tabs>
  );
};

export default GestorTramiteABM;
