import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { VscCloseAll } from "react-icons/vsc";
import { BsArrowDown, BsArrowUp, BsCalendar2Check, BsCheckAll } from "react-icons/bs";
import { LuListTodo } from "react-icons/lu";
import { FcAlphabeticalSortingAz, FcAlphabeticalSortingZa } from "react-icons/fc";

const InformacionBusqueda = ({ numeroItems }) => {
    const { filtro, orden } = useSelector((state) => state.motivosOv);
    return (
        <>
            <Container className="mt-2">
                <Row>
                    <Col
                        xs={12}
                        lg={3}
                        className="d-flex justify-content-center align-items-center p-0 mt-3"
                    >
                        <small
                            className="mx-2"
                            style={{
                                fontWeight: "bold",
                                fontSize: ".875rem",
                                color: "#333333",
                            }}
                        >
                            Filtro:
                        </small>
                        {filtro === "activos" && (
                            <div
                                className="d-flex justify-content-center align-items-center"
                                style={{
                                    padding: ".3rem .5rem",
                                    color: "green",
                                    background: "#E1FFE3",
                                    borderRadius: ".5rem",
                                    fontWeight: "bold",
                                    border: ".1rem solid green",
                                }}
                            >
                                Activos
                                <BsCheckAll
                                    style={{ marginLeft: ".5rem" }}
                                    className="repositorio-icon-green"
                                    size={20}
                                />
                            </div>
                        )}
                        {filtro === "eliminados" && (
                            <div
                                className="d-flex justify-content-center align-items-center"
                                style={{
                                    padding: ".3rem .5rem",
                                    color: "#E41625",
                                    background: "#FFE1E1",
                                    borderRadius: ".5rem",
                                    fontWeight: "bold",
                                    border: ".1rem solid #E41625",
                                }}
                            >
                                Eliminados
                                <VscCloseAll
                                    style={{ marginLeft: ".5rem" }}
                                    className="repositorio-icon-red"
                                    size={20}
                                />
                            </div>
                        )}
                        {filtro === "todos" && (
                            <div
                                className="d-flex justify-content-center align-items-center"
                                style={{
                                    padding: ".3rem .5rem",
                                    color: "#0D6EFD",
                                    background: "#DDEBFF",
                                    borderRadius: ".5rem",
                                    fontWeight: "bold",
                                    border: ".1rem solid #0D6EFD",
                                }}
                            >
                                Todos
                                <LuListTodo
                                    style={{ marginLeft: ".5rem" }}
                                    className="repositorio-icon-blue"
                                    size={20}
                                />
                            </div>
                        )}
                    </Col>

                    <Col
                        xs={12}
                        lg={6}
                        className="d-flex justify-content-center align-items-center p-0 mt-3"
                    >
                        <small
                            className="mx-2"
                            style={{
                                fontWeight: "bold",
                                fontSize: ".875rem",
                                color: "#333333",
                            }}
                        >
                            Orden:
                        </small>
                        <div
                            className="d-flex justify-content-center align-items-center"
                            style={{
                                padding: ".3rem .5rem",
                                color: "#0D6EFD",
                                background: "#FFFFFF",
                                borderRadius: ".5rem",
                                fontWeight: "bold",
                                border: ".1rem solid #0D6EFD",
                            }}
                        >
                            {orden === "alfabetico_ascendente" && (
                                <>
                                    Alfabético ascendente
                                    <FcAlphabeticalSortingAz
                                        style={{ marginLeft: ".5rem" }}
                                        className="repositorio-icon-blue"
                                        size={20}
                                    />
                                </>
                            )}
                            {orden === "alfabetico_descendente" && (
                                <>
                                    Alfabético descendente
                                    <FcAlphabeticalSortingZa
                                        style={{ marginLeft: ".5rem" }}
                                        className="repositorio-icon-blue"
                                        size={20}
                                    />
                                </>
                            )}
                            {orden === "fecha_alta_ascendente" && (
                                <>
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
                                </>
                            )}
                            {orden === "fecha_alta_descendente" && (
                                <>
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
                                </>
                            )}
                        </div>
                    </Col>
                    <Col
                        xs={12}
                        lg={3}
                        className="d-flex justify-content-center align-items-center p-0 mt-3"
                    >
                        <small
                            className="mx-2"
                            style={{
                                fontWeight: "bold",
                                fontSize: ".875rem",
                                color: "#333333",
                            }}
                        >
                            Resultados:
                        </small>
                        <div
                            className="d-flex justify-content-center align-items-center"
                            style={{
                                padding: ".3rem .5rem",
                                color: "green",
                                background: "#FFFFFF",
                                borderRadius: ".5rem",
                                fontWeight: "bold",
                                border: ".1rem solid green",
                            }}
                        >
                            {numeroItems}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

InformacionBusqueda.propTypes = {
    numeroItems: PropTypes.number
}

export default InformacionBusqueda;
