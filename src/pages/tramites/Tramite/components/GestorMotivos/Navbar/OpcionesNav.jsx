import { Button, Nav, NavDropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import PropTypes from "prop-types";

const OpcionesNav = ({ showCombosEtiquetas, handleShowCombosEtiquetas, handleChangeFiltro }) => {
    return (
        <>
            <Nav
                className="me-auto my-2 my-lg-0 mt-3"
                style={{ maxHeight: "100px" }}
                navbarScroll
            >
                <NavDropdown
                    style={{ fontWeight: "500" }}
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
                <div>
                    <OverlayTrigger
                        placement="bottom"
                        overlay={
                            <Tooltip>
                                Mostrar u ocultar combos de etiquetas
                            </Tooltip>
                        }
                    >
                        <Button
                            variant="default"
                            onClick={handleShowCombosEtiquetas}
                        >
                            {showCombosEtiquetas ? (
                                <BsEyeSlash size={20} />
                            ) : (
                                <BsEye size={20} />
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
