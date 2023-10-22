import { Button, Col, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { FiCheck } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const EditDescripcionMotivo = ({ input, motivoOv, indice, handleChange, handleOnClickEditConfirm, handleOnClickEditCancel }) => {
    return (
        <>
            <Col
                xs={6}
                lg={4}
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
                    className="repositorio-icon-button p-1"
                    onClick={() => handleOnClickEditCancel(indice)}
                >
                    <IoMdClose className="repositorio-icon-red" size={20} />
                </Button>
                <Button
                    variant="default"
                    className="repositorio-icon-button p-0"
                    onClick={() =>
                        handleOnClickEditConfirm(motivoOv, indice, input)
                    }
                >
                    <FiCheck className="repositorio-icon-green" size={20} />
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
    handleOnClickEditConfirm: PropTypes.func,
    handleOnClickEditCancel: PropTypes.func
}

export default EditDescripcionMotivo;
