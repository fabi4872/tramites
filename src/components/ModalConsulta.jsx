import { useState } from "react";
import PropTypes from "prop-types";
import { Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";

const ModalConsulta = ({show, handleClose, registro, handleSweetAlert}) => {
  const { rubro, tipoConsulta, config } = registro;
  const [cantidad, setCantidad] = useState(0);
  const [data, setData] = useState(config);

  // Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((registro) => ({
      ...registro,

      [name]: value.trim(),
    }));
  };

  const handleChangeCheck = (e) => {
    const { name, checked } = e.target;

    setData((registro) => ({
      ...registro,

      [name]: checked ? true : false,
    }));
  };

  const handleCantidadChange = (e) => {
    const nuevaCantidad = parseInt(e.target.value, 10);

    setCantidad(nuevaCantidad);
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
                Tipo de consulta:{" "}
                <strong>{tipoConsulta.trim().toUpperCase()}</strong>
              </p>

              <hr />
            </Col>
          </Row>

          <Card className="mt-3 mb-3 accordion-item">
            <Card.Header className="modal-card-header">Motivos y submotivos</Card.Header>

            <Card.Body className="mt-2">
              <Row>
                <Col className="mt-2 mb-4" xs={12} lg={6}>
                  <Form.Label
                    className="mb-2 nuevo-tramite-label"
                    htmlFor="txt_motivo_ov"
                  >
                    <div className="d-flex flex-column">
                      Descripción motivo OV
                    </div>
                  </Form.Label>

                  <Form.Control
                    type="text"
                    id="txt_motivo_ov"
                    name="txt_motivo_ov"
                    aria-describedby="descripcion motivo ov"
                    value={config.txt_motivo_ov}
                    onChange={handleChange}
                    disabled
                  />
                </Col>

                <Col className="mt-2 mb-4" xs={12} lg={6}>
                  <Form.Label
                    className="mb-2 nuevo-tramite-label"
                    htmlFor="txt_motivo_repositorio"
                  >
                    <div className="d-flex flex-column">
                      Descripción motivo repositorio
                    </div>
                  </Form.Label>

                  <Form.Control
                    type="text"
                    id="txt_motivo_repositorio"
                    name="txt_motivo_repositorio"
                    aria-describedby="descripcion motivo repositorio"
                    value={config.txt_motivo_repositorio}
                    onChange={handleChange}
                    disabled
                  />
                </Col>
              </Row>

              <Row>
                <Col className="mt-2 mb-4" xs={12} lg={6}>
                  <Form.Label
                    className="mb-2 nuevo-tramite-label"
                    htmlFor="txt_submotivo_ov"
                  >
                    <div className="d-flex flex-column">
                      Descripción submotivo OV
                    </div>
                  </Form.Label>

                  <Form.Control
                    type="text"
                    id="txt_submotivo_ov"
                    name="txt_submotivo_ov"
                    aria-describedby="descripcion submotivo ov"
                    value={config.txt_submotivo_ov}
                    onChange={handleChange}
                    disabled
                  />
                </Col>

                <Col className="mt-2 mb-4" xs={12} lg={6}>
                  <Form.Label
                    className="mb-2 nuevo-tramite-label"
                    htmlFor="txt_submotivo_repositorio"
                  >
                    <div className="d-flex flex-column">
                      Descripción submotivo repositorio
                    </div>
                  </Form.Label>

                  <Form.Control
                    type="text"
                    id="txt_submotivo_repositorio"
                    name="txt_submotivo_repositorio"
                    aria-describedby="descripcion submotivo repositorio"
                    value={config.txt_submotivo_repositorio}
                    onChange={handleChange}
                    disabled
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="mt-3 mb-3 accordion-item">
            <Card.Header className="modal-card-header">Centro de control</Card.Header>
            <Card.Body>
              <Row className="mt-3">
                <Col xs={6} lg={3} className="mb-3">
                  <Form.Group className="d-flex flex-column justify-content-center align-items-center mb-0">
                    <Form.Label style={{ fontWeight: "bold", color: "#333", fontSize: ".875rem" }}>Alerta</Form.Label>

                    <Form.Check
                      className="pl-5"
                      type="switch"
                      id="sn_warning"
                      name="sn_warning"
                      label=""
                      checked={data.sn_warning}
                      onChange={(e) => handleChangeCheck(e)}
                    />
                  </Form.Group>
                </Col>

                <Col xs={6} lg={3} className="mb-3">
                  <Form.Group className="d-flex flex-column justify-content-center align-items-center mb-0">
                    <Form.Label style={{ fontWeight: "bold", color: "#333", fontSize: ".875rem" }}>Documentación</Form.Label>

                    <Form.Check
                      className="pl-5"
                      type="switch"
                      id="sn_solicitud_doc"
                      name="sn_solicitud_doc"
                      label=""
                      checked={data.sn_solicitud_doc}
                      onChange={(e) => handleChangeCheck(e)}
                    />
                  </Form.Group>
                </Col>

                <Col xs={6} lg={3} className="mb-3">
                  <Form.Group className="d-flex flex-column justify-content-center align-items-center mb-0">
                    <Form.Label style={{ fontWeight: "bold", color: "#333", fontSize: ".875rem" }}>Adjuntos</Form.Label>

                    <Form.Check
                      className="pl-5"
                      type="switch"
                      id="sn_adjunto_obligatorio"
                      name="sn_adjunto_obligatorio"
                      label=""
                      checked={data.sn_adjunto_obligatorio}
                      onChange={(e) => handleChangeCheck(e)}
                    />
                  </Form.Group>
                </Col>

                <Col xs={6} lg={3} className="mb-3">
                  <Form.Group className="d-flex flex-column justify-content-center align-items-center mb-0">
                    <Form.Label style={{ fontWeight: "bold", color: "#333", fontSize: ".875rem" }}>Formulario</Form.Label>

                    <Form.Check
                      className="pl-5"
                      type="switch"
                      id="sn_formulario"
                      name="sn_formulario"
                      label=""
                      checked={data.sn_formulario}
                      onChange={(e) => handleChangeCheck(e)}
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
                    value={data.txt_warning}
                    disabled={!data.sn_warning}
                    onChange={handleChange}
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
                    value={data.url_formulario}
                    disabled={!data.sn_formulario}
                    onChange={handleChange}
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
                    id="txt_solicitud_doc"
                    name="txt_solicitud_doc"
                    aria-describedby="descripcion solicitud documentacion"
                    value={data.txt_solicitud_doc}
                    disabled={!data.sn_solicitud_doc}
                    onChange={handleChange}
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
                    value={data.url_solicitud_doc}
                    disabled={!data.sn_solicitud_doc}
                    onChange={handleChange}
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
                    disabled={!data.sn_adjunto_obligatorio}
                  >
                    <option>Seleccione</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
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
                      disabled={!data.sn_adjunto_obligatorio}
                    />
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>

          <Container>
            <Row className="mt-4 justify-content-center d-flex text-center">
              <Col className="mb-2" xs={12}>
                <Button variant="danger"  onClick={() =>
                handleSweetAlert(
                  () => handleClose(),
                  "Los cambios fueron guardados satisfactoriamente",
                  true
                )}>
                  GUARDAR
                </Button>
              </Col>
            </Row>
          </Container>
        </Container>
      </Modal.Body>
    </Modal>
  );
};


ModalConsulta.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  registro: PropTypes.object,
  handleSweetAlert: PropTypes.func
}

export default ModalConsulta;
