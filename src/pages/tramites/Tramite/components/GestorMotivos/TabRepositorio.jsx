import PropTypes from "prop-types";
import InputMotivosOv from "./InputMotivosOv";
import ListadoMotivosOv from "./ListadoMotivosOv";

const TabRepositorio = ({ codigoRubro, motivosOv, motivosRepositorio }) => {
    return (
        <>
            <InputMotivosOv codigoRubro={ codigoRubro } motivosOv={ motivosOv } />
            <ListadoMotivosOv motivosOv={ motivosOv } motivosRepositorio={ motivosRepositorio } codigoRubro={codigoRubro} />
        </>
    )
}

TabRepositorio.propTypes ={
    codigoRubro: PropTypes.number,
    motivosOv: PropTypes.array,
    motivosRepositorio: PropTypes.array
}

export default TabRepositorio;
