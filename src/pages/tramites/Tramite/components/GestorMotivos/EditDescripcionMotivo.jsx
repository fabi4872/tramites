import { Button, Col, Form } from "react-bootstrap";
import { BiListCheck } from "react-icons/bi";
import PropTypes from "prop-types";

const EditDescripcionMotivo = ({ input, motivoOv, indice, handleChange, handleOnClickEditConfirm }) => {
    return (
        <>
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
                    id={`descripcion${motivoOv.id}`}
                    aria-describedby="descripcion nueva consultar por"
                    value={input}
                    onChange={(e) => handleChange(e, indice)}
                />
                <Button
                    variant="default"
                    className="repositorio-icon-button"
                    onClick={() =>
                        handleOnClickEditConfirm(motivoOv, indice, input)
                    }
                >
                    <BiListCheck className="repositorio-icon-green" size={25} />
                </Button>
            </Col>
        </>
    );
}

EditDescripcionMotivo.propTypes = {
    input: PropTypes.string,
    motivoOv: PropTypes.object,
    indice: PropTypes.number,
    handleChange: PropTypes.func,
    handleOnClickEditConfirm: PropTypes.func
}

export default EditDescripcionMotivo;
