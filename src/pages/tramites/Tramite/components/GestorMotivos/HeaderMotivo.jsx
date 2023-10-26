import { Col, Container } from "react-bootstrap";

export const HeaderMotivo = () => {
    return (
        <>
            <Container
                className="d-flex align-items-center"
                style={{ height: "7rem", backgroundColor: "#F2F3F7" }}
            >
                <Col className="d-flex align-items-center">
                    <h2
                        className="mx-3"
                        style={{
                            fontWeight: "bold",
                            letterSpacing: ".15rem",
                            color: "#E41625" 
                        }}
                    >
                        Motivos y submotivos
                    </h2>
                    <h3
                        className="mx-3"
                        style={{
                            fontWeight: "600",
                            letterSpacing: ".2rem",
                            color: "#CCC",
                            webkitTextStroke: ".1rem #919191",
                            padding: ".5rem",
                            borderRadius: ".75rem",
                            boxShadow: "0 .5rem .5rem 0 #CCC",
                            borderTop: ".1rem solid #E1E1E1"
                        }}
                    >
                        ABM
                    </h3>
                </Col>
            </Container>
        </>
    );
};

export default HeaderMotivo;
