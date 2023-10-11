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

const motivosOvGenerales = [
  { 
    cod_motivo_ov: 1,
    txt_motivo_ov: "Modificaciones en póliza OV"
  },
  { 
    cod_motivo_ov: 2,
    txt_motivo_ov: "Copia de póliza OV"
  }
]

const motivosGenerales = [
  {
    id_motivo_repositorio: "Seguros - Modificaciones en póliza",
    txt_motivo_repositorio: "Modificaciones en póliza",
    cod_motivo_ov: 1,
    cod_motivo_repositorio: 1,
    txt_motivo_ov: "Modificaciones en póliza OV",
    subMotivos: [
      {
        id_submotivo_repositorio: "76",
        txt_submotivo_repositorio: "Conducto de pago",
        cod_submotivo_ov: 76,
        txt_submotivo_ov: "Conducto de pago OV"
      },
      {
        id_submotivo_repositorio: "77",
        txt_submotivo_repositorio: "Renovación",
        cod_submotivo_ov: 77,
        txt_submotivo_ov: "Renovación OV"
      },
      {
        id_submotivo_repositorio: "79",
        txt_submotivo_repositorio: "Endoso modificación",
        cod_submotivo_ov: 79,
        txt_submotivo_ov: "Endoso modificación OV"
      },
    ]
  },
  {
    id_motivo_repositorio: "Seguros - Copia de póliza",
    txt_motivo_repositorio: "Copia de póliza",
    cod_motivo_ov: 2,
    cod_motivo_repositorio: 2,
    txt_motivo_ov: "Copia de póliza OV",
    subMotivos: [
      {
        id_submotivo_repositorio: "22",
        txt_submotivo_repositorio: "Copia física original",
        cod_submotivo_ov: 22,
        txt_submotivo_ov: "Copia física original OV",
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
            <Repositorio 
              motivos={ [] }
              motivosOv = { [] }
              consultasPor={ rubros[0].consultasPor } />
            </Tab>
          <Tab eventKey="generales" title="Generales">
            <Repositorio 
              motivos={ motivosGenerales }
              motivosOv = { motivosOvGenerales }
              consultasPor={ rubros[1].consultasPor } />
          </Tab>
          <Tab eventKey="vida" title="Vida">
            <Repositorio 
              motivos={ [] }
              motivosOv = { [] }
              consultasPor={ rubros[2].consultasPor } />
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};

export default GestorTramiteABM;
