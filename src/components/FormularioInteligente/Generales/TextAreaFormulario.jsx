import { FloatingLabel, Form } from "react-bootstrap";
import PropTypes from "prop-types";

export const TextAreaFormulario = ({ label, id, ariaDescribedby }) => {
    return (
        <>
            <Form.Label className="label-formulario" htmlFor={ id }>{ label }</Form.Label>
            <FloatingLabel label="Hasta 1800 caracteres">
                <Form.Control
                    id={ id }
                    name={ id }
                    as="textarea"
                    style={{ height: "5rem" }}
                    aria-describedby={ ariaDescribedby }
                />
            </FloatingLabel>
        </>
    );
};

TextAreaFormulario.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    ariaDescribedby: PropTypes.string
}

export default TextAreaFormulario;
