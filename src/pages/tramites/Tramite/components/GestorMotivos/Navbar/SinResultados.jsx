import { Card, Container } from "react-bootstrap";

const SinResultados = () => {
    return (
        <>
        <Container 
            className="d-flex justify-content-center align-items-center fade-in"
            style={{ marginTop: "7rem", marginBottom: "4rem" }}
        >
            <Card style={{ width: "20rem", border: "none" }}>
                <Card.Img
                    variant="top"
                    src="src\pages\tramites\assets\sin-resultados.jpg"
                />
                <Card.Body className="text-center">
                    <Card.Title style={{ fontWeight: "bold", color:"#333" }}>No hay resultados disponibles</Card.Title>
                    <Card.Text>
                        <span style={{ fontSize: "1rem", fontWeight: "500", color: "#919191" }}>Por favor, agregue nuevos elementos o ajuste sus criterios de búsqueda.</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
        </>
    );
};

export default SinResultados;
