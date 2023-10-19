import PropTypes from "prop-types";
import { Button, Col, Form } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const Buscador = ({ handleChangeBusqueda }) => {
    return (
        <>
            <Col xs={12} lg={4}>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Buscar motivo..."
                        className="me-2"
                        aria-label="Buscar"
                        onChange={(e) => handleChangeBusqueda(e)}
                    />
                    <Button variant="outline-danger">
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
