import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import MotivoSubMotivoABM from './MotivoSubMotivoABM';

const motivosGenerales = [
  {
    id_motivo_repositorio: "Seguros - Modificaciones en póliza",
    txt_motivo_repositorio: "Modificaciones en póliza",
    txt_motivo_ov: "",
    sn_activo: true,
    subMotivos: [
      {
        id_submotivo_repositorio: "76",
        txt_submotivo_repositorio: "Conducto de pago",
        txt_submotivo_ov: "",
        es_edicion: false,
        sn_activo: true
      },
      {
        id_submotivo_repositorio: "77",
        txt_submotivo_repositorio: "Renovación",
        txt_submotivo_ov: "",
        es_edicion: false,
        sn_activo: true
      },
      {
        id_submotivo_repositorio: "79",
        txt_submotivo_repositorio: "Endoso modificación",
        txt_submotivo_ov: "",
        es_edicion: false,
        sn_activo: true
      },
    ]
  },
  {
    id_motivo_repositorio: "Seguros - Copia de póliza",
    txt_motivo_repositorio: "Copia de póliza",
    txt_motivo_ov: "",
    sn_activo: true,
    subMotivos: [
      {
        id_submotivo_repositorio: "22",
        txt_submotivo_repositorio: "Copia física original",
        txt_submotivo_ov: "",
        es_edicion: false,
        sn_activo: true
      }
    ]
  }
];

const GestorMotivoSubMotivoABM = () => {
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
            <MotivoSubMotivoABM motivos={ [] } />
          </Tab>
          <Tab eventKey="generales" title="Generales">
            <MotivoSubMotivoABM motivos={ motivosGenerales } />
          </Tab>
          <Tab eventKey="vida" title="Vida">
            <MotivoSubMotivoABM motivos={ [] } />
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};

export default GestorMotivoSubMotivoABM;