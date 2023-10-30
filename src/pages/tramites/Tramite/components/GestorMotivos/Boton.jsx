import { Offcanvas } from "react-bootstrap";
import PropTypes from "prop-types";

const Boton = ({ showMenu, handleClose }) => {
    return (
        <>
            <Offcanvas show={showMenu} onHide={handleClose} placement="bottom">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menú de Ajustes</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul>
                        <li>Opción 1</li>
                        <li>Opción 2</li>
                        <li>Opción 3</li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

Boton.propTypes = {
    showMenu: PropTypes.bool,
    handleClose: PropTypes.func
}

export default Boton;
