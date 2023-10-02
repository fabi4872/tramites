import { useState } from "react";
import { Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";

const ModalConsulta = ({show, handleClose, registro}) => {
  const { rubro, tipoConsulta, motivo, submotivo } = registro;
  const [cantidad, setCantidad] = useState(0);
  const handleCantidadChange = (e) => {
    const nuevaCantidad = parseInt(e.target.value, 10);
    setCantidad(nuevaCantidad);
  };

    // Handlers
    const handleChange = (event) => {
    
    };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
      dialogClassName="modal-consulta"
      size="xl"
    >
      <Modal.Header className="pb-0" closeButton></Modal.Header>

      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} lg={6}>
              <p>
                Rubro: <strong>{rubro.trim().toUpperCase()}</strong>
              </p>

              <hr />
            </Col>

            <Col xs={12} lg={6}>
              <p>
                Tipo de consulta: <strong>{tipoConsulta.trim().toUpperCase()}</strong>
              </p>

              <hr />
            </Col>
          </Row>

          <Card className="mt-3 mb-3">
            <Card.Header>Motivos y submotivos</Card.Header>

            <Card.Body className="mt-2">
              <Row>
                <Col className="mb-4" xs={12} lg={6}>
                  <Form.Label
                    className="mb-2 nuevo-tramite-label"
                    htmlFor="motivoDescripcionOV"
                  >
                    <div className="d-flex flex-column">
                      Descripción motivo OV
                      <small className="mt-1 font-italic modal-codigo-gris">
                        Código: {motivo.codigo}
                      </small>
                    </div>
                  </Form.Label>

                  <Form.Control
                    type="text"
                    id="motivoDescripcionOV"
                    name="motivoDescripcionOV"
                    aria-describedby="descripcion motivo ov"
                    value={motivo.descripcionOV}
                  />
                </Col>

                <Col className="mb-4" xs={12} lg={6}>
                  <Form.Label
                    className="mb-2 nuevo-tramite-label"
                    htmlFor="motivoDescripcionRepositorio"
                  >
                    <div className="d-flex flex-column">
                      Descripción motivo repositorio
                      <small className="mt-1 font-italic modal-codigo-gris">
                        Código: {motivo.codigo}
                      </small>
                    </div>
                  </Form.Label>

                  <Form.Control
                    type="text"
                    id="motivoDescripcionRepositorio"
                    name="motivoDescripcionRepositorio"
                    aria-describedby="descripcion motivo repositorio"
                    value={motivo.descripcionRepositorio}
                  />
                </Col>
              </Row>

              <Row>
                <Col className="mb-4" xs={12} lg={6}>
                  <Form.Label
                    className="mb-2 nuevo-tramite-label"
                    htmlFor="subMotivoDescripcionOV"
                  >
                    <div className="d-flex flex-column">
                      Descripción submotivo OV
                      <small className="mt-1 font-italic modal-codigo-gris">
                        Código: {submotivo.codigo}
                      </small>
                    </div>
                  </Form.Label>

                  <Form.Control
                    type="text"
                    id="subMotivoDescripcionOV"
                    name="subMotivoDescripcionOV"
                    aria-describedby="descripcion submotivo ov"
                    value={submotivo.descripcionOV}
                  />
                </Col>

                <Col className="mb-4" xs={12} lg={6}>
                  <Form.Label
                    className="mb-2 nuevo-tramite-label"
                    htmlFor="subMotivoDescripcionRepositorio"
                  >
                    <div className="d-flex flex-column">
                      Descripción submotivo repositorio
                      <small className="mt-1 font-italic modal-codigo-gris">
                        Código: {submotivo.codigo}
                      </small>
                    </div>
                  </Form.Label>

                  <Form.Control
                    type="text"
                    id="subMotivoDescripcionRepositorio"
                    name="subMotivoDescripcionRepositorio"
                    aria-describedby="descripcion submotivo repositorio"
                    value={submotivo.descripcionRepositorio}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="mt-3 mb-3">
            <Card.Header>Centro de control</Card.Header>
            <Card.Body>
              <Row className="mt-3">
                <Col xs={6} lg={3} className="mb-3">
                  <Form.Group className="d-flex flex-column justify-content-center align-items-center mb-0">
                    <Form.Label>Alerta</Form.Label>

                    <Form.Check
                      className="pl-5"
                      type="switch"
                      id="sn_warning"
                      name="sn_warning"
                      label=""
                      checked={true}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col xs={6} lg={3} className="mb-3">
                  <Form.Group className="d-flex flex-column justify-content-center align-items-center mb-0">
                    <Form.Label>Documentación</Form.Label>

                    <Form.Check
                      className="pl-5"
                      type="switch"
                      id="sn_solicitud_doc"
                      name="sn_solicitud_doc"
                      label=""
                      checked={true}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col xs={6} lg={3} className="mb-3">
                  <Form.Group className="d-flex flex-column justify-content-center align-items-center mb-0">
                    <Form.Label>Botón adjunto</Form.Label>

                    <Form.Check
                      className="pl-5"
                      type="switch"
                      id="sn_adjunto_obligatorio"
                      name="sn_adjunto_obligatorio"
                      label=""
                      checked={true}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>

                <Col xs={6} lg={3} className="mb-3">
                  <Form.Group className="d-flex flex-column justify-content-center align-items-center mb-0">
                    <Form.Label>Formulario</Form.Label>

                    <Form.Check
                      className="pl-5"
                      type="switch"
                      id="sn_formulario"
                      name="sn_formulario"
                      label=""
                      checked={true}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mt-3">
                <Col className="mb-4" xs={12} lg={6}>
                  <Form.Label
                    className="mb-2 nuevo-tramite-label"
                    htmlFor="txt_warning"
                  >
                    <div>Mensaje de alerta</div>
                  </Form.Label>

                  <Form.Control
                    type="text"
                    id="txt_warning"
                    name="txt_warning"
                    aria-describedby="mensaje de alerta"
                  />
                </Col>

                <Col className="mb-4" xs={12} lg={6}>
                  <Form.Label
                    className="mb-2 nuevo-tramite-label"
                    htmlFor="url_formulario"
                  >
                    <div>Url formulario</div>
                  </Form.Label>

                  <Form.Control
                    type="text"
                    id="url_formulario"
                    name="url_formulario"
                    aria-describedby="url formulario"
                  />
                </Col>
              </Row>

              <Row className="mt-3">
                <Col className="mb-4" xs={12} lg={6}>
                  <Form.Label
                    className="mb-2 nuevo-tramite-label"
                    htmlFor="txt_soliciutd_doc"
                  >
                    <div>Descripción solicitud documentación</div>
                  </Form.Label>

                  <Form.Control
                    type="text"
                    id="txt_soliciutd_doc"
                    name="txt_soliciutd_doc"
                    aria-describedby="descripcion solicitud documentacion"
                  />
                </Col>

                <Col className="mb-4" xs={12} lg={6}>
                  <Form.Label
                    className="mb-2 nuevo-tramite-label"
                    htmlFor="url_solicitud_doc"
                  >
                    <div>Url solicitud documentación</div>
                  </Form.Label>

                  <Form.Control
                    type="text"
                    id="url_solicitud_doc"
                    name="url_solicitud_doc"
                    aria-describedby="url solicitud documentacion"
                  />
                </Col>
              </Row>

              <Row className="mt-3">
                <Col className="mb-4" xs={12} lg={3}>
                  <Form.Label
                    className="mb-2 nuevo-tramite-label"
                    htmlFor="cnt_adjuntos_obligatorios"
                  >
                    <div>Cantidad de adjuntos</div>
                  </Form.Label>

                  <select
                    className="form-control"
                    aria-label="cantidad adjuntos"
                    value={cantidad}
                    onChange={handleCantidadChange}
                  >
                    <option>Seleccione</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </Col>

                {Array.from({ length: cantidad }).map((_, index) => (
                  <Col key={index} className="mb-4" xs={12} lg={3}>
                    <Form.Label
                      className="mb-2 nuevo-tramite-label"
                      htmlFor={`nombre_boton${index + 1}`}
                    >
                      <div>{`Nombre Botón ${index + 1}`}</div>
                    </Form.Label>

                    <Form.Control
                      type="text"
                      id={`nombre_boton${index + 1}`}
                      name={`nombre_boton${index + 1}`}
                      aria-describedby="nombre de boton"
                      value={`nombre_boton${index + 1}`}
                    />
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>

          <Container>
            <Row className="mt-4 justify-content-center d-flex text-center">
              <Col className="mb-2" xs={12}>
                <Button variant="danger" onClick={handleClose}>GUARDAR</Button>
              </Col>
            </Row>
          </Container>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default ModalConsulta;
