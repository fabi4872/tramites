import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import { ImSwitch } from "react-icons/im";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { BiEditAlt, BiListCheck } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { editDescripcionAsociadoMotivoOv, eliminarActivarAsociadoMotivoOv } from "../../../../../../modules/motivosOv";
import HandleSweetAlert from "../../shared/AlertModal";

const TablaAsociaciones = ({ motivoOv, motivosRepositorioAsociados, activo }) => {
    const dispatch = useDispatch();
    const [edicion, setEdicion] = useState([]);
  
    // Handlers
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
        let descripcionFormateada = "";

        // Verifica que la entrada no sea un espacio en blanco vacío
        if (value.trim() === "") {
            descripcionFormateada = value;
        } else {
            // Reemplaza múltiples espacios en blanco con uno solo
            descripcionFormateada = value.replace(/\s+/g, ' ');
        }

        setEdicion((currentData) => {
            const updatedData = [...currentData];
            updatedData[numeroItem] = {
                ...updatedData[numeroItem],
                input: descripcionFormateada,
            };
            return updatedData;
        });
    }

    const handleOnClickEditConfirm = (numeroItem, idItem, descripcion) => {
        descripcion = descripcion.trim();
        let asociado = { ...motivosRepositorioAsociados.find(item => item.id === idItem) };
        if (asociado) {
            dispatch(editDescripcionAsociadoMotivoOv({ motivoOv, asociado, descripcion }));
            setEdicion((currentData) => {
                const updatedData = [...currentData];
                updatedData[numeroItem] = {
                    ...updatedData[numeroItem],
                    esEdicion: false,
                    input: descripcion,
                };
                return updatedData;
            });
        }
    };

    const handleEliminarActivarAsociacion = (idItem) => {
        let asociado = { ...motivosRepositorioAsociados.find(item => item.id === idItem) };
        if (asociado) {
            dispatch(eliminarActivarAsociadoMotivoOv({ motivoOv, asociado }));
        }
    };

    // useEffect
    useEffect(() => {
        setEdicion(
            motivosRepositorioAsociados.map((elemento) => ({
                esEdicion: false,
                input: elemento.descripcion_submotivo_ov,
            }))
        );
    }, [motivosRepositorioAsociados]);

    return (
        <>
            <Container className="repositorio-tabla">
                <Row className="mt-4">
                    <Col className="repositorio-tabla">
                        <Table bordered hover>
                            <thead>
                                <tr className="text-center">
                                    <th># Ord</th>
                                    <th>Motivo Repositorio</th>
                                    <th>Submotivo Repositorio</th>
                                    <th>Submotivo OV - Editable</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {motivosRepositorioAsociados.length === 0 && (
                                    <tr>
                                        <td colSpan={6}>
                                            <div className="d-flex justify-content-center">
                                                <small className="repositorio-tabla-mensaje mt-2 mb-2">
                                                    No hay resultados
                                                    disponibles
                                                </small>
                                            </div>
                                        </td>
                                    </tr>
                                )}

                                {motivosRepositorioAsociados.length > 0 &&
                                    motivosRepositorioAsociados.map(
                                        (item, i) => (
                                            <tr key={item.id}>
                                                <td>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <small>{i + 1}</small>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <small>
                                                            {
                                                                item.descripcion_motivo_repositorio
                                                            }
                                                        </small>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <small>
                                                            {
                                                                item.descripcion_submotivo_repositorio
                                                            }
                                                        </small>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        {edicion[i]
                                                            ?.esEdicion ? (
                                                            <div
                                                                style={{
                                                                    width: "100%",
                                                                }}
                                                                className="d-flex justify-content-between align-items-center"
                                                            >
                                                                <Form.Control
                                                                    type="text"
                                                                    id={`txt_submotivo_ov${i}`}
                                                                    aria-describedby="descripcion submotivo ov"
                                                                    value={
                                                                        edicion[
                                                                            i
                                                                        ]?.input
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        handleChange(
                                                                            e,
                                                                            i
                                                                        )
                                                                    }
                                                                />
                                                                <Button
                                                                    variant="default"
                                                                    className="repositorio-icon-button"
                                                                    onClick={() =>
                                                                        handleOnClickEditConfirm(
                                                                            i,
                                                                            item.id,
                                                                            edicion[i]
                                                                                ?.input
                                                                        )
                                                                    }
                                                                >
                                                                    <BiListCheck
                                                                        className="repositorio-icon"
                                                                        size={
                                                                            25
                                                                        }
                                                                    />
                                                                </Button>
                                                            </div>
                                                        ) : (
                                                            <small>
                                                                {
                                                                    item.descripcion_submotivo_ov
                                                                }
                                                            </small>
                                                        )}
                                                    </div>
                                                </td>
                                                <td
                                                    style={{
                                                        background: `${
                                                            item.sn_activo
                                                                ? "#E1FFE3"
                                                                : "#FFE1E1"
                                                        }`,
                                                    }}
                                                >
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <small
                                                            style={{
                                                                color: `${
                                                                    item.sn_activo
                                                                        ? "green"
                                                                        : "#E41625"
                                                                }`,
                                                            }}
                                                        >
                                                            <strong>
                                                                {item.sn_activo
                                                                    ? "Activo"
                                                                    : "Eliminado"}
                                                            </strong>
                                                        </small>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <Button
                                                            disabled={
                                                                !item.sn_activo || !activo ||
                                                                edicion[i]
                                                                    ?.esEdicion
                                                            }
                                                            variant="default"
                                                            className="repositorio-icon-button"
                                                            onClick={() =>
                                                                handleOnClickEdit(
                                                                    i,
                                                                    !edicion[i]
                                                                        ?.esEdicion
                                                                )
                                                            }
                                                        >
                                                            <BiEditAlt
                                                                className="repositorio-icon-yellow"
                                                                size={20}
                                                            />
                                                        </Button>

                                                        <Button
                                                            disabled={!activo}
                                                            variant="default"
                                                            className="repositorio-icon-button"
                                                            onClick={() =>
                                                                HandleSweetAlert(
                                                                    () =>
                                                                        handleEliminarActivarAsociacion(
                                                                            item.id
                                                                        ),
                                                                    true
                                                                )
                                                            }
                                                        >
                                                            {item.sn_activo ? (
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
                                        )
                                    )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

TablaAsociaciones.propTypes = {
    motivoOv: PropTypes.object,
    motivosRepositorioAsociados: PropTypes.array,
    activo: PropTypes.bool
}

export default TablaAsociaciones;
