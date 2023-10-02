import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import RepositorioGenerales from './RepositorioGenerales';
import { Container } from 'react-bootstrap';

const GestorTramiteABM = () => {
  return (
    <>
      <header className="d-flex align-items-center header">
        <Container>
          <p className={`header-paragraph header-paragraph-margin-top`}>
            Gestor de Trámites
          </p>
        </Container>
      </header>
      <Container className="tabs-margin-top">
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
      </Container>
    </>
  );
};

export default GestorTramiteABM;
