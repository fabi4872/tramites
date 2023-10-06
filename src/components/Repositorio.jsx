import { useState } from 'react';
import PropTypes from "prop-types";
import { Accordion, Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';
import ModalConsulta from './ModalConsulta';
import { Typeahead } from 'react-bootstrap-typeahead';

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
            console.log(consultaActualizada);
           
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

  const handleEliminarConsultaPor = (item) => {

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
            className="mb-3 d-flex flex-column justify-content-center align-items-start"
          >
            <Form.Label style={{ fontFamily: "sans-serif", fontSize: "1.5rem", color: "#E41625", fontWeight: "bold" }} className="m-0" htmlFor="consulta">
              Consultar por
            </Form.Label>
            <small style={{ fontFamily: "sans-serif", fontSize: "1.2rem", color: "#6F6F6F" }} htmlFor="consulta">
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
            <Button style={{ padding: ".7rem" }} variant="danger" onClick={() => handleCargarConsultaHandler()}>
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
                  <div style={{ position: "absolute", right: "1rem", top: 0 }}>
                    <button
                      className="btn repositorio-icon-margin repositorio-icon-button"
                      onClick={() => handleEditarConsultaPor(item)}
                    >
                      <BiEditAlt
                        className="repositorio-icon-yellow"
                        size={25}
                      />
                    </button>
                    <button
                      className="btn repositorio-icon-button"
                      onClick={() => handleEliminarConsultaPor(item)}
                    >
                      <BsTrash className="repositorio-icon-red" size={25} />
                    </button>
                  </div>

                  <Row className="mt-4">
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
                        clearButton
                      />
                    </Col>

                    <Col
                      xs={12}
                      lg={2}
                      className="d-flex justify-content-center align-items-end"
                    >
                      <Button
                        onClick={() => handleAsociarAConfiguraciones(
                          item.cod_consultar, 
                          dataConfigEtiquetas.find((config) => config.cod_consultar === item.cod_consultar)?.motivo_selected,
                          dataConfigEtiquetas.find((config) => config.cod_consultar === item.cod_consultar)?.submotivo_selected)}
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
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.configuraciones.length === 0 && (
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

                        {item.configuraciones.map((config, i) => (
                          <tr key={i}>
                            <td>
                              <div className="d-flex justify-content-center align-items-center">
                                <small>{config.txt_motivo_ov}</small>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex justify-content-center align-items-center">
                                <small>{config.txt_motivo_repositorio}</small>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex justify-content-center align-items-center">
                                <small>{config.txt_submotivo_ov}</small>
                              </div>
                            </td>
                            <td>
                              <div className="d-flex justify-content-center align-items-center">
                                <small>
                                  {config.txt_submotivo_repositorio}
                                </small>
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
                                      config
                                    )
                                  }
                                >
                                  <AiOutlineSetting
                                    className="repositorio-icon repositorio-icon"
                                    size={20}
                                  />
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
