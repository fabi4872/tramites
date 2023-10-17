import { Accordion, Button, Col, Container, Row, Toast } from 'react-bootstrap';
import PropTypes from "prop-types";
import TablaAsociaciones from './TablaAsociaciones';
import ListadoMotivosSubmotivos from './ListadoMotivosSubmotivos';
import { useDispatch } from 'react-redux';
import HandleSweetAlert from '../shared/AlertModal';
import { ImSwitch } from 'react-icons/im';
import { BsTrash } from 'react-icons/bs';
import { editMotivoOv } from '../../../../../modules/motivosOv';

const ListadoMotivosOv = ({ motivosOv, motivosRepositorio, codigoRubro }) => {    
    const dispatch = useDispatch();

    // Handlers
    const handleGetAsociacionesByMotivoOv = (idMotivoOv) => {
        const buscado =  motivosOv.find((item) => {
            return item.id === idMotivoOv
        })
             
        return (buscado) ? buscado.motivos_submotivos_repositorio_asociados : [];
    }

    const handleEliminarActivarMotivo = (motivoOv, nuevoValor) => {
        const updatedMotivoOv = { ...motivoOv };
        updatedMotivoOv.sn_activo = nuevoValor;
        motivosOv = [ ...motivosOv.filter((elemento) => elemento.id !== motivoOv.id), updatedMotivoOv ];
        dispatch(editMotivoOv({ motivoOv: updatedMotivoOv, codigoRubro }));
    };

    return (
        <>
            <Container style={{ marginBottom: "6rem" }}>
                {motivosOv.length > 0 &&
                    motivosOv.map((m, i) => (
                        <Row key={m.id}>
                            <Accordion className="mb-3">
                                <Accordion.Item eventKey={m.id}>
                                    <Accordion.Header>
                                        {m.descripcion.toUpperCase()}
                                    </Accordion.Header>
                                    <Accordion.Body
                                        mt={3}
                                        style={{ position: "relative" }}
                                    >
                                        <div style={{ position: "relative" }}>
                                            <Row
                                                style={{ margin: "0 .5rem" }}
                                                className="d-flex justify-content-end align-items-center"
                                            >
                                                <Toast
                                                    className="d-inline-block mt-3 mb-3"
                                                    xs={4}
                                                    lg={4}
                                                >
                                                    <Toast.Header
                                                        closeButton={false}
                                                    >
                                                        <img
                                                            src="holder.js/20x20?text=%20"
                                                            className="rounded me-2"
                                                            alt=""
                                                            style={{
                                                                border: `.15rem solid ${
                                                                    m.sn_activo
                                                                        ? "green"
                                                                        : "#E41625"
                                                                }`,
                                                            }}
                                                        />
                                                        <strong className="me-auto">
                                                            ESTADO
                                                        </strong>
                                                    </Toast.Header>
                                                    <Toast.Body
                                                        style={{
                                                            color: `${
                                                                m.sn_activo
                                                                    ? "green"
                                                                    : "#E41625"
                                                            }`,
                                                        }}
                                                        variant={`${
                                                            m.sn_activo
                                                                ? "success"
                                                                : "danger"
                                                        }`}
                                                    >
                                                        <strong>
                                                            {m.sn_activo
                                                                ? "Activo"
                                                                : "Eliminado"}
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
                                                <Button
                                                    variant="default"
                                                    className="btn repositorio-icon-button"
                                                    onClick={() =>
                                                        HandleSweetAlert(
                                                            () =>
                                                                handleEliminarActivarMotivo(
                                                                    m,
                                                                    !m.sn_activo
                                                                ),
                                                            `El motivo ha sido ${
                                                                m.sn_activo
                                                                    ? "eliminado"
                                                                    : "activado"
                                                            } correctamente`,
                                                            true
                                                        )
                                                    }
                                                >
                                                    {m.sn_activo ? (
                                                        <BsTrash
                                                            className="repositorio-icon-red"
                                                            size={25}
                                                        />
                                                    ) : (
                                                        <ImSwitch
                                                            className="repositorio-icon-green"
                                                            size={25}
                                                        />
                                                    )}
                                                </Button>
                                            </div>
                                        </div>

                                        <ListadoMotivosSubmotivos
                                            motivoOv={m}
                                            index={i}
                                            activo={m.sn_activo}
                                            motivosRepositorio={
                                                motivosRepositorio
                                            }
                                            codigoRubro={codigoRubro}
                                        />

                                        <TablaAsociaciones
                                            motivoOv={m}
                                            motivosRepositorioAsociados={handleGetAsociacionesByMotivoOv(
                                                m.id
                                            )}
                                            codigoRubro={codigoRubro}
                                            activo={m.sn_activo}
                                        />

                                        <Container>
                                            <Row className="mt-4 mb-3 justify-content-center d-flex text-center">
                                                <Col className="mb-2" xs={12}>
                                                    <Button
                                                        style={{ fontWeight: "bold" }}
                                                        variant="outline-danger"
                                                        onClick={() =>
                                                            HandleSweetAlert(
                                                                () => null,
                                                                "Los cambios fueron guardados correctamente",
                                                                true
                                                            )
                                                        }
                                                        disabled={!m.sn_activo}
                                                    >
                                                        GUARDAR
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Row>
                    ))}
            </Container>
        </>
    );
}

ListadoMotivosOv.propTypes = {
    motivosOv: PropTypes.array,
    motivosRepositorio: PropTypes.array,
    codigoRubro: PropTypes.number
}

export default ListadoMotivosOv;
