import PropTypes from "prop-types";
import { Button, Col, Form } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const Buscador = ({ handleChangeBusqueda }) => {
    return (
        <>
            <Col xs={12} lg={3} style={{ marginRight: "1rem" }}>
                <Form className="d-flex mt-3 mb-3">
                    <Form.Control
                        style={{ borderRadius: "1rem 0 0 1rem", padding: ".7rem 1rem", borderRight: "none" }}
                        type="search"
                        placeholder="Buscar motivo..."
                        className="me-0"
                        aria-label="Buscar"
                        onChange={(e) => handleChangeBusqueda(e)}
                    />
                    <Button
                        disabled 
                        style={{ borderRadius: "0 1rem 1rem 0", border: ".1rem solid #CCC", borderLeft: "none" }}
                        variant="outline-default"
                    >
                        <BsSearch
                            style={{ paddingBottom: ".2rem" }}
                            size={20}
                        />
                    </Button>
                </Form>
            </Col>
        </>
    );
};

Buscador.propTypes = {
    handleChangeBusqueda: PropTypes.func
}

export default Buscador;
