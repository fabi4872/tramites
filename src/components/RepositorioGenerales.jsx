import { useState } from 'react';
import { Accordion, Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { MdOutlineAddBox } from 'react-icons/md';
import { AiOutlineSetting } from 'react-icons/ai';
import ModalConsulta from './ModalConsulta';

const motivos = [
    { 
        id: 1, 
        codigo: 1, 
        descripcionOV: "Motivo póliza OV", 
        descripcionRepositorio: "Motivo póliza repo", 
        subMotivos: 
            [ 
                { 
                    id: 1, 
                    codigo: 1, 
                    descripcionOV: "Sub motivo renovación póliza OV", 
                    descripcionRepositorio: "Sub motivo renovación póliza repo" 
                },
                { 
                    id: 2, 
                    codigo: 2, 
                    descripcionOV: "Sub motivo baja póliza OV", 
                    descripcionRepositorio: "Sub motivo baja póliza repo" 
                },
                { 
                    id: 3, 
                    codigo: 3, 
                    descripcionOV: "Sub motivo alta póliza OV", 
                    descripcionRepositorio: "Sub motivo alta póliza repo" 
                } 
            ] 
    },
    { 
        id: 2, 
        codigo: 2, 
        descripcionOV: "Motivo siniestro OV", 
        descripcionRepositorio: "Motivo siniestro repo", 
        subMotivos: 
            [ 
                { 
                    id: 1, 
                    codigo: 1, 
                    descripcionOV: "Sub motivo renovación siniestro OV", 
                    descripcionRepositorio: "Sub motivo renovación siniestro repo" 
                },
                { 
                    id: 2, 
                    codigo: 2, 
                    descripcionOV: "Sub motivo baja siniestro OV", 
                    descripcionRepositorio: "Sub motivo baja siniestro repo" 
                },
                { 
                    id: 3, 
                    codigo: 3, 
                    descripcionOV: "Sub motivo alta siniestro OV", 
                    descripcionRepositorio: "Sub motivo alta siniestro repo" 
                } 
            ] 
    },
    { 
      id: 3, 
      codigo: 3, 
      descripcionOV: "Motivo OV", 
      descripcionRepositorio: "Motivo repo", 
      subMotivos: 
          [ 
              { 
                  id: 1, 
                  codigo: 1, 
                  descripcionOV: "Sub motivo OV", 
                  descripcionRepositorio: "Sub motivo repo" 
              }
          ] 
  },
]

const RepositorioGenerales = () => {
  const [selectedRowData, setSelectedRowData] = useState({
    rubro: "", 
    tipoConsulta: "", 
    motivo: {}, 
    submotivo: {}
  });
  const [show, setShow] = useState(false);
  
  // Handlers
  const [nuevaConsulta, setNuevaConsulta] = useState(false);
  const [consultaInput, setConsultaInput] = useState('');
  const [data, setData] = useState({
    consultas: []
  })

  // Handlers
  const handleClose = () => setShow(false);
  
  const handleShow = () => setShow(true);
  
  const handleOpenModal = (rubro, tipoConsulta, motivo, submotivo) => {
    setSelectedRowData({
      rubro,
      tipoConsulta,
      motivo,
      submotivo
    });
    handleShow();
  };

  const consultaHandler = () => {
    setNuevaConsulta(true);
  }

  const cargarConsultaHandler = () => {
    consultaInput && (
      setData((currentData) => ({
        ...currentData,
        consultas: [
          ...currentData.consultas,
          { id: currentData.consultas.length + 1, codigo: currentData.consultas.length + 1, descripcion: consultaInput, motivos: [] },
        ],
      }))
    )
    
    setConsultaInput('');
    setNuevaConsulta(false);
  }

  const cargarMotivoHandler = (item, motivo) => {
    setData((currentData) => {
      const newData = { ...currentData };
      const consultaIndex = newData.consultas.findIndex((consulta) => consulta.id === item.id);
  
      if (consultaIndex !== -1) {
        const consultaActual = { ...newData.consultas[consultaIndex] };
  
        // Verifica si el motivo ya está presente antes de agregarlo
        if (!consultaActual.motivos.includes(motivo)) {
          const nuevosMotivos = [...consultaActual.motivos, motivo];
          consultaActual.motivos = nuevosMotivos;
          newData.consultas[consultaIndex] = consultaActual;
        }
      }
  
      return newData;
    });
  }

  return (
    <Container className="mt-0 mb-5">
      {selectedRowData && (
        <ModalConsulta
          show={show}
          handleClose={handleClose}
          registro={selectedRowData}
        />
      )}

      <Row className="repositorio-seccion-input">
        <Col xs={12} lg={4} className="d-flex align-items-center">
          <Button
            variant="default"
            className="mr-3 repositorio-icon-button"
            onClick={() => consultaHandler()}
          >
            <MdOutlineAddBox className="repositorio-icon" size={20} />
          </Button>
          <span className="repositorio-span">NUEVA ETIQUETA CONSULTA</span>
        </Col>

        {nuevaConsulta && (
          <Col xs={12} lg={4} className="d-flex align-items-center">
            <Form.Control
              type="text"
              id="consulta"
              aria-describedby="descripcion de consulta"
              value={consultaInput}
              onChange={(e) => setConsultaInput(e.target.value)}
            />
            <Button variant="primary" onClick={() => cargarConsultaHandler()}>
              OK
            </Button>
          </Col>
        )}
      </Row>

      <Container className="mt-3 mb-3">
        {data.consultas.map((item) => (
          <Row className="mt-2" key={item.id}>
            <Accordion>
              <Accordion.Item eventKey={item.id}>
                <Accordion.Header>
                  {item.descripcion.trim().toUpperCase()}
                </Accordion.Header>
                <Accordion.Body className="mt-3">
                  <div className="custom-select">
                    <h5>Asignar motivos</h5>
                    <div className="mt-4 options">
                      {motivos
                        .filter((motivo) => !item.motivos.includes(motivo))
                        .map((motivo) => (
                          <div
                            key={motivo.id}
                            className="option d-flex align-items-center"
                          >
                            <span className="repositorio-span">
                              {motivo.descripcionOV.trim().toUpperCase()}
                            </span>
                            <button
                              className="btn repositorio-icon-button"
                              onClick={() => cargarMotivoHandler(item, motivo)}
                            >
                              <MdOutlineAddBox
                                className="repositorio-icon"
                                size={20}
                              />
                            </button>
                          </div>
                        ))}
                    </div>
                  </div>

                  <Container className="repositorio-tabla">
                    <Table className="mt-5" striped bordered hover>
                      <thead>
                        <tr className="text-center">
                          <th>Motivo OV</th>
                          <th>Motivo Repositorio</th>
                          <th>Sub Motivo OV</th>
                          <th>Sub Motivo Repositorio</th>
                          <th>Consulta</th>
                          <th>Pedido</th>
                          <th>Reclamo</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.motivos.map((motivo) =>
                          motivo.subMotivos.map((submotivo) => (
                            <tr key={submotivo.id}>
                              <td>
                                <div className="d-flex justify-content-center align-items-center">
                                  <small className="pt-2">
                                    {motivo.descripcionOV}
                                  </small>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex justify-content-center align-items-center">
                                  <small className="pt-2">
                                    {motivo.descripcionRepositorio}
                                  </small>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex justify-content-center align-items-center">
                                  <small className="pt-2">
                                    {submotivo.descripcionOV}
                                  </small>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex justify-content-center align-items-center">
                                  <small className="pt-2">
                                    {submotivo.descripcionRepositorio}
                                  </small>
                                </div>
                              </td>
                              <td>
                                <div className="pt-2 d-flex justify-content-center align-items-center">
                                  <Form.Check
                                    className="repositorio-check"
                                    type="switch"
                                    id="sn_consulta"
                                    name="sn_consulta"
                                    label=""
                                    checked={true}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="pt-2 d-flex justify-content-center align-items-center">
                                  <Form.Check
                                    className="repositorio-check"
                                    type="switch"
                                    id="sn_pedido"
                                    name="sn_pedido"
                                    label=""
                                    checked={true}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="pt-2 d-flex justify-content-center align-items-center">
                                  <Form.Check
                                    className="repositorio-check"
                                    type="switch"
                                    id="sn_reclamo"
                                    name="sn_reclamo"
                                    label=""
                                    checked={true}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="d-flex justify-content-center align-items-center">
                                  <Button
                                    variant="default"
                                    className="repositorio-icon-button"
                                    onClick={() =>
                                      handleOpenModal(
                                        "Generales",
                                        item.descripcion,
                                        motivo,
                                        submotivo
                                      )
                                    }
                                  >
                                    <AiOutlineSetting
                                      className="repositorio-icon"
                                      size={20}
                                    />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </Table>
                  </Container>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        ))}
      </Container>
    </Container>
  );
}

export default RepositorioGenerales;
