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
  },
  { 
    cod_motivo_ov: 3,
    txt_motivo_ov: "Reclamo diferencia de costo cotización y emisión OV"
  },
  { 
    cod_motivo_ov: 4,
    txt_motivo_ov: "Reclamo diferencia de datos OV"
  },
  { 
    cod_motivo_ov: 5,
    txt_motivo_ov: "Pedido de baja OV"
  },
  { 
    cod_motivo_ov: 6,
    txt_motivo_ov: "Solicitud pendiente de emision OV"
  },
  { 
    cod_motivo_ov: 7,
    txt_motivo_ov: "Solicitud Certificados OV"
  },
  { 
    cod_motivo_ov: 8,
    txt_motivo_ov: "Reclamo por asistencia OV"
  },
  { 
    cod_motivo_ov: 9,
    txt_motivo_ov: "Denuncia de siniestro OV"
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
  },
  {
    id_motivo_repositorio: "Seguros - Reclamo diferencia de costo cotización y emisión",
    txt_motivo_repositorio: "Reclamo diferencia de costo cotización y emisión",
    cod_motivo_ov: 3,
    cod_motivo_repositorio: 3,
    txt_motivo_ov: "Reclamo diferencia de costo cotización y emisión OV",
    subMotivos: [
      {
        id_submotivo_repositorio: "0",
        txt_submotivo_repositorio: "Sin Submotivo",
        cod_submotivo_ov: 0,
        txt_submotivo_ov: "Sin Submotivo OV",
      }
    ]
  },
  {
    id_motivo_repositorio: "Seguros - Reclamo diferencia de datos",
    txt_motivo_repositorio: "Reclamo diferencia de datos",
    cod_motivo_ov: 4,
    cod_motivo_repositorio: 4,
    txt_motivo_ov: "Reclamo diferencia de datos OV",
    subMotivos: [
      {
        id_submotivo_repositorio: "0",
        txt_submotivo_repositorio: "Sin Submotivo",
        cod_submotivo_ov: 0,
        txt_submotivo_ov: "Sin Submotivo OV",
      }
    ]
  },
  {
    id_motivo_repositorio: "Seguros - Pedido de baja",
    txt_motivo_repositorio: "Pedido de baja",
    cod_motivo_ov: 5,
    cod_motivo_repositorio: 5,
    txt_motivo_ov: "Pedido de baja OV",
    subMotivos: [
      {
        id_submotivo_repositorio: "80",
        txt_submotivo_repositorio: "Anulación de póliza",
        cod_submotivo_ov: 80,
        txt_submotivo_ov: "Anulación de póliza OV",
      }
    ]
  },
  {
    id_motivo_repositorio: "Seguros - Solicitud pendiente de emision",
    txt_motivo_repositorio: "Solicitud pendiente de emision",
    cod_motivo_ov: 6,
    cod_motivo_repositorio: 6,
    txt_motivo_ov: "Solicitud pendiente de emision OV",
    subMotivos: [
      {
        id_submotivo_repositorio: "51",
        txt_submotivo_repositorio: "Estado de inspección",
        cod_submotivo_ov: 51,
        txt_submotivo_ov: "Estado de inspección OV",
      },
      {
        id_submotivo_repositorio: "50",
        txt_submotivo_repositorio: "Pendiente de emisión",
        cod_submotivo_ov: 50,
        txt_submotivo_ov: "Pendiente de emisión OV",
      }
    ]
  },
  {
    id_motivo_repositorio: "Seguros - Solicitud Certificados",
    txt_motivo_repositorio: "Solicitud Certificados",
    cod_motivo_ov: 7,
    cod_motivo_repositorio: 7,
    txt_motivo_ov: "Solicitud Certificados OV",
    subMotivos: [
      {
        id_submotivo_repositorio: "19",
        txt_submotivo_repositorio: "Certificado de Libre Deuda",
        cod_submotivo_ov: 19,
        txt_submotivo_ov: "Certificado de Libre Deuda OV",
      },
      {
        id_submotivo_repositorio: "18",
        txt_submotivo_repositorio: "Certificado de Póliza en Trámite",
        cod_submotivo_ov: 18,
        txt_submotivo_ov: "Certificado de Póliza en Trámite OV",
      },
      {
        id_submotivo_repositorio: "12",
        txt_submotivo_repositorio: "Tarjeta de Circulación / Copia Tarjeta de Circulación",
        cod_submotivo_ov: 12,
        txt_submotivo_ov: "Tarjeta de Circulación / Copia Tarjeta de Circulación OV",
      },
      {
        id_submotivo_repositorio: "14",
        txt_submotivo_repositorio: "Certificado de Cobertura por Siniestro",
        cod_submotivo_ov: 14,
        txt_submotivo_ov: "Certificado de Cobertura por Siniestro OV",
      },
      {
        id_submotivo_repositorio: "15",
        txt_submotivo_repositorio: "Certificado de Cobertura",
        cod_submotivo_ov: 15,
        txt_submotivo_ov: "Certificado de Cobertura OV",
      }
    ]
  },
  {
    id_motivo_repositorio: "Seguros - Reclamo por asistencia",
    txt_motivo_repositorio: "Reclamo por asistencia",
    cod_motivo_ov: 8,
    cod_motivo_repositorio: 8,
    txt_motivo_ov: "Reclamo por asistencia OV",
    subMotivos: [
      {
        id_submotivo_repositorio: "27",
        txt_submotivo_repositorio: "Reintegro de gastos",
        cod_submotivo_ov: 27,
        txt_submotivo_ov: "Reintegro de gastos OV",
      },
      {
        id_submotivo_repositorio: "26",
        txt_submotivo_repositorio: "Negación servicio",
        cod_submotivo_ov: 26,
        txt_submotivo_ov: "Negación servicio OV",
      }
    ]
  },
  {
    id_motivo_repositorio: "Seguros - Denuncia de siniestro",
    txt_motivo_repositorio: "Denuncia de siniestro",
    cod_motivo_ov: 9,
    cod_motivo_repositorio: 9,
    txt_motivo_ov: "Denuncia de siniestro OV",
    subMotivos: [
      {
        id_submotivo_repositorio: "4",
        txt_submotivo_repositorio: "Ampliación de denuncia",
        cod_submotivo_ov: 4,
        txt_submotivo_ov: "Ampliación de denuncia OV",
      },
      {
        id_submotivo_repositorio: "5",
        txt_submotivo_repositorio: "Denuncia con formulario",
        cod_submotivo_ov: 5,
        txt_submotivo_ov: "Denuncia con formulario OV",
      }
    ]
  },
  {
    id_motivo_repositorio: "Seguros - Copia de denuncia",
    txt_motivo_repositorio: "Copia de denuncia",
    cod_motivo_ov: 9,
    cod_motivo_repositorio: 9,
    txt_motivo_ov: "Denuncia de siniestro OV",
    subMotivos: [
      {
        id_submotivo_repositorio: "0",
        txt_submotivo_repositorio: "Sin Submotivo",
        cod_submotivo_ov: 0,
        txt_submotivo_ov: "Sin Submotivo OV",
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
