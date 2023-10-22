import { useEffect, useState } from "react";
import NavbarMenu from "./Navbar/NavbarMenu";
import SimuladorCombosEtiquetas from "./SimuladorCombosEtiquetas";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ListadoMotivosOv from "./Listado/ListadoMotivosOv";
import SinResultados from "./Navbar/SinResultados";

const TabRepositorio = () => {
    const { motivosOv } = useSelector((state) => state.motivosOv);
    const [showCombosEtiquetas, setShowCombosEtiquetas] = useState(false);
    const [listaBusqueda, setListaBusqueda] = useState([]);
    
    // Handlers
    const handleShowCombosEtiquetas = () => {
        setShowCombosEtiquetas(!showCombosEtiquetas);
    }

    const handleChangeBusqueda = (e) => {
        let { value } = e.target;
        let descripcionFormateada = "";

        // Verifica que la entrada no sea un espacio en blanco vacío
        if (value.trim() === "") {
            descripcionFormateada = value;
        } else {
            // Reemplaza múltiples espacios en blanco con uno solo
            descripcionFormateada = value.replace(/\s+/g, ' ');
        }

        descripcionFormateada !== ""
            ? setListaBusqueda([
                  ...motivosOv.filter(
                      (elemento) =>
                          removeAccents(elemento.descripcion.trim().toLowerCase())
                              .includes(removeAccents(descripcionFormateada.trim().toLowerCase()))
                  ),
              ])
            : setListaBusqueda([...motivosOv]);
    };

    const handleChangeFiltro = (tipo) => {
        switch (tipo) {
            case "Activos":
                setListaBusqueda([
                    ...motivosOv.filter((elemento) => elemento.sn_activo),
                ]);
                break;
            case "Eliminados":
                setListaBusqueda([
                    ...motivosOv.filter((elemento) => !elemento.sn_activo),
                ]);
                break;
            case "Todos":
                setListaBusqueda([...motivosOv]);
                break;
            default:
                break;
        }
    };

    // Funciones
    function removeAccents(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    // useEffect
    useEffect(() => {
        setListaBusqueda([...motivosOv]);
    }, [motivosOv])

    return (
        <>
            <NavbarMenu
                showCombosEtiquetas={showCombosEtiquetas}
                handleShowCombosEtiquetas={handleShowCombosEtiquetas}
                handleChangeBusqueda={handleChangeBusqueda}
                handleChangeFiltro={handleChangeFiltro}
            />

            {showCombosEtiquetas && (
                <Container
                    style={{
                        marginBottom: "6rem",
                        boxShadow: "0 .5rem .5rem 0 #CCC",
                        padding: "1rem",
                    }}
                >
                    <Row>
                        <SimuladorCombosEtiquetas />
                    </Row>
                </Container>
            )}

            {listaBusqueda.length > 0 ? (
                <ListadoMotivosOv motivosOv={listaBusqueda} />
            ) : (
                <SinResultados />
            )}
        </>
    );
}

export default TabRepositorio;
