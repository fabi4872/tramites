import { Button, Nav, NavDropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import PropTypes from "prop-types";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const OpcionesNav = ({ showCombosEtiquetas, handleShowCombosEtiquetas, handleChangeFiltro }) => {
    return (
        <>
            <Nav
                className="me-auto my-auto"
                style={{ maxHeight: "200px" }}
                navbarScroll
            >
                <NavDropdown
                    className="mt-3 px-3 mb-3"
                    style={{ fontWeight: "500", background: "#D3DCFF", borderRadius: ".5rem" }}
                    title="Filtros"
                    id="navbarScrollingDropdown"
                >
                    <NavDropdown.Item
                        onClick={() => handleChangeFiltro("Activos")}
                    >
                        Activos
                    </NavDropdown.Item>
                    <NavDropdown.Item
                        onClick={() => handleChangeFiltro("Eliminados")}
                    >
                        Eliminados
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                        onClick={() => handleChangeFiltro("Todos")}
                    >
                        Todos
                    </NavDropdown.Item>
                </NavDropdown>
                <div className="mt-3 mb-3">
                    <OverlayTrigger
                        placement="bottom"
                        overlay={
                            <Tooltip>
                                Mostrar u ocultar simulador de combos consultas por 
                            </Tooltip>
                        }
                    >
                        <Button
                            className="mx-5 opcion-nav"
                            variant="default"
                            onClick={handleShowCombosEtiquetas}
                            style={{ color: "#8A8A8A", background: "#F2F3F7", borderRadius: "50%" }}
                        >
                            {showCombosEtiquetas ? (
                                <FaEyeSlash size={25} />
                            ) : (
                                <FaEye size={25} />
                            )}
                        </Button>
                    </OverlayTrigger>
                </div>
            </Nav>
        </>
    );
}

OpcionesNav.propTypes = {
    showCombosEtiquetas: PropTypes.bool,
    handleShowCombosEtiquetas: PropTypes.func,
    handleChangeFiltro: PropTypes.func
}

export default OpcionesNav;
