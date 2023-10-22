import { Button, Col, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import PropTypes from "prop-types";

const NuevoMotivo = ({ motivoInput, handleMotivo, handleAgregarMotivoOv }) => {
    return (
        <>
            <Col xs={12} lg={4}>
                <Form className="d-flex mt-3 mb-3">
                    <Form.Control
                        style={{ borderRadius: ".5rem 0 0 .5rem" }}
                        type="text"
                        placeholder="Nuevo motivo..."
                        className="me-0"
                        aria-label="Guardar"
                        id="motivoInput"
                        name="motivoInput"
                        aria-describedby="descripcion de motivo OV"
                        value={motivoInput}
                        onChange={(e) => handleMotivo(e)}
                    />
                    <Button
                        style={{ borderRadius: "0 .5rem .5rem 0" }}
                        variant="outline-danger"
                        onClick={handleAgregarMotivoOv}
                    >
                        <FaPlus
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
