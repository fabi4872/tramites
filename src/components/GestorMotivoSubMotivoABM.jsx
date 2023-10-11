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
  },
  {
    id_motivo_repositorio: "Seguros - Reclamo diferencia de costo cotización y emisión",
    txt_motivo_repositorio: "Reclamo diferencia de costo cotización y emisión",
    txt_motivo_ov: "",
    sn_activo: true,
    subMotivos: [
      {
        id_submotivo_repositorio: "0",
        txt_submotivo_repositorio: "Sin Submotivo",
        txt_submotivo_ov: "",
        es_edicion: false,
        sn_activo: true
      }
    ]
  },
  {
    id_motivo_repositorio: "Seguros - Reclamo diferencia de datos",
    txt_motivo_repositorio: "Reclamo diferencia de datos",
    txt_motivo_ov: "",
    sn_activo: true,
    subMotivos: [
      {
        id_submotivo_repositorio: "0",
        txt_submotivo_repositorio: "Sin Submotivo",
        txt_submotivo_ov: "",
        es_edicion: false,
        sn_activo: true
      }
    ]
  },
  {
    id_motivo_repositorio: "Seguros - Pedido de baja",
    txt_motivo_repositorio: "Pedido de baja",
    txt_motivo_ov: "",
    sn_activo: true,
    subMotivos: [
      {
        id_submotivo_repositorio: "80",
        txt_submotivo_repositorio: "Anulación de póliza",
        txt_submotivo_ov: "",
        es_edicion: false,
        sn_activo: true
      }
    ]
  },
  {
    id_motivo_repositorio: "Seguros - Solicitud pendiente de emision",
    txt_motivo_repositorio: "Solicitud pendiente de emision",
    txt_motivo_ov: "",
    sn_activo: true,
    subMotivos: [
      {
        id_submotivo_repositorio: "51",
        txt_submotivo_repositorio: "Estado de inspección",
        txt_submotivo_ov: "",
        es_edicion: false,
        sn_activo: true
      },
      {
        id_submotivo_repositorio: "50",
        txt_submotivo_repositorio: "Pendiente de emisión",
        txt_submotivo_ov: "",
        es_edicion: false,
        sn_activo: true
      }
    ]
  },
  {
    id_motivo_repositorio: "Seguros - Solicitud Certificados",
    txt_motivo_repositorio: "Solicitud Certificados",
    txt_motivo_ov: "",
    sn_activo: true,
    subMotivos: [
      {
        id_submotivo_repositorio: "19",
        txt_submotivo_repositorio: "Certificado de Libre Deuda",
        txt_submotivo_ov: "",
        es_edicion: false,
        sn_activo: true
      },
      {
        id_submotivo_repositorio: "18",
        txt_submotivo_repositorio: "Certificado de Póliza en Trámite",
        txt_submotivo_ov: "",
        es_edicion: false,
        sn_activo: true
      },
      {
        id_submotivo_repositorio: "12",
        txt_submotivo_repositorio: "Tarjeta de Circulación / Copia Tarjeta de Circulación",
        txt_submotivo_ov: "",
        es_edicion: false,
        sn_activo: true
      },
      {
        id_submotivo_repositorio: "14",
        txt_submotivo_repositorio: "Certificado de Cobertura por Siniestro",
        txt_submotivo_ov: "",
        es_edicion: false,
        sn_activo: true
      },
      {
        id_submotivo_repositorio: "15",
        txt_submotivo_repositorio: "Certificado de Cobertura",
        txt_submotivo_ov: "",
        es_edicion: false,
        sn_activo: true
      }
    ]
  },
  {
    id_motivo_repositorio: "Seguros - Reclamo por asistencia",
    txt_motivo_repositorio: "Reclamo por asistencia",
    txt_motivo_ov: "",
    sn_activo: true,
    subMotivos: [
      {
        id_submotivo_repositorio: "27",
        txt_submotivo_repositorio: "Reintegro de gastos",
        txt_submotivo_ov: "",
        es_edicion: false,
        sn_activo: true
      },
      {
        id_submotivo_repositorio: "26",
        txt_submotivo_repositorio: "Negación servicio",
        txt_submotivo_ov: "",
        es_edicion: false,
        sn_activo: true
      }
    ]
  },
  {
    id_motivo_repositorio: "Seguros - Denuncia de siniestro",
    txt_motivo_repositorio: "Denuncia de siniestro",
    txt_motivo_ov: "",
    sn_activo: true,
    subMotivos: [
      {
        id_submotivo_repositorio: "4",
        txt_submotivo_repositorio: "Ampliación de denuncia",
        txt_submotivo_ov: "",
        es_edicion: false,
        sn_activo: true
      },
      {
        id_submotivo_repositorio: "5",
        txt_submotivo_repositorio: "Denuncia con formulario",
        txt_submotivo_ov: "",
        es_edicion: false,
        sn_activo: true
      }
    ]
  },
  {
    id_motivo_repositorio: "Seguros - Copia de denuncia",
    txt_motivo_repositorio: "Copia de denuncia",
    txt_motivo_ov: "",
    sn_activo: true,
    subMotivos: [
      {
        id_submotivo_repositorio: "0",
        txt_submotivo_repositorio: "Sin Submotivo",
        txt_submotivo_ov: "",
        es_edicion: false,
        sn_activo: true
      }
    ]
  },
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