import { Button, Col, Form } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import PropTypes from "prop-types";

const NuevoMotivo = ({ motivoInput, handleMotivo, handleAgregarMotivoOv }) => {
    return (
        <>
            <Col xs={12} lg={4} style={{ marginRight: "1rem" }}>
                <Form className="d-flex">
                    <Form.Control
                        type="text"
                        placeholder="Nuevo motivo..."
                        className="me-2"
                        aria-label="Guardar"
                        id="motivoInput"
                        name="motivoInput"
                        aria-describedby="descripcion de motivo OV"
                        value={motivoInput}
                        onChange={(e) => handleMotivo(e)}
                    />
                    <Button
                        variant="outline-danger"
                        onClick={handleAgregarMotivoOv}
                    >
                        <AiOutlinePlus
                            style={{ paddingBottom: ".2rem" }}
                            size={20}
                        />
                    </Button>
                </Form>
            </Col>
        </>
    );
};

NuevoMotivo.propTypes = {
    motivoInput: PropTypes.string,
    handleMotivo: PropTypes.func,
    handleAgregarMotivoOv: PropTypes.func
}

export default NuevoMotivo;
