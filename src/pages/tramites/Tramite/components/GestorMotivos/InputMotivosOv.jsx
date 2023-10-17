import { Button, Col, Form, Row } from "react-bootstrap";
import HandleSweetAlert from "../shared/AlertModal";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addMotivoOv } from "../../../../../modules/motivosOv";

const InputMotivosOv = ({ codigoRubro, motivosOv }) => {
    const dispatch = useDispatch();

    const [motivoInput, setMotivoInput] = useState('');
    
    // Handlers
    const handleAgregarMotivoOv = () => {
        const esRevertible = false;
        
        !existeMotivoOv() ? (
            HandleSweetAlert(
                () => {
                    dispatch(addMotivoOv({ motivoInput, codigoRubro }));
                    setMotivoInput('');
                },
                'Se agregó el motivo OV correctamente',
                esRevertible
            )
        ) : (
            alert("Ya existe")
        )
    };

    // Funciones
    const existeMotivoOv = () => {
        return motivosOv.some((item) => {
            return item.descripcion.toLowerCase() === motivoInput.trim().toLowerCase();
        });
    }
  
    return (
        <>
            <Form.Group style={{ margin: "6rem 0" }}>
                <Row>
                    <Col
                        xs={12}
                        lg={{ span: 6, offset: 3 }}
                        className="d-flex flex-column"
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
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col
                        xs={12}
                        lg={{ span: 6, offset: 3 }}
                        className="d-flex align-items-center"
                    >
                        <Form.Control
                            className="input-motivos"
                            type="text"
                            id="motivoInput"
                            name="motivoInput"
                            aria-describedby="descripcion de motivo OV"
                            value={motivoInput}
                            onChange={(e) => setMotivoInput(e.target.value)}
                            placeholder="Descripción de nuevo motivo..."
                        ></Form.Control>
                        <Button
                            style={{ fontWeight: "bold" }}
                            className="input-motivos-btn"
                            variant="danger"
                            onClick={handleAgregarMotivoOv}
                        >
                            GUARDAR
                        </Button>
                    </Col>
                </Row>
            </Form.Group>
        </>
    );
};

InputMotivosOv.propTypes = {
    codigoRubro: PropTypes.number,
    motivosOv: PropTypes.array
}

export default InputMotivosOv;
