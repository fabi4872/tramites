import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row, Table, Toast } from 'react-bootstrap';
import { Typeahead } from "react-bootstrap-typeahead";
import { BiEditAlt, BiListCheck } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { ImSwitch } from "react-icons/im";
import Swal from "sweetalert2";

const MotivoSubMotivoABM = ({ motivos }) => {
  const [motivosRepo, setMotivosRepo] = useState(motivos);
  const [motivoSelected, setMotivoSelected] = useState([]);

  // Handlers
  const handleChangeTypeahead = (e) => {
    if (e && e.length > 0) {
      setMotivoSelected([e[0]]);
    } else {
      setMotivoSelected([]);
    }
  }

  const handleChangeMotivo = (e) => {
    const { value } = e.target;
    setMotivosRepo((currentData) => {
      const updatedData = [...currentData];
      const motivoIndex = existe(updatedData);

      if (motivoIndex !== -1) {
        const updatedMotivo = { ...updatedData[motivoIndex] };
        updatedMotivo.txt_motivo_ov = value;
        updatedData[motivoIndex] = updatedMotivo;
        setMotivoSelected([updatedMotivo]);
      }

      return updatedData;
    });
  };

  const handleEliminarActivarMotivo = () => {
    setMotivosRepo((currentData) => {
      const updatedData = [...currentData];
      const motivoIndex = existe(updatedData);

      if (motivoIndex !== -1) {
        const updatedMotivo = { ...updatedData[motivoIndex] };
        updatedMotivo.sn_activo = !updatedMotivo.sn_activo;
        updatedData[motivoIndex] = updatedMotivo;
        setMotivoSelected([updatedMotivo]);
      }

      return updatedData;
    });
  };

  const handleChangeSubMotivo = (e, numeroItem) => {
    const { value } = e.target;
    setMotivosRepo((currentData) => {
      const updatedData = [...currentData];
      const motivoIndex = existe(updatedData);
      
      if (motivoIndex !== -1) {
        const updatedMotivo = { ...updatedData[motivoIndex] };
        updatedMotivo.subMotivos[numeroItem].txt_submotivo_ov = value;
        updatedData[motivoIndex] = updatedMotivo;
      }
    
      return updatedData;
    });
  };

  const handleEliminarActivarSubMotivo = (numeroItem, valor) => {
    setMotivosRepo((currentData) => {
      const updatedData = [...currentData];
      const motivoIndex = existe(updatedData);
      
      if (motivoIndex !== -1) {
        const updatedMotivo = { ...updatedData[motivoIndex] };
        updatedMotivo.subMotivos[numeroItem].sn_activo = valor;
        updatedData[motivoIndex] = updatedMotivo;
      }
    
      return updatedData;
    });
  };

  const handleOnClickEdit = (numeroItem, valor) => {  
    setMotivosRepo((currentData) => {
      const updatedData = [...currentData];
      const motivoIndex = existe(updatedData);
  
      if (motivoIndex !== -1) {
        // Clona el motivo seleccionado
        const updatedMotivo = { ...updatedData[motivoIndex] };
        // Modifica el submotivo en el motivo clonado
        updatedMotivo.subMotivos[numeroItem].es_edicion = valor;
        // Actualiza el estado con el motivo modificado
        updatedData[motivoIndex] = updatedMotivo;
      }
        
      return updatedData;
    });
  };

  const handleOnClickConfirmEdit = (text, numeroItem) => { 
    setMotivosRepo((currentData) => {
      const updatedData = [...currentData];
      const motivoIndex = existe(updatedData);

      if (motivoIndex !== -1) {
        const updatedMotivo = { ...updatedData[motivoIndex] };
        updatedMotivo.subMotivos[numeroItem].es_edicion = false;
        updatedMotivo.subMotivos[numeroItem].txt_submotivo_ov = text;
        updatedData[motivoIndex] = updatedMotivo;
      }
      return updatedData;
    });
  };

  // Funciones
  const existe = (data) => {
    if (motivoSelected.length > 0) {
      // Encuentra el índice del motivo seleccionado
      return data.findIndex(
        (motivo) => motivo.id_motivo_repositorio === motivoSelected[0].id_motivo_repositorio
      );
    }
    return -1;
  }

  // SweetAlert2
  const handleSweetAlert = (funcion, mensajeSuccess, esRevertible) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Desea confirmar?',
      text: !esRevertible ? "¡No podrá revertir esto!" : "Esta acción puede revertirse",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true,
      customContainerClass: 'sweet-alert-container'
    }).then((result) => {
      if (result.isConfirmed) {
        funcion();
        swalWithBootstrapButtons.fire(
          '¡Felicidades!',
          mensajeSuccess,
          'success'
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Operación cancelada por el usuario',
          'error'
        )
      }
    })
  }
 
  // useEffect
  useEffect(() => {
  }, [motivoSelected]);
  
  return (
    <Container>
      <Col
        className="d-flex flex-column repositorio-seccion"
        style={{ marginBottom: "4.5rem" }}
        xs={12}
        lg={{ span: 8, offset: 2 }}
      >
        <Form.Label
          style={{
            fontFamily: "sans-serif",
            fontSize: "1.5rem",
            color: "#E41625",
            fontWeight: "bold",
          }}
          className="m-0"
          htmlFor="consulta"
        >
          Motivos y submotivos
        </Form.Label>
        <small
          style={{
            fontFamily: "sans-serif",
            fontSize: "1.2rem",
            color: "#6F6F6F",
          }}
          htmlFor="consulta"
        >
          Seleccione un motivo para su edición
        </small>
        <Typeahead
          className="mt-2 d-flex justify-content-between align-items-center"
          labelKey="id_motivo_repositorio"
          id={`motivo`}
          name={`motivo`}
          options={motivosRepo}
          placeholder="Seleccione"
          selected={motivoSelected.length > 0 ? motivoSelected : []}
          onChange={(selectedOptions) => handleChangeTypeahead(selectedOptions)}
          clearButton
        />
      </Col>

      {motivoSelected.length > 0 && (
        <Card className="mt-3 mb-3 accordion-item">
          <Card.Header className="modal-card-header-edicion" style={{ background: "#CFE2FF" }}>
            Centro de edición
          </Card.Header>
          <Card.Body>
            <div style={{ position: "relative" }}>
              <Row
                style={{ margin: "0 1rem" }}
                className="d-flex justify-content-end align-items-center"
              >
                <Toast className="d-inline-block mt-3 mb-3" xs={4} lg={4}>
                  <Toast.Header closeButton={false}>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                      style={{
                        border: `.15rem solid ${
                          motivoSelected[0].sn_activo ? "green" : "#E41625"
                        }`,
                      }}
                    />
                    <strong className="me-auto">ESTADO</strong>
                  </Toast.Header>
                  <Toast.Body
                    style={{
                      color: `${
                        motivoSelected[0].sn_activo ? "green" : "#E41625"
                      }`,
                    }}
                    variant={`${
                      motivoSelected[0].sn_activo ? "success" : "danger"
                    }`}
                  >
                    <strong>
                      {motivoSelected[0].sn_activo ? "Activo" : "Eliminado"}
                    </strong>
                  </Toast.Body>
                </Toast>
              </Row>
              <div
                style={{
                  position: "absolute",
                  right: "2rem",
                  top: "1rem",
                }}
              >
                <button
                  className="btn repositorio-icon-button"
                  onClick={() =>
                    handleSweetAlert(
                      () => handleEliminarActivarMotivo(),
                      `El motivo ha sido ${
                        motivoSelected[0].sn_activo ? "eliminado" : "activado"
                      } satisfactoriamente`,
                      true
                    )
                  }
                >
                  {motivoSelected[0].sn_activo ? (
                    <BsTrash className="repositorio-icon-red" size={25} />
                  ) : (
                    <ImSwitch className="repositorio-icon-green" size={25} />
                  )}
                </button>
              </div>
            </div>

            <Row className="mt-4 mb-5" style={{ margin: "0 1rem" }}>
              <Col xs={12} lg={6}>
                <Form.Label
                  className="nuevo-tramite-label"
                  htmlFor="txt_motivo_repositorio"
                >
                  Motivo Repositorio
                </Form.Label>
                <Form.Control
                  type="text"
                  id="txt_motivo_repositorio"
                  aria-describedby="descripcion motivo repositorio"
                  value={
                    motivoSelected.length > 0
                      ? motivoSelected[0].txt_motivo_repositorio
                      : ""
                  }
                  disabled
                />
              </Col>

              <Col xs={12} lg={6}>
                <Form.Label
                  className="nuevo-tramite-label"
                  htmlFor="txt_motivo_ov"
                >
                  Motivo OV
                </Form.Label>
                <Form.Control
                  type="text"
                  id="txt_motivo_ov"
                  aria-describedby="descripcion motivo ov"
                  value={
                    motivoSelected.length > 0
                      ? motivoSelected[0].txt_motivo_ov
                      : ""
                  }
                  onChange={(e) => handleChangeMotivo(e)}
                  disabled={!motivoSelected[0].sn_activo}
                />
              </Col>
            </Row>

            <Row className="mt-4">
              <Col className="repositorio-tabla">
                <h5 className="mb-3">Submotivos</h5>
                <Table bordered hover>
                  <thead>
                    <tr className="text-center">
                      <th># Ord</th>
                      <th>Submotivo Repositorio</th>
                      <th>Submotivo OV - Editable</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {motivoSelected.length === 0 && (
                      <tr>
                        <td colSpan={6}>
                          <div className="d-flex justify-content-center">
                            <small className="repositorio-tabla-mensaje">
                              No hay resultados disponibles
                            </small>
                          </div>
                        </td>
                      </tr>
                    )}

                    {motivoSelected.length > 0 &&
                      motivoSelected[0].subMotivos.map((submotivo, i) => (
                        <tr key={i}>
                          <td>
                            <div className="d-flex justify-content-center align-items-center">
                              <small>{i + 1}</small>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <small>
                                {submotivo.txt_submotivo_repositorio}
                              </small>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              {submotivo.es_edicion ? (
                                <div
                                  style={{ width: "100%" }}
                                  className="d-flex justify-content-between align-items-center"
                                >
                                  <Form.Control
                                    type="text"
                                    id={`txt_submotivo_ov${i}`}
                                    aria-describedby="descripcion submotivo ov"
                                    value={submotivo.txt_submotivo_ov}
                                    onChange={(e) =>
                                      handleChangeSubMotivo(e, i)
                                    }
                                  />
                                  <Button
                                    variant="default"
                                    className="repositorio-icon-button"
                                    onClick={() =>
                                      handleOnClickConfirmEdit(
                                        submotivo.txt_submotivo_ov,
                                        i
                                      )
                                    }
                                  >
                                    <BiListCheck
                                      className="repositorio-icon"
                                      size={25}
                                    />
                                  </Button>
                                </div>
                              ) : (
                                <small>{submotivo.txt_submotivo_ov}</small>
                              )}
                            </div>
                          </td>
                          <td
                            style={{
                              background: `${
                                submotivo.sn_activo ? "#E1FFE3" : "#FFE1E1"
                              }`,
                            }}
                          >
                            <div className="d-flex justify-content-center align-items-center">
                              <small
                                style={{
                                  color: `${
                                    submotivo.sn_activo ? "green" : "#E41625"
                                  }`,
                                }}
                              >
                                <strong>
                                  {submotivo.sn_activo ? "Activo" : "Eliminado"}
                                </strong>
                              </small>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex justify-content-center align-items-center">
                              <Button
                                disabled={
                                  !submotivo.sn_activo ||
                                  submotivo.es_edicion ||
                                  !motivoSelected[0].sn_activo
                                }
                                variant="default"
                                className="repositorio-icon-button"
                                onClick={() =>
                                  handleOnClickEdit(i, !submotivo.es_edicion)
                                }
                              >
                                <BiEditAlt
                                  className="repositorio-icon-yellow"
                                  size={20}
                                />
                              </Button>

                              <Button
                                variant="default"
                                className="repositorio-icon-button"
                                onClick={() =>
                                  handleSweetAlert(
                                    () =>
                                      handleEliminarActivarSubMotivo(
                                        i,
                                        !submotivo.sn_activo
                                      ),
                                    `El submotivo ha sido ${
                                      submotivo.sn_activo
                                        ? "eliminado"
                                        : "activado"
                                    } satisfactoriamente`,
                                    true
                                  )
                                }
                                disabled={!motivoSelected[0].sn_activo}
                              >
                                {submotivo.sn_activo ? (
                                  <BsTrash
                                    className="repositorio-icon-red"
                                    size={20}
                                  />
                                ) : (
                                  <ImSwitch
                                    className="repositorio-icon-green"
                                    size={20}
                                  />
                                )}
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </Col>
            </Row>

            <Container>
              <Row className="mt-4 mb-3 justify-content-center d-flex text-center">
                <Col className="mb-2" xs={12}>
                  <Button
                    variant="danger"
                    onClick={() =>
                      handleSweetAlert(
                        () => setMotivoSelected(motivoSelected),
                        "Los cambios fueron guardados satisfactoriamente",
                        true
                      )
                    }
                    disabled={!motivoSelected[0].sn_activo}
                  >
                    GUARDAR
                  </Button>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

MotivoSubMotivoABM.propTypes = {
  motivos: PropTypes.array
}

export default MotivoSubMotivoABM;
