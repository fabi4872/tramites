import { Accordion, Button, Col, Container, Form, Row, Toast } from 'react-bootstrap';
import PropTypes from "prop-types";
import TablaAsociaciones from './TablaAsociaciones';
import ListadoMotivosSubmotivos from './ListadoMotivosSubmotivos';
import { useDispatch } from 'react-redux';
import HandleSweetAlert from '../shared/AlertModal';
import { ImSwitch } from 'react-icons/im';
import { BsTrash } from 'react-icons/bs';
import { editMotivoOv } from '../../../../../modules/motivosOv';
import { useEffect, useState } from 'react';
import { BiEditAlt, BiListCheck } from 'react-icons/bi';

const ListadoMotivosOv = ({ motivosOv, motivosRepositorio, codigoRubro }) => {    
    const dispatch = useDispatch();
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
        console.log(numeroItem, valorNuevo);
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
        console.log(numeroItem);
        const updatedMotivoOv = { ...motivoOv };
        updatedMotivoOv.descripcion = valorNuevo.trim();
        motivosOv = [
            ...motivosOv.filter((elemento) => elemento.id !== motivoOv.id),
            updatedMotivoOv,
        ];
        dispatch(editMotivoOv({ motivoOv: updatedMotivoOv, codigoRubro }));
        setEdicion((currentData) => {
            const updatedData = [...currentData];
            updatedData[numeroItem] = {
                ...updatedData[numeroItem],
                esEdicion: false,
                input: valorNuevo,
            };
            return updatedData;
        });
    };

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
                                        {edicion[i]?.esEdicion && (
                                            <Col
                                                xs={10}
                                                lg={6}
                                                style={{
                                                    position: "absolute",
                                                    top: "-3.35rem",
                                                    zIndex: "99",
                                                }}
                                                className="mt-2 d-flex justify-content-center align-items-center"
                                            >
                                                <Form.Control
                                                    type="text"
                                                    id={`descripcion${m.id}`}
                                                    aria-describedby="descripcion nueva consultar por"
                                                    value={edicion[i]?.input}
                                                    onChange={(e) =>
                                                        handleChange(e, i)
                                                    }
                                                />
                                                <Button
                                                    variant="default"
                                                    className="repositorio-icon-button"
                                                    onClick={() =>
                                                        HandleSweetAlert(
                                                            () =>
                                                                handleOnClickEditConfirm(
                                                                    m,
                                                                    i,
                                                                    edicion[i]
                                                                        ?.input
                                                                ),
                                                            "La descripción de etiqueta ha sido guardada satisfactoriamente",
                                                            true
                                                        )
                                                    }
                                                >
                                                    <BiListCheck
                                                        className="repositorio-icon-green"
                                                        size={25}
                                                    />
                                                </Button>
                                            </Col>
                                        )}
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
                                                    className="btn repositorio-icon-margin repositorio-icon-button"
                                                    onClick={() =>
                                                        handleOnClickEdit(
                                                            i,
                                                            !edicion[i]?.esEdicion
                                                        )
                                                    }
                                                    disabled={
                                                        !m.sn_activo ||
                                                        edicion[i]?.esEdicion
                                                    }
                                                >
                                                    <BiEditAlt
                                                        className="repositorio-icon-yellow"
                                                        size={25}
                                                    />
                                                </Button>
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
                                                        style={{
                                                            fontWeight: "bold",
                                                        }}
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
