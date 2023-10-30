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
    const [filtro, setFiltro] = useState("todos");
    const [orden, setOrden] = useState("fecha_alta_descendente");
        
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

    const handleChangeFiltro = (filtro_nuevo) => {
        setFiltro(filtro_nuevo);
    }

    const handleChangeOrden = (orden_nuevo) => {
        setOrden(orden_nuevo);
    }

    // Funciones
    function removeAccents(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    // const setListaBusquedaWithFiltroOrden = () => {
    //     const filtro_actual = obtenerPropiedadFiltroActual();
    //     const orden_actual = obtenerPropiedadOrdenActual();
    //     console.log(filtro_actual);
    //     switch (filtro_actual) {
    //         case "activos":
    //             setListaBusqueda([
    //                 ...motivosOv.filter((elemento) => elemento.sn_activo),
    //             ]);
    //             break;
    //         case "eliminados":
    //             setListaBusqueda([
    //                 ...motivosOv.filter((elemento) => !elemento.sn_activo),
    //             ]);
    //             break;
    //         case "todos":
    //             setListaBusqueda([...motivosOv]);
    //             break;
    //         default:
    //             break;
    //     }

    //     switch (orden_actual) {
    //         case "alfabetico_ascendente":
    //             setListaBusqueda([
    //                 ...listaBusqueda.sort((a, b) => b.descripcion < a.descripcion),
    //             ]);
    //             break;
    //         case "alfabetico_descendente":
    //             setListaBusqueda([
    //                 ...listaBusqueda.sort((a, b) => a.descripcion < b.descripcion),
    //             ]);
    //             break;
    //         case "fecha_alta_ascendente":
    //             setListaBusqueda([
    //                 ...listaBusqueda.sort((a, b) => b.fecha < a.fecha),
    //             ]);
    //             break;
    //         case "fecha_alta_descendente":
    //             setListaBusqueda([
    //                 ...listaBusqueda.sort((a, b) => a.fecha < b.fecha),
    //             ]);
    //             break;
    //         default:
    //             break;
    //     }        
    // };

    useEffect(() => {
        // Aplicar filtro
        let filteredMotivosOv = [...motivosOv];
        if (filtro === "activos") {
            filteredMotivosOv = filteredMotivosOv.filter((elemento) => elemento.sn_activo);
        } else if (filtro === "eliminados") {
            filteredMotivosOv = filteredMotivosOv.filter((elemento) => !elemento.sn_activo);
        }
        setListaBusqueda(filteredMotivosOv);

        // Aplicar orden
        switch (orden) {
            case "alfabetico_ascendente":
                setListaBusqueda((prevList) => [...prevList.sort((a, b) => a.descripcion.localeCompare(b.descripcion))]);
                break;
            case "alfabetico_descendente":
                setListaBusqueda((prevList) => [...prevList.sort((a, b) => b.descripcion.localeCompare(a.descripcion))]);
                break;
            case "fecha_alta_ascendente":
                setListaBusqueda((prevList) => [...prevList.sort((a, b) => new Date(a.fecha) - new Date(b.fecha))]);
                break;
            case "fecha_alta_descendente":
                setListaBusqueda((prevList) => [...prevList.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))]);
                break;
            default:
                break;
        }
    }, [filtro, orden, motivosOv]);
    
    return (
        <>
            <NavbarMenu
                showCombosEtiquetas={showCombosEtiquetas}
                handleShowCombosEtiquetas={handleShowCombosEtiquetas}
                handleChangeBusqueda={handleChangeBusqueda}
                handleChangeFiltro={handleChangeFiltro}
                handleChangeOrden={handleChangeOrden}
            />

            {showCombosEtiquetas && (
                <Container
                    style={{
                        marginBottom: "6rem",
                        boxShadow: "0 .5rem .5rem 0 #CCC",
                        padding: "1rem",
                    }}
                >
                    <Row className="fade-in">
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
