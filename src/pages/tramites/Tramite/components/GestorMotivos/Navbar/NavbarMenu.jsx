import { useState } from "react";
import { addMotivoOv } from "../../../../../../modules/motivosOv";
import HandleSweetAlert from "../../shared/AlertModal";
import Swal from "sweetalert2";
import NuevoMotivo from "./NuevoMotivo";
import { Container, Navbar } from "react-bootstrap";
import OpcionesNav from "./OpcionesNav";
import Buscador from "./Buscador";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

const NavbarMenu = ({ showCombosEtiquetas, handleShowCombosEtiquetas, handleChangeBusqueda, handleChangeFiltro }) => {
    const { motivosOv } = useSelector((state) => state.motivosOv);
    const [alert, setAlert] = useState(false);
    const [motivoInput, setMotivoInput] = useState("");
    const dispatch = useDispatch();
        
    // Handlers
    const handleAgregarMotivoOv = () => {
        const esRevertible = false;
        setAlert(false);
        setMotivoInput(motivoInput);

        motivoInput.trim() !== "" && !existeMotivoOv()
            ? HandleSweetAlert(() => {
                  dispatch(addMotivoOv({ motivoInput }));
                  setMotivoInput("");
              }, esRevertible)
            : setAlert(true);
    };

    const handleMotivo = (e) => {
        const { value } = e.target;
        setMotivoInput(value);
        !value.trim() && setAlert(false);
    }

    // Funciones
    const existeMotivoOv = () => {
        return motivosOv.some((item) => {
            return (
                item.descripcion.toLowerCase() ===
                motivoInput.trim().toLowerCase()
            );
        });
    };

    const modal = (descripcion) => {
        Swal.fire(descripcion);
        setAlert(false);
    };   

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
                        <OpcionesNav showCombosEtiquetas={showCombosEtiquetas} handleShowCombosEtiquetas={handleShowCombosEtiquetas} handleChangeFiltro={handleChangeFiltro} />                        
                        <NuevoMotivo motivoInput={motivoInput} handleMotivo={handleMotivo} handleAgregarMotivoOv={handleAgregarMotivoOv} />
                        <Buscador handleChangeBusqueda={handleChangeBusqueda} />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

NavbarMenu.propTypes = {
    showCombosEtiquetas: PropTypes.bool,
    handleShowCombosEtiquetas: PropTypes.func,
    handleChangeBusqueda: PropTypes.func,
    handleChangeFiltro: PropTypes.func
}

export default NavbarMenu;
