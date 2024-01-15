import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

const CheckFormulario = ({ id, label }) => {
    return (
        <>
            <Form.Label className="label-formulario" htmlFor={ id }>{ label }</Form.Label>
            <Form.Check
                type="switch"
                id={ id }
            />
        </>
    );
}

CheckFormulario.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string
}

export default CheckFormulario;
