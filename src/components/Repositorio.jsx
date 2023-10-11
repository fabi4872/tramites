import { useState } from 'react';
import PropTypes from "prop-types";
import { Accordion, Button, Col, Container, Form, Row, Table, Toast } from 'react-bootstrap';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';
import { ImSwitch } from 'react-icons/im';
import ModalConsulta from './ModalConsulta';
import { Typeahead } from 'react-bootstrap-typeahead';
import Swal from 'sweetalert2';

const Repositorio = ({ motivos, consultasPor }) => {
  const [selectedRowData, setSelectedRowData] = useState({
    rubro: "", 
    tipoConsulta: "", 
    config: {}
  });
  const [show, setShow] = useState(false);
  const [consultaInput, setConsultaInput] = useState('');
    
  // Data principal 
  const [data, setData] = useState({
    consultasPor
  });

  // Data para la configuración individual de las etiquetas
  let dataConfig = [];
  data.consultasPor.forEach(element => {
    dataConfig.push({
      cod_consultar: element.cod_consultar,
      nueva_descripcion: "",
      motivo_selected: [],
      submotivo_selected: [],
      submotivos: [],
      boton_asociar: false 
    })
  });
  const [dataConfigEtiquetas, setDataConfigEtiquetas] = useState(dataConfig);

  // Handlers
  const handleChangeTypeahead = (codigoConsulta, item, tipo) => {    
    setDataConfigEtiquetas((currentData) => {
      return currentData.map((consulta) => {
        if (consulta.cod_consultar === codigoConsulta) {
          const consultaActualizada = { ...consulta };
          consultaActualizada.boton_asociar = false;
          
          if (tipo === "motivo") {
            consultaActualizada.motivo_selected = item;
            consultaActualizada.submotivo_selected = [];
          } else if (tipo === "submotivo") {
            consultaActualizada.submotivo_selected = item;
            item.length > 0 && (consultaActualizada.boton_asociar = true);
          }
  
          // Carga los submotivos a partir del motivo seleccionado
          const motivoCombo = consultaActualizada.motivo_selected[0];
          if (motivoCombo) {
            const motivoEncontrado = motivos.find(
              (m) => m.id_motivo_repositorio === motivoCombo.id_motivo_repositorio
            );           
            // Filtrar submotivos que ya estén dentro de las configuraciones del consultar por
            const consultaIndex = data.consultasPor.findIndex((consulta) => consulta.cod_consultar === codigoConsulta);
            if (consultaIndex !== -1) {
              consultaActualizada.submotivos = motivoEncontrado.subMotivos.filter((element) => {
                return !data.consultasPor[consultaIndex].configuraciones.some((configuracion) => {
                  return configuracion.txt_submotivo_ov === element.txt_submotivo_ov;
                });
              });
            }            
          } else {
            consultaActualizada.submotivo_selected = [];
            consultaActualizada.submotivos = [];
            consultaActualizada.boton_asociar = false;
          }
  
          return consultaActualizada; // Devuelve el objeto actualizado
        }
  
        return consulta; // Devuelve el objeto original si el código no coincide
      });
    });
  }
  
  const handleClose = () => setShow(false);
  
  const handleShow = () => setShow(true);
  
  const handleOpenModal = (rubro, tipoConsulta, config) => {
    setSelectedRowData({
      rubro,
      tipoConsulta,
      config
    });
    handleShow();
  };

  const handleCargarConsultaHandler = () => {
    if (consultaInput) {
      setData((currentData) => ({
        ...currentData,
        consultasPor: [
          { cod_consultar: currentData.consultasPor.length + 1, descripcion: consultaInput, sn_activo: true, configuraciones: [] },
          ...currentData.consultasPor,
        ],
      }));
  
      setDataConfigEtiquetas([
        ...dataConfigEtiquetas,
        {
          cod_consultar: data.consultasPor.length + 1,
          nueva_descripcion: "",
          motivo_selected: [],
          submotivo_selected: [],
        }
      ]);
      
      setConsultaInput("");
    }
  };
  
  const handleEditarConsultaPor = (item) => {

  }

  const handleActivarEliminarConsultaPor = (codigoConsulta, estadoActual) => {
    setData((currentData) => {
      const newData = { ...currentData };
      const consultaIndex = newData.consultasPor.findIndex((consulta) => consulta.cod_consultar === codigoConsulta);
  
      if (consultaIndex !== -1) {
        const consultaActual = { ...newData.consultasPor[consultaIndex] };
        consultaActual.sn_activo = !estadoActual;
        newData.consultasPor[consultaIndex] = consultaActual;
      }

      return newData;
    });
  }  

  const handleActivarEliminarConfiguracion = (codigoConsulta, config, estadoActual) => {
    setData((currentData) => {
      const newData = { ...currentData };
      const consultaIndex = newData.consultasPor.findIndex((consulta) => consulta.cod_consultar === codigoConsulta);
  
      if (consultaIndex !== -1) {
        const consultaActual = { ...newData.consultasPor[consultaIndex] };
        const configIndex = consultaActual.configuraciones.findIndex(
          (c) =>
            c.id_motivo_repositorio === config.id_motivo_repositorio &&
            c.id_submotivo_repositorio === config.id_submotivo_repositorio
        );
  
        // Si se encuentra el índice de configuración
        if (configIndex !== -1) {
          // Reemplaza la configuración con el objeto config
          consultaActual.configuraciones[configIndex].sn_activo = !estadoActual;
        }
  
        newData.consultasPor[consultaIndex] = consultaActual;
        
        // Limpiar combos
        handleChangeTypeahead(consultaActual.cod_consultar, [], "motivo");
      }

      return newData;
    });
  }

  const handleAsociarAConfiguraciones = (codigoConsulta, motivo, submotivo) => {
    setData((currentData) => {
      const newData = { ...currentData };
      const consultaIndex = newData.consultasPor.findIndex((consulta) => consulta.cod_consultar === codigoConsulta);
  
      if (consultaIndex !== -1) {
        const consultaActual = { ...newData.consultasPor[consultaIndex] };
        consultaActual.configuraciones.push(handleObtenerConfiguracionPorDefecto(motivo[0], submotivo[0]));
        newData.consultasPor[consultaIndex] = consultaActual;
        
        // Limpiar combos
        handleChangeTypeahead(consultaActual.cod_consultar, [], "motivo");
      }

      return newData;
    });
  }

  const handleObtenerConfiguracionPorDefecto = (motivo, submotivo) => {
    return {
      sn_activo: true,
      id_motivo_repositorio: motivo.id_motivo_repositorio,
      cod_motivo_ov: motivo.cod_motivo_ov,
      cod_motivo_repositorio: motivo.cod_motivo_repositorio,
      txt_motivo_ov: motivo.txt_motivo_ov,
      txt_motivo_repositorio: motivo.txt_motivo_repositorio,
      cod_submotivo_ov: submotivo.cod_submotivo_ov,
      id_submotivo_repositorio: submotivo.id_submotivo_repositorio,
      txt_submotivo_ov: submotivo.txt_submotivo_ov,
      txt_submotivo_repositorio: submotivo.txt_submotivo_repositorio,
      adjuntos: {
        sn_adjunto_obligatorio: false,
        cnt_adjuntos_obligatorios: 0,
        botones: [
              
        ]
      },
      documentacion: {
        sn_solicitud_doc: false,
        txt_soliciutd_doc: "",
        url_solicitud_doc: ""
      }, 
      formulario: {
        sn_formulario: false,
        url_formulario: ""            
      },
      tipos_tramite: [
          
      ],
      warning: {
        sn_warning: false,
        txt_warning: ""
      }
    } 
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

  return (
    <Container className="mt-0 mb-5">
      {selectedRowData && (
        <ModalConsulta
          show={show}
          handleClose={handleClose}
          registro={selectedRowData}
          handleSweetAlert={handleSweetAlert}
        />
      )}

      <Form.Group className="repositorio-seccion">
        <Row>
          <Col
            xs={12}
            lg={{ span: 6, offset: 3 }}
            className="mb-3 d-flex flex-column justify-content-center align-items-start"
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
              Consultar por
            </Form.Label>
            <small
              style={{
                fontFamily: "sans-serif",
                fontSize: "1.2rem",
                color: "#6F6F6F",
              }}
              htmlFor="consulta"
            >
              Ingrese nuevas etiquetas consultar por
            </small>
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
              placeholder="Nueva etiqueta consultar por..."
              style={{ padding: ".7rem" }}
            />
            <Button
              style={{ padding: ".7rem" }}
              variant="danger"
              onClick={() =>
                handleSweetAlert(
                  () => handleCargarConsultaHandler(),
                  "La etiqueta ha sido agregada satisfactoriamente",
                  false
                )
              }
            >
              GUARDAR
            </Button>
          </Col>
        </Row>
      </Form.Group>

      <Container className="mt-3 mb-3">
        {data.consultasPor.map((item) => (
          <Row className="mt-2" key={item.cod_consultar}>
            <Accordion>
              <Accordion.Item eventKey={item.cod_consultar}>
                <Accordion.Header>
                  {item.descripcion.trim().toUpperCase()}
                </Accordion.Header>
                <Accordion.Body
                  className="mt-3"
                  style={{ position: "relative" }}
                >
                  <Row
                    style={{ margin: "0 1rem" }}
                    className="d-flex justify-content-end align-items-center"
                  >
                    <Toast className="d-inline-block mt-2" xs={4} lg={4}>
                      <Toast.Header closeButton={false}>
                        <img
                          src="holder.js/20x20?text=%20"
                          className="rounded me-2"
                          alt=""
                          style={{
                            border: `.15rem solid ${
                              item.sn_activo ? "green" : "#E41625"
                            }`,
                          }}
                        />
                        <strong className="me-auto">ESTADO</strong>
                      </Toast.Header>
                      <Toast.Body
                        style={{
                          color: `${item.sn_activo ? "green" : "#E41625"}`,
                        }}
                        variant={`${item.sn_activo ? "success" : "danger"}`}
                      >
                        <strong>
                          {item.sn_activo
                            ? "Activo"
                            : "Eliminado"}
                        </strong>
                      </Toast.Body>
                    </Toast>
                  </Row>
                  <div
                    style={{
                      position: "absolute",
                      right: "3.3rem",
                      top: "1.5rem",
                    }}
                  >
                    <button
                      className="btn repositorio-icon-margin repositorio-icon-button"
                      onClick={() => handleEditarConsultaPor(item)}
                      disabled={!item.sn_activo}
                    >
                      <BiEditAlt
                        className="repositorio-icon-yellow"
                        size={25}
                      />
                    </button>
                    <button
                      className="btn repositorio-icon-button"
                      onClick={() =>
                        handleSweetAlert(
                          () =>
                            handleActivarEliminarConsultaPor(
                              item.cod_consultar,
                              item.sn_activo
                            ),
                          `La etiqueta ha sido ${
                            item.sn_activo ? "eliminada" : "activada"
                          } satisfactoriamente`,
                          true
                        )
                      }
                    >
                      {item.sn_activo ? (
                        <BsTrash className="repositorio-icon-red" size={25} />
                      ) : (
                        <ImSwitch
                          className="repositorio-icon-green"
                          size={25}
                        />
                      )}
                    </button>
                  </div>

                  <Row style={{ margin: "0 2rem" }} className="mt-4 mb-2">
                    <Col xs={12} lg={5}>
                      <Form.Label className="mt-3 nuevo-tramite-label">
                        Motivos
                      </Form.Label>
                      <Typeahead
                        className="d-flex justify-content-between align-items-center"
                        labelKey="txt_motivo_repositorio"
                        id={`motivos_${item.cod_consultar}`}
                        name={`motivos_${item.cod_consultar}`}
                        options={motivos}
                        placeholder="Seleccione"
                        selected={
                          dataConfigEtiquetas.find(
                            (config) =>
                              config.cod_consultar === item.cod_consultar
                          )?.motivo_selected || []
                        }
                        onChange={(selectedOptions) =>
                          handleChangeTypeahead(
                            item.cod_consultar,
                            selectedOptions,
                            "motivo"
                          )
                        }
                        disabled={!item.sn_activo}
                        clearButton
                      />
                    </Col>

                    <Col xs={12} lg={5}>
                      <Form.Label className="mt-3 nuevo-tramite-label">
                        Submotivos
                      </Form.Label>
                      <Typeahead
                        className="d-flex justify-content-between align-items-center"
                        labelKey="txt_submotivo_repositorio"
                        id={`submotivos_${item.cod_consultar}`}
                        name={`submotivos_${item.cod_consultar}`}
                        options={
                          dataConfigEtiquetas.find(
                            (config) =>
                              config.cod_consultar === item.cod_consultar
                          )?.submotivos || []
                        }
                        placeholder="Seleccione"
                        selected={
                          dataConfigEtiquetas.find(
                            (config) =>
                              config.cod_consultar === item.cod_consultar
                          )?.submotivo_selected || []
                        }
                        onChange={(selectedOptions) =>
                          handleChangeTypeahead(
                            item.cod_consultar,
                            selectedOptions,
                            "submotivo"
                          )
                        }
                        disabled={!item.sn_activo}
                        clearButton
                      />
                    </Col>

                    <Col
                      xs={12}
                      lg={2}
                      className="d-flex justify-content-center align-items-end"
                    >
                      <Button
                        style={{ width: "100%" }}
                        onClick={() =>
                          handleSweetAlert(
                            () => handleAsociarAConfiguraciones(
                              item.cod_consultar,
                            dataConfigEtiquetas.find(
                              (config) =>
                                config.cod_consultar === item.cod_consultar
                            )?.motivo_selected,
                            dataConfigEtiquetas.find(
                              (config) =>
                                config.cod_consultar === item.cod_consultar
                            )?.submotivo_selected),
                              "Motivo y submotivo asociados satisfactoriamente",
                              false
                          )
                        }
                        className="mt-4"
                        variant="primary"
                        disabled={
                          !dataConfigEtiquetas.find(
                            (config) =>
                              config.cod_consultar === item.cod_consultar
                          )?.boton_asociar
                        }
                      >
                        Asociar
                      </Button>
                    </Col>
                  </Row>

                  <Container className="repositorio-tabla">
                    <Table className="mt-5" bordered hover>
                      <thead>
                        <tr className="text-center">
                          <th>Motivo OV</th>
                          <th>Motivo Repositorio</th>
                          <th>Submotivo OV</th>
                          <th>Submotivo Repositorio</th>
                          <th>Estado</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.configuraciones.length === 0 && (
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

                        {item.configuraciones.map((config, i) => (
                          <tr key={i}>
                            <td>
                              <div className="d-flex align-items-center">
                                <small>{config.txt_motivo_ov}</small>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <small>{config.txt_motivo_repositorio}</small>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <small>{config.txt_submotivo_ov}</small>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <small>
                                  {config.txt_submotivo_repositorio}
                                </small>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex justify-content-center align-items-center">
                                <small
                                  style={{
                                    color: `${
                                      config.sn_activo ? "green" : "#E41625"
                                    }`,
                                  }}
                                >
                                  <strong>
                                    {config.sn_activo ? "Activo" : "Eliminado"}
                                  </strong>
                                </small>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex justify-content-center align-items-center">
                                <Button
                                  disabled={!item.sn_activo}
                                  variant="default"
                                  className="repositorio-icon-button"
                                  onClick={() =>
                                    handleOpenModal(
                                      "Generales",
                                      item.descripcion,
                                      config
                                    )
                                  }
                                >
                                  <AiOutlineSetting
                                    className="repositorio-icon repositorio-icon"
                                    size={20}
                                  />
                                </Button>

                                <Button
                                  variant="default"
                                  className="repositorio-icon-button"
                                  onClick={() =>
                                    handleSweetAlert(
                                      () => handleActivarEliminarConfiguracion(
                                        item.cod_consultar,
                                        config,
                                        config.sn_activo),
                                        `La configuración ha sido ${config.sn_activo ? "eliminada" : "activada"} satisfactoriamente`,
                                        true
                                    )
                                  }
                                  disabled={!item.sn_activo}
                                >
                                  {config.sn_activo ? (
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

Repositorio.propTypes = {
  motivos: PropTypes.array,
  consultasPor: PropTypes.array
}

export default Repositorio;
