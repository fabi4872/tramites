import PropTypes from "prop-types";
import { Button, Col, Form } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const Buscador = ({ handleChangeBusqueda }) => {
    return (
        <>
            <Col xs={12} lg={4} style={{ marginRight: "1rem" }}>
                <Form className="d-flex mt-3 mb-3">
                    <Form.Control
                        style={{ borderRadius: ".3rem 0 0 .3rem" }}
                        type="search"
                        placeholder="Buscar motivo..."
                        className="me-0"
                        aria-label="Buscar"
                        onChange={(e) => handleChangeBusqueda(e)}
                    />
                    <Button
                        disabled 
                        style={{ borderRadius: "0 .3rem .3rem 0", border: ".1rem solid #CCC", background: "#EAEAEA" }}
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
