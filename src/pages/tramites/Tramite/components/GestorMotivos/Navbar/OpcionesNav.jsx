import { Button, Col, Nav, NavDropdown, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { BsArrowDown, BsArrowUp, BsCalendar2Check, BsCheckAll } from "react-icons/bs";
import { VscCloseAll } from "react-icons/vsc";
import PropTypes from "prop-types";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import { FcAlphabeticalSortingAz, FcAlphabeticalSortingZa } from "react-icons/fc";
import { TbHelpOff, TbHelp } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { activarDesactivarAyudas } from "../../../../../../modules/motivosOv";

const OpcionesNav = ({ showCombosEtiquetas, handleShowCombosEtiquetas, handleChangeFiltro, handleChangeOrden }) => {
    const { showAyudas } = useSelector((state) => state.motivosOv);
    const dispatch = useDispatch();
    
    // Handlers
    const handlerActivarDesactivarAyudas = () => {
        dispatch(
            activarDesactivarAyudas()
        );
    }

    return (
        <>
            <Nav
                className="me-auto my-auto"
                style={{ maxHeight: "200px" }}
                navbarScroll
            >
                <Row>
                    <Col>
                        <NavDropdown
                            className="mt-3 px-3 mb-3"
                            style={{
                                fontWeight: "500",
                                background: "#F2F3F7",
                                borderRadius: ".5rem",
                            }}
                            title="Filtros"
                            id="navbarScrollingDropdown"
                        >
                            <NavDropdown.Item
                                onClick={() => handleChangeFiltro("activos")}
                            >
                                <div className="d-flex align-items-center repositorio-option-nav">
                                    Activos
                                    <BsCheckAll
                                        className="mx-2 repositorio-icon-green"
                                        size={20}
                                    />
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                onClick={() => handleChangeFiltro("eliminados")}
                            >
                                <div className="d-flex align-items-center repositorio-option-nav">
                                    Eliminados
                                    <VscCloseAll
                                        className="mx-2 repositorio-icon-red"
                                        size={20}
                                    />
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                                onClick={() => handleChangeFiltro("todos")}
                            >
                                <div className="d-flex align-items-center repositorio-option-nav">
                                    Todos
                                    <LuListTodo
                                        className="mx-2 repositorio-icon-blue"
                                        size={20}
                                    />
                                </div>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Col>

                    <Col>
                        <NavDropdown
                            className="mt-3 px-3 mb-3"
                            style={{
                                fontWeight: "500",
                                background: "#F2F3F7",
                                borderRadius: ".5rem",
                            }}
                            title="Orden"
                            id="navbarScrollingDropdown"
                        >
                            <NavDropdown.Item
                                onClick={() => handleChangeOrden("alfabetico_ascendente")}
                            >
                                <div className="d-flex align-items-center repositorio-option-nav">
                                    Alfabético ascendente
                                    <FcAlphabeticalSortingAz
                                        className="mx-2 repositorio-icon-green"
                                        size={20}
                                    />
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                onClick={() => handleChangeOrden("alfabetico_descendente")}
                            >
                                <div className="d-flex align-items-center repositorio-option-nav">
                                    Alfabético descendente
                                    <FcAlphabeticalSortingZa
                                        className="mx-2 repositorio-icon"
                                        size={20}
                                    />
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                                onClick={() => handleChangeOrden("fecha_alta_ascendente")}
                            >
                                <div className="d-flex align-items-center repositorio-option-nav">
                                    Fecha de alta ascendente
                                    <BsCalendar2Check
                                        style={{ marginLeft: ".5rem" }}
                                        className="repositorio-icon-blue"
                                        size={16}
                                    />
                                    <BsArrowUp
                                        style={{ color: "#333333" }}
                                        size={16}
                                    />
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                onClick={() => handleChangeOrden("fecha_alta_descendente")}
                            >
                                <div className="d-flex align-items-center repositorio-option-nav">
                                    Fecha de alta descendente
                                    <BsCalendar2Check
                                        style={{ marginLeft: ".5rem" }}
                                        className="repositorio-icon-blue"
                                        size={16}
                                    />
                                    <BsArrowDown
                                        style={{ color: "#333333" }}
                                        size={16}
                                    />
                                </div>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Col>

                    <Col>
                        <div className="mt-3 mb-3 text-center">
                            <OverlayTrigger
                                placement="bottom"
                                overlay={
                                    <Tooltip>
                                        Mostrar u ocultar simulador de combos en
                                        ABM de etiquetas.
                                    </Tooltip>
                                }
                            >
                                <Button
                                    className="opcion-nav"
                                    variant="default"
                                    onClick={handleShowCombosEtiquetas}
                                    style={{
                                        color: "#8A8A8A",
                                        background: "#F2F3F7",
                                        borderRadius: "50%",
                                    }}
                                >
                                    {showCombosEtiquetas ? (
                                        <FaEyeSlash size={25} />
                                    ) : (
                                        <FaEye size={25} />
                                    )}
                                </Button>
                            </OverlayTrigger>
                        </div>
                    </Col>

                    <Col>
                        <div className="mt-3 mb-3 text-center">
                            <OverlayTrigger
                                placement="bottom"
                                overlay={
                                    <Tooltip>
                                        Mostrar u ocultar ayudas sugeridas.
                                    </Tooltip>
                                }
                            >
                                <Button
                                    className="opcion-nav"
                                    variant="default"
                                    onClick={handlerActivarDesactivarAyudas}
                                    style={{
                                        color: "#8A8A8A",
                                        background: "#F2F3F7",
                                        borderRadius: "50%",
                                    }}
                                >
                                    {showAyudas ? (
                                        <TbHelpOff size={25} />
                                    ) : (
                                        <TbHelp size={25} />
                                    )}
                                </Button>
                            </OverlayTrigger>
                        </div>
                    </Col>
                </Row>
            </Nav>
        </>
    );
}

OpcionesNav.propTypes = {
    showCombosEtiquetas: PropTypes.bool,
    handleShowCombosEtiquetas: PropTypes.func,
    handleChangeFiltro: PropTypes.func,
    handleChangeOrden: PropTypes.func
}

export default OpcionesNav;
