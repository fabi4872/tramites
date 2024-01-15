import { Accordion } from "react-bootstrap";
import PropTypes from "prop-types";

export const AccordionFormulario = ({ title, children }) => {
    return (
        <>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        { title }
                    </Accordion.Header>
                    <Accordion.Body className="label-formulario">
                        { children }
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

AccordionFormulario.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element
}

export default AccordionFormulario;
