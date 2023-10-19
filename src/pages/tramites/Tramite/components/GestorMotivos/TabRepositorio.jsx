import { useEffect, useState } from "react";
import NavbarMenu from "./Navbar/NavbarMenu";
import SimuladorCombosEtiquetas from "./SimuladorCombosEtiquetas";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ListadoMotivosOv from "./ListadoMotivosOv";

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
        value = value.trim();
        value
            ? setListaBusqueda([
                  ...motivosOv.filter(
                      (elemento) =>
                          elemento.descripcion.toLowerCase() ===
                          value.toLowerCase()
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

            <ListadoMotivosOv motivosOv={ listaBusqueda } />
        </>
    );
}

export default TabRepositorio;
