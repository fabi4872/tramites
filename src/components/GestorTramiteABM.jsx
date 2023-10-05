import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Repositorio from './Repositorio';

const rubros = [
  {
    cod_rubro: "1",
    txt_rubro: "ART",
    consultasPor: []
  },
  {
    cod_rubro: "2",
    txt_rubro: "Generales",
    consultasPor: []
  },
  {
    cod_rubro: "3",
    txt_rubro: "Life",
    consultasPor: []
  }
];

const motivosGenerales = [
  {
    id_motivo_repositorio: "Seguros - Pólizas",
    cod_motivo_ov: 1,
    cod_motivo_repositorio: 1,
    txt_motivo_ov: "Motivo póliza OV",
    txt_motivo_repositorio: "Motivo póliza REPO",
    subMotivos: [
      {
        id_submotivo_repositorio: 1,
        cod_submotivo_ov: 1,
        txt_submotivo_ov: "Submotivo renovación póliza OV",
        txt_submotivo_repositorio: "Submotivo renovación póliza REPO"
      },
      {
        id_submotivo_repositorio: 2,
        cod_submotivo_ov: 2,
        txt_submotivo_ov: "Submotivo baja póliza OV",
        txt_submotivo_repositorio: "Submotivo baja póliza REPO"
      },
      {
        id_submotivo_repositorio: 3,
        cod_submotivo_ov: 3,
        txt_submotivo_ov: "Submotivo alta póliza OV",
        txt_submotivo_repositorio: "Submotivo alta póliza REPO"
      },
    ]
  },
  {
    id_motivo_repositorio: "Seguros - Siniestros",
    cod_motivo_ov: 2,
    cod_motivo_repositorio: 2,
    txt_motivo_ov: "Motivo siniestro OV",
    txt_motivo_repositorio: "Motivo siniestro REPO",
    subMotivos: [
      {
        id_submotivo_repositorio: 1,
        cod_submotivo_ov: 1,
        txt_submotivo_ov: "Submotivo renovación siniestro OV",
        txt_submotivo_repositorio: "Submotivo renovación siniestro REPO"
      },
      {
        id_submotivo_repositorio: 2,
        cod_submotivo_ov: 2,
        txt_submotivo_ov: "Submotivo baja siniestro OV",
        txt_submotivo_repositorio: "Submotivo baja siniestro REPO"
      }
    ]
  },
  {
    id_motivo_repositorio: "Seguros - Certificados",
    cod_motivo_ov: 3,
    cod_motivo_repositorio: 3,
    txt_motivo_ov: "Motivo certificado OV",
    txt_motivo_repositorio: "Motivo certificado REPO",
    subMotivos: [
      {
        id_submotivo_repositorio: 1,
        cod_submotivo_ov: 1,
        txt_submotivo_ov: "Submotivo renovación certificado OV",
        txt_submotivo_repositorio: "Submotivo renovación certificado REPO"
      }
    ]
  }
];

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
            <Repositorio motivos={ motivosGenerales } consultasPor={ rubros[1].consultasPor } />
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
