import { useState } from 'react';
import { Accordion, Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { MdOutlineAddBox } from 'react-icons/md';
import { AiOutlineSetting, AiOutlineMinusSquare } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';
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
  const [consultaInput, setConsultaInput] = useState('');
  const [data, setData] = useState({
    consultas: []
  })

  // Handlers
  const handleChange = (event) => {
    
  };

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

  const cargarConsultaHandler = () => {
    consultaInput && (
      setData((currentData) => ({
        ...currentData,
        consultas: [
          { id: currentData.consultas.length + 1, codigo: currentData.consultas.length + 1, descripcion: consultaInput, motivos: [] },
          ...currentData.consultas,
        ],
      }))
    )

    setConsultaInput("");
  }

  const editarConsultaPor = (item) => {

  }

  const eliminarConsultaPor = (item) => {

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

  const disociarMotivoHandler = (item, motivo) => {
    setData((currentData) => {
      const newData = { ...currentData };
      const consultaIndex = newData.consultas.findIndex((consulta) => consulta.id === item.id);
  
      if (consultaIndex !== -1) {
        const consultaActual = { ...newData.consultas[consultaIndex] };
  
        // Verifica si el motivo ya está presente antes de quitarlo
        if (consultaActual.motivos.includes(motivo)) {
          const nuevosMotivos = consultaActual.motivos.filter((m) => m !== motivo);
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

      <Form.Group className="repositorio-seccion">
        <Row>
          <Col
            xs={12}
            lg={{ span: 6, offset: 3 }}
            className="d-flex align-items-center"
          >
            <Form.Label className="nuevo-tramite-label" htmlFor="consulta">
              Consultar Por
            </Form.Label>
          </Col>
        </Row>

        <Row>
          <Col
            xs={12}
            lg={{ span: 6, offset: 3 }}
            className="d-flex align-items-center"
          >
            <Form.Control
              type="text"
              id="consulta"
              name="consulta"
              aria-describedby="descripcion de consulta"
              value={consultaInput}
              onChange={(e) => setConsultaInput(e.target.value)}
              placeholder="Nuevo Consultar Por"
            />
            <Button variant="danger" onClick={() => cargarConsultaHandler()}>
              GUARDAR
            </Button>
          </Col>
        </Row>
      </Form.Group>

      <Container className="mt-3 mb-3">
        {data.consultas.map((item) => (
          <Row className="mt-2" key={item.id}>
            <Accordion>
              <Accordion.Item eventKey={item.id}>
                <Accordion.Header>
                  {item.descripcion.trim().toUpperCase()}
                </Accordion.Header>
                <Accordion.Body
                  className="mt-3"
                  style={{ position: "relative" }}
                >
                  <div style={{ position: "absolute", right: "1rem", top: 0 }}>
                    <button
                      className="btn repositorio-icon-margin repositorio-icon-button"
                      onClick={() => editarConsultaPor(item)}
                    >
                      <BiEditAlt
                        className="repositorio-icon-yellow"
                        size={20}
                      />
                    </button>
                    <button
                      className="btn repositorio-icon-button"
                      onClick={() => eliminarConsultaPor(item)}
                    >
                      <BsTrash className="repositorio-icon-red" size={20} />
                    </button>
                  </div>

                  {motivos.filter((motivo) => !item.motivos.includes(motivo))
                    .length !== 0 && (
                    <div className="mt-5 custom-select">
                      <h5>Asociar motivos</h5>
                      <div className="mt-4 options">
                        <Row>
                          {motivos
                            .filter((motivo) => !item.motivos.includes(motivo))
                            .map((motivo) => (
                              <Col key={motivo.id} xs={12} lg={4}>
                                <div className="option d-flex align-items-center">
                                  <span className="repositorio-span">
                                    {motivo.descripcionOV.trim().toUpperCase()}
                                  </span>
                                  <button
                                    className="btn repositorio-icon-button"
                                    onClick={() =>
                                      cargarMotivoHandler(item, motivo)
                                    }
                                  >
                                    <MdOutlineAddBox
                                      className="repositorio-icon repositorio-icon-green"
                                      size={20}
                                    />
                                  </button>
                                </div>
                              </Col>
                            ))}
                        </Row>
                      </div>
                    </div>
                  )}

                  {motivos.filter((motivo) => item.motivos.includes(motivo))
                    .length !== 0 && (
                    <div className="mt-5 custom-select">
                      <h5>Disociar motivos</h5>
                      <div className="mt-4 options">
                        <Row>
                          {motivos
                            .filter((motivo) => item.motivos.includes(motivo))
                            .map((motivo) => (
                              <Col key={motivo.id} xs={12} lg={4}>
                                <div className="option d-flex align-items-center">
                                  <span className="repositorio-span">
                                    {motivo.descripcionOV.trim().toUpperCase()}
                                  </span>
                                  <button
                                    className="btn repositorio-icon-button"
                                    onClick={() =>
                                      disociarMotivoHandler(item, motivo)
                                    }
                                  >
                                    <AiOutlineMinusSquare
                                      className="repositorio-icon repositorio-icon-red"
                                      size={20}
                                    />
                                  </button>
                                </div>
                              </Col>
                            ))}
                        </Row>
                      </div>
                    </div>
                  )}

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
                        {item.motivos.length === 0 && (
                          <tr>
                            <td colSpan={8}>
                              <div className="d-flex justify-content-center">
                                <small className="repositorio-tabla-mensaje">
                                  No hay resultados disponibles
                                </small>
                              </div>
                            </td>
                          </tr>
                        )}
                        {item.motivos.map((motivo) =>
                          motivo.subMotivos.map((submotivo) => (
                            <tr key={submotivo.id}>
                              <td>
                                <div className="d-flex justify-content-center align-items-center">
                                  <small>{motivo.descripcionOV}</small>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex justify-content-center align-items-center">
                                  <small>{motivo.descripcionRepositorio}</small>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex justify-content-center align-items-center">
                                  <small>{submotivo.descripcionOV}</small>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex justify-content-center align-items-center">
                                  <small>
                                    {submotivo.descripcionRepositorio}
                                  </small>
                                </div>
                              </td>
                              <td>
                                <div className="d-flex justify-content-center align-items-center">
                                  <Form.Check
                                    type="switch"
                                    id="sn_consulta"
                                    name="sn_consulta"
                                    label=""
                                    checked={true}
                                    onChange={handleChange}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="d-flex justify-content-center align-items-center">
                                  <Form.Check
                                    type="switch"
                                    id="sn_pedido"
                                    name="sn_pedido"
                                    label=""
                                    checked={true}
                                    onChange={handleChange}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="d-flex justify-content-center align-items-center">
                                  <Form.Check
                                    type="switch"
                                    id="sn_reclamo"
                                    name="sn_reclamo"
                                    label=""
                                    checked={true}
                                    onChange={handleChange}
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
                                      className="repositorio-icon repositorio-icon-blue"
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
