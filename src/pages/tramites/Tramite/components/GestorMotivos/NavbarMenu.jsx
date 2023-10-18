import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PropTypes from "prop-types";
import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { AiOutlinePlus } from "react-icons/ai";
import { BsEye, BsEyeSlash, BsSearch } from 'react-icons/bs';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import HandleSweetAlert from '../shared/AlertModal';
import { addMotivoOv } from '../../../../../modules/motivosOv';
import SimuladorCombosEtiquetas from './SimuladorCombosEtiquetas';
import ListadoMotivosOv from './ListadoMotivosOv';

const NavbarMenu = ({ codigoRubro, motivosOv, motivosRepositorio }) => {
    const dispatch = useDispatch();
    const [alert, setAlert] = useState(false);
    const [motivoInput, setMotivoInput] = useState('');
    const [showCombosEtiquetas, setShowCombosEtiquetas] = useState(false);
    const [listaBusqueda, setListaBusqueda] = useState([]);
    
    // Handlers
    const handleChangeBusqueda = (e) => {
        let {value} = e.target;
        value = value.trim();
        value ? (
            setListaBusqueda([...motivosOv.filter((elemento) => elemento.descripcion.toLowerCase() === value.toLowerCase())])
        ) : (
            setListaBusqueda([...motivosOv])
        )
    }

    const handleChangeFiltro = (tipo) => {
        switch (tipo) {
            case "Activos":
                setListaBusqueda([...motivosOv.filter((elemento) => elemento.sn_activo)])
                break;
            case "Eliminados":
                setListaBusqueda([...motivosOv.filter((elemento) => !elemento.sn_activo)])
                break;
            case "Todos":
                setListaBusqueda([...motivosOv])
                break;
            default:
                break;
        }
    }

    const handleAgregarMotivoOv = () => {
        const esRevertible = false;
        setAlert(false);
        setMotivoInput(motivoInput.trim());

        motivoInput && !existeMotivoOv() ? (
            HandleSweetAlert(
                () => {
                    dispatch(addMotivoOv({ motivoInput, codigoRubro }));
                    setMotivoInput('');
                },
                esRevertible
            )
        ) : (
            setAlert(true)
        )
    };

    // Funciones
    const existeMotivoOv = () => {
        return motivosOv.some((item) => {
            return item.descripcion.toLowerCase() === motivoInput.trim().toLowerCase();
        });
    }

    const modal = (descripcion) => {
        Swal.fire(descripcion);
        setAlert(false);
    }

    // useEffect
    useEffect(() => {
        setListaBusqueda([...motivosOv]);
    }, [motivosOv])
    
    return (
        <>
            {alert && modal("Motivo existente o inválido!")}
            <Navbar
                expand="lg"
                style={{
                    borderBottom: ".1rem solid #F1F1F1",
                    boxShadow: "0 .15rem 0 0 #F8F8F8",
                }}
                className="mt-5"
            >
                <Container fluid>
                    <Navbar.Brand
                        href="#"
                        style={{ color: "#E41625", fontWeight: "bold" }}
                    >
                        Motivos y submotivos
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
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
                                    <Button variant="default"
                                        onClick={() => setShowCombosEtiquetas(!showCombosEtiquetas)}
                                    >
                                        {
                                            showCombosEtiquetas ? (
                                                <BsEyeSlash size={20} />
                                            ) : (
                                                <BsEye size={20} />
                                            )
                                        }
                                    </Button>
                                </OverlayTrigger>
                            </div>
                        </Nav>
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
                                    onChange={(e) => {
                                        setMotivoInput(e.target.value);
                                        !e.target.value.trim() &&
                                            setAlert(false);
                                    }}
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

                        <Col xs={12} lg={4}>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Buscar motivo..."
                                    className="me-2"
                                    aria-label="Buscar"
                                    onChange={(e) => handleChangeBusqueda(e)}
                                />
                                <Button variant="outline-danger">
                                    <BsSearch
                                        style={{ paddingBottom: ".2rem" }}
                                        size={20}
                                    />
                                </Button>
                            </Form>
                        </Col>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {showCombosEtiquetas && (
                <Container style={{ marginBottom: "6rem", boxShadow: "0 .5rem .5rem 0 #CCC", padding: "1rem" }}>
                    <Row>
                        <SimuladorCombosEtiquetas motivosOv={motivosOv} />
                    </Row>
                </Container>
            )}

            <ListadoMotivosOv motivosOv={ listaBusqueda } motivosRepositorio={ motivosRepositorio } codigoRubro={ codigoRubro } />
        </>
    );
};

NavbarMenu.propTypes = {
    codigoRubro: PropTypes.number,
    motivosOv: PropTypes.array,
    motivosRepositorio: PropTypes.array
}

export default NavbarMenu;
