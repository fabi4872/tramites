import { Accordion, Alert, Button, Col, Container, Row } from 'react-bootstrap';
import TablaAsociaciones from './TablaAsociaciones';
import ListadoMotivosSubmotivos from './ListadoMotivosSubmotivos';
import { useDispatch } from 'react-redux';
import HandleSweetAlert from '../shared/AlertModal';
import { editDescripcionMotivoOv, eliminarActivarMotivoOv } from '../../../../../modules/motivosOv';
import { useEffect, useState } from 'react';
import EditDescripcionMotivo from './EditDescripcionMotivo';
import ToastEstado from './ToastEstado';
import Swal from 'sweetalert2';
import PropTypes from "prop-types";

const ListadoMotivosOv = ({ motivosOv }) => {    
    const dispatch = useDispatch();
    const [alert, setAlert] = useState(false);
    const [edicion, setEdicion] = useState([]);

    // Handlers
    const handleGetAsociacionesByMotivoOv = (idMotivoOv) => {
        const buscado =  motivosOv.find((item) => {
            return item.id === idMotivoOv
        })
        return (buscado) ? buscado.motivos_submotivos_repositorio_asociados : [];
    }

    const handleEliminarActivarMotivo = (motivoOv) => {
        dispatch(eliminarActivarMotivoOv({ motivoOv }));
    };

    const handleOnClickEdit = (numeroItem) => {
        setEdicion((currentData) => {
            const updatedData = [...currentData];
            updatedData[numeroItem] = {
                ...updatedData[numeroItem],
                esEdicion: !edicion.esEdicion,
            };
            return updatedData;
        });
    };

    const handleChange = (e, numeroItem) => {
        const { value } = e.target;
        setEdicion((currentData) => {
            const updatedData = [...currentData];
            updatedData[numeroItem] = {
                ...updatedData[numeroItem],
                input: value,
            };
            return updatedData;
        });
    }

    const handleOnClickEditConfirm = (motivoOv, numeroItem, descripcion) => {
        setAlert(false);
        descripcion = descripcion.trim();
        if (descripcion !== "" && !existeMotivoOv(descripcion)) {
            HandleSweetAlert(() => {
                dispatch(
                    editDescripcionMotivoOv({ motivoOv, descripcion })
                );
                setEdicion(
                    (currentData) => {
                        const updatedData = [...currentData];
                        updatedData[numeroItem] = {
                            ...updatedData[numeroItem],
                            esEdicion: false,
                            input: descripcion,
                        };
                        return updatedData;
                    },
                    true
                );
            });
        } else {
            setAlert(true);
        }
    };    

    // Funciones
    const existeMotivoOv = (descripcion) => {
        return motivosOv.some((item) => {
            return item.descripcion.toLowerCase() === descripcion.trim().toLowerCase();
        });
    }

    const modal = (descripcion) => {
        Swal.fire(descripcion);
        setAlert(false);
    }

    // useEffect
    useEffect(() => {
        setEdicion(
            motivosOv.map((elemento) => ({
                esEdicion: false,
                input: elemento.descripcion,
            }))
        );
    }, [motivosOv]);

    return (
        <>
            {alert && modal("Descripción existente o inválida!")}
            <Container style={{ marginTop: "7rem", marginBottom: "4rem" }}>
                {
                    motivosOv.length > 0 && (
                        <h6><strong>{motivosOv.length}</strong><small style={{ color: "#333", marginLeft: ".5rem" }}>RESULTADOS DISPONIBLES</small></h6>
                    )
                }
                {motivosOv.length > 0 &&
                    motivosOv.map((m, i) => (
                        <Row key={m.id}>
                            <Accordion className="mb-3">
                                <Accordion.Item eventKey={m.id}>
                                    <Accordion.Header>
                                        {m.descripcion.toUpperCase()}
                                        {m.sn_activo ? (
                                            <Alert
                                                className="d-flex justify-content-center align-items-center"
                                                variant="success"
                                                style={{
                                                    padding: ".5rem 1rem",
                                                    margin: "0",
                                                    position: "absolute",
                                                    right: "3.7rem",
                                                    width: "7rem"
                                                }}
                                            >
                                                Activo
                                            </Alert>
                                        ) : (
                                            <Alert
                                                className="d-flex justify-content-center align-items-center"
                                                variant="danger"
                                                style={{
                                                    padding: ".5rem 1rem",
                                                    margin: "0",
                                                    position: "absolute",
                                                    right: "3.7rem",
                                                    width: "7rem"
                                                }}
                                            >
                                                Eliminado
                                            </Alert>
                                        )}
                                    </Accordion.Header>
                                    <Accordion.Body
                                        mt={3}
                                        style={{ position: "relative" }}
                                    >
                                        {edicion[i]?.esEdicion && (
                                            <EditDescripcionMotivo
                                                input={edicion[i]?.input}
                                                motivoOv={m}
                                                indice={i}
                                                handleChange={handleChange}
                                                handleOnClickEditConfirm={
                                                    handleOnClickEditConfirm
                                                }
                                            />
                                        )}

                                        <ToastEstado
                                            motivoOv={m}
                                            item={i}
                                            handleOnClickEdit={
                                                handleOnClickEdit
                                            }
                                            handleEliminarActivarMotivo={
                                                handleEliminarActivarMotivo
                                            }
                                        />

                                        <ListadoMotivosSubmotivos
                                            motivoOv={m}
                                            index={i}
                                            activo={m.sn_activo}
                                        />

                                        <TablaAsociaciones
                                            motivoOv={m}
                                            motivosRepositorioAsociados={handleGetAsociacionesByMotivoOv(
                                                m.id
                                            )}
                                            activo={m.sn_activo}
                                        />
                                        <Container>
                                            <Row className="mt-4 mb-3 justify-content-center d-flex text-center">
                                                <Col className="mb-2" xs={12}>
                                                    <Button
                                                        style={{
                                                            fontWeight: "bold",
                                                        }}
                                                        variant="outline-danger"
                                                        onClick={() =>
                                                            HandleSweetAlert(
                                                                () => null,
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
    motivosOv: PropTypes.array
}

export default ListadoMotivosOv;
