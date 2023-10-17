import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { addMotivosSubmotivosToMotivoOv } from "../../../../../modules/motivosOv";
import { BiEraser } from "react-icons/bi";
import { AiOutlineWarning } from "react-icons/ai";

const ListadoMotivosSubmotivos = ({ motivoOv, index, activo, motivosRepositorio, codigoRubro }) => {
    const dispatch = useDispatch();

    const [selectedMotivo, setSelectedMotivo] = useState();
    const [selectedSubmotivo, setSelectedSubmotivo] = useState();
    const [alert, setAlert] = useState(false);

    const handleAgregarMotivo = (motivoOv, motivos, submotivos) => {
        setAlert(false);
        const itemEncontrado = motivoOv.motivos_submotivos_repositorio_asociados.findIndex(
            (elemento) => motivos[0].id === elemento.id_motivo_repositorio &&
                submotivos[0].id === elemento.id_submotivo_repositorio);
        
        if (itemEncontrado == -1) {
            const motivo = motivos[0];
            const submotivo = submotivos[0];
            dispatch(addMotivosSubmotivosToMotivoOv({ motivoOv, motivo, submotivo, codigoRubro }));
        }
        else {
            setAlert(true);
        }       
    };

    return (
        <Container mt={3} mb={3}>
            <Row className="mt-5 mb-5">
                <Col xs={12} lg={5}>
                    <Form.Label
                        className="nuevo-tramite-label mt-4"
                        htmlFor={`typeahead-motivos_${motivoOv.id}_${index}`}
                    >
                        Motivos Repositorio
                    </Form.Label>

                    <div className="d-flex justify-content-between align-items-center">
                        <Typeahead
                            style={{ width: "100%" }}
                            labelKey="descripcion"
                            id={`typeahead-motivos_${motivoOv.id}_${index}`}
                            name={`typeahead-motivos_${motivoOv.id}_${index}`}
                            options={
                                motivosRepositorio ? motivosRepositorio : []
                            }
                            onChange={(selected) => {
                                if (selected && selected.length > 0) {
                                    setSelectedMotivo(selected);
                                    setSelectedSubmotivo(null);
                                } else {
                                    setSelectedMotivo([]);
                                    setSelectedSubmotivo(null);
                                }
                            }}
                            placeholder="Seleccione"
                            selected={selectedMotivo ? selectedMotivo : []}
                            disabled={!activo}
                        ></Typeahead>
                        <Button
                            style={{ border: "none" }}
                            variant="default"
                            className="btn-limpiar-submotivo"
                            onClick={() => {
                                setSelectedMotivo(null);
                                setSelectedSubmotivo(null);
                            }}
                            disabled={!selectedMotivo || !activo}
                        >
                            <BiEraser className="repositorio-icon" size={22} />
                        </Button>
                    </div>
                </Col>

                <Col xs={12} lg={5}>
                    <Form.Label
                        className="nuevo-tramite-label mt-4"
                        htmlFor={`typeahead-submotivos_${motivoOv.id}_${index}`}
                    >
                        Submotivos Repositorio
                    </Form.Label>

                    <div className="d-flex justify-content-between align-items-center">
                        <Typeahead
                            style={{ width: "100%" }}
                            labelKey="descripcion"
                            id={`typeahead-submotivos_${motivoOv.id}_${index}`}
                            name={`typeahead-submotivos_${motivoOv.id}_${index}`}
                            options={
                                selectedMotivo &&
                                selectedMotivo.length > 0 &&
                                selectedMotivo[0]
                                    ? selectedMotivo[0].submotivos
                                    : []
                            }
                            onChange={(selected) => {
                                if (selected.length > 0) {
                                    setSelectedSubmotivo(selected);
                                } else {
                                    setSelectedSubmotivo(null);
                                }
                            }}
                            placeholder="Seleccione"
                            selected={
                                selectedSubmotivo ? selectedSubmotivo : []
                            }
                            disabled={!activo}
                            noResultsLabel="No hay submotivos"
                        ></Typeahead>
                        <Button
                            style={{ border: "none" }}
                            variant="default"
                            className="btn-limpiar-submotivo"
                            onClick={() => setSelectedSubmotivo(null)}
                            disabled={!selectedSubmotivo || !activo}
                        >
                            <BiEraser className="repositorio-icon" size={22} />
                        </Button>
                    </div>
                </Col>

                <Col
                    xs={12}
                    lg={2}
                    className="d-flex justify-content-center align-items-center"
                >
                    <Button
                        className="mt-5"
                        style={{ width: "100%" }}
                        variant="primary"
                        onClick={() =>
                            handleAgregarMotivo(
                                motivoOv,
                                selectedMotivo,
                                selectedSubmotivo
                            )
                        }
                        disabled={
                            !selectedMotivo || !selectedSubmotivo || !activo
                        }
                    >
                        Agregar
                    </Button>
                </Col>
            </Row>

            {alert && (
                <Row className="d-flex justify-content-center align-items-center mb-3">
                    <Col xs={12} lg={4}>
                        <Alert
                            style={{ color: "#E41625", border: "none" }}
                            className="mt-3"
                            variant="danger"
                        >
                            <div className="d-flex align-items-center">
                                <AiOutlineWarning
                                    size={30}
                                    style={{ marginRight: "1rem" }}
                                />
                                <strong>La asociación ya existe!</strong>
                            </div>
                        </Alert>
                    </Col>
                </Row>
            )}
        </Container>
    );
};

ListadoMotivosSubmotivos.propTypes = {
    motivoOv: PropTypes.object,
    index: PropTypes.number,
    activo: PropTypes.bool,
    motivosRepositorio: PropTypes.array,
    codigoRubro: PropTypes.number
}

export default ListadoMotivosSubmotivos;
