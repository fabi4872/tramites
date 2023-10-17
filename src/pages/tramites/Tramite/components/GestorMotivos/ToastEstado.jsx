import { Button, Row, Toast } from "react-bootstrap";
import HandleSweetAlert from "../shared/AlertModal";
import { BiEditAlt } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { ImSwitch } from "react-icons/im";
import PropTypes from "prop-types";

const ToastEstado = ({ motivoOv, esEdicion, item, handleOnClickEdit, handleEliminarActivarMotivo }) => {
    return (
        <div style={{ position: "relative" }}>
            <Row
                style={{ margin: "0 .5rem" }}
                className="d-flex justify-content-end align-items-center"
            >
                <Toast className="d-inline-block mt-3 mb-3" xs={4} lg={4}>
                    <Toast.Header closeButton={false}>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                            style={{
                                border: `.15rem solid ${
                                    motivoOv.sn_activo ? "green" : "#E41625"
                                }`,
                            }}
                        />
                        <strong className="me-auto">ESTADO</strong>
                    </Toast.Header>
                    <Toast.Body
                        style={{
                            color: `${motivoOv.sn_activo ? "green" : "#E41625"}`,
                        }}
                        variant={`${motivoOv.sn_activo ? "success" : "danger"}`}
                    >
                        <strong>{motivoOv.sn_activo ? "Activo" : "Eliminado"}</strong>
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
                    onClick={() => handleOnClickEdit(item, !esEdicion)}
                    disabled={!motivoOv.sn_activo || esEdicion}
                >
                    <BiEditAlt className="repositorio-icon-yellow" size={25} />
                </Button>
                <Button
                    variant="default"
                    className="btn repositorio-icon-button"
                    onClick={() =>
                        HandleSweetAlert(
                            () => handleEliminarActivarMotivo(motivoOv, !motivoOv.sn_activo),
                            true
                        )
                    }
                >
                    {motivoOv.sn_activo ? (
                        <BsTrash className="repositorio-icon-red" size={25} />
                    ) : (
                        <ImSwitch
                            className="repositorio-icon-green"
                            size={25}
                        />
                    )}
                </Button>
            </div>
        </div>
    );
};

ToastEstado.propTypes = {
    motivoOv: PropTypes.object,
    esEdicion: PropTypes.bool,
    item: PropTypes.number,
    handleOnClickEdit: PropTypes.func,
    handleEliminarActivarMotivo: PropTypes.func
}

export default ToastEstado;
