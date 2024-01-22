import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

const CardSectionFormulario = ({ title, children }) => {
    return (
        <>
            <Card className="mt-4">
                <Card.Header style={{ background: "#E41625", color: "white", fontSize: "1rem" }}>
                    { title }
                </Card.Header>
                
                <Card.Body>
                    { children }
                </Card.Body>
            </Card>
        </>
    );
}

CardSectionFormulario.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element
}

export default CardSectionFormulario;
