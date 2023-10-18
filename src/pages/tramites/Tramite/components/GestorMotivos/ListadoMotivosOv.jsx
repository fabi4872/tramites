import { Accordion, Button, Col, Container, Row } from 'react-bootstrap';
import PropTypes from "prop-types";
import TablaAsociaciones from './TablaAsociaciones';
import ListadoMotivosSubmotivos from './ListadoMotivosSubmotivos';
import { useDispatch } from 'react-redux';
import HandleSweetAlert from '../shared/AlertModal';
import { editMotivoOv } from '../../../../../modules/motivosOv';
import { useEffect, useState } from 'react';
import EditDescripcionMotivo from './EditDescripcionMotivo';
import ToastEstado from './ToastEstado';
import Swal from 'sweetalert2';

const ListadoMotivosOv = ({ motivosOv, motivosRepositorio, codigoRubro }) => {    
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

    const handleEliminarActivarMotivo = (motivoOv, nuevoValor) => {
        const updatedMotivoOv = { ...motivoOv };
        updatedMotivoOv.sn_activo = nuevoValor;
        motivosOv = [ ...motivosOv.filter((elemento) => elemento.id !== motivoOv.id), updatedMotivoOv ];
        dispatch(editMotivoOv({ motivoOv: updatedMotivoOv, codigoRubro }));
    };

    const handleOnClickEdit = (numeroItem, valorNuevo) => {
        setEdicion((currentData) => {
            const updatedData = [...currentData];
            updatedData[numeroItem] = {
                ...updatedData[numeroItem],
                esEdicion: valorNuevo,
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

    const handleOnClickEditConfirm = (motivoOv, numeroItem, valorNuevo) => {
        setAlert(false);
        if (valorNuevo.trim() !== "" && !existeMotivoOv(valorNuevo)) {
            const updatedMotivoOv = { ...motivoOv };
            updatedMotivoOv.descripcion = valorNuevo.trim();
            motivosOv = [
                ...motivosOv.filter((elemento) => elemento.id !== motivoOv.id),
                updatedMotivoOv,
            ];

            HandleSweetAlert(() => {
                dispatch(
                    editMotivoOv({ motivoOv: updatedMotivoOv, codigoRubro })
                );
                setEdicion(
                    (currentData) => {
                        const updatedData = [...currentData];
                        updatedData[numeroItem] = {
                            ...updatedData[numeroItem],
                            esEdicion: false,
                            input: valorNuevo,
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
            <Container style={{ marginBottom: "4rem" }}>
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
                                            esEdicion={edicion[i]?.esEdicion}
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
    motivosOv: PropTypes.array,
    motivosRepositorio: PropTypes.array,
    codigoRubro: PropTypes.number
}

export default ListadoMotivosOv;
