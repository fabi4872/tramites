import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

export const InputFormulario = ({ icon, label, type, id, ariaDescribedby }) => {
    return (
        <>
            {label && (
                <Form.Label className="label-formulario" htmlFor={ id }>
                    { label }
                </Form.Label>
            )}

            {icon ? (
                <div className="d-flex justify-content-center align-items-center">
                    { icon }

                    <Form.Control
                        type={ type }
                        id={ id }
                        name={ id }
                        aria-describedby={ ariaDescribedby }
                    />
                </div>
            ) : (
                <Form.Control
                    type={ type }
                    id={ id }
                    name={ id }
                    aria-describedby={ ariaDescribedby }
                />
            )}
        </>
    );
};

InputFormulario.propTypes = {
    icon: PropTypes.element,
    label: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    ariaDescribedby: PropTypes.string
}

export default InputFormulario;
