import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

export const InputFormulario = ({ label, type, id, ariaDescribedby }) => {
    return (
        <>
            { label && (<Form.Label className="label-formulario" htmlFor={ id }>{ label }</Form.Label>) }
            <Form.Control
                type={ type }
                id={ id }
                name= { id }
                aria-describedby={ ariaDescribedby }
            />
        </>
    );
};

InputFormulario.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    ariaDescribedby: PropTypes.string
}

export default InputFormulario;
