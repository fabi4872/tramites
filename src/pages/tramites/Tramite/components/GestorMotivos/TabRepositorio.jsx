import PropTypes from "prop-types";
import ListadoMotivosOv from "./ListadoMotivosOv";
import NavbarMenu from "./NavbarMenu";

const TabRepositorio = ({ codigoRubro, motivosOv, motivosRepositorio }) => {
    return (
        <>
            <NavbarMenu codigoRubro={ codigoRubro } motivosOv={ motivosOv } />
            {/* <InputMotivosOv codigoRubro={ codigoRubro } motivosOv={ motivosOv } /> */}
            <ListadoMotivosOv motivosOv={ motivosOv } motivosRepositorio={ motivosRepositorio } codigoRubro={ codigoRubro } />
        </>
    )
}

TabRepositorio.propTypes ={
    codigoRubro: PropTypes.number,
    motivosOv: PropTypes.array,
    motivosRepositorio: PropTypes.array
}

export default TabRepositorio;
