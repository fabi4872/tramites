import { Container, Tab, Tabs } from "react-bootstrap";
import TabRepositorio from "./TabRepositorio";

const MotivosABM = () => {    
    return (
        <>
            <Container className="p-0">
                <Tabs
                    mb={3}
                    className="gestor-tramite-abm-tab"
                    defaultActiveKey="generales"
                    id="fill-tab-example"
                    style={{ backgroundColor: "#F2F3F7" }}
                >
                    <Tab eventKey="art" title="ART">
                        <TabRepositorio />
                    </Tab>
                    <Tab eventKey="generales" title="Generales">
                        <TabRepositorio />
                    </Tab>
                    <Tab eventKey="vida" title="Vida">
                        <TabRepositorio /> 
                    </Tab>
                </Tabs>
            </Container>
        </>
    )
}

export default MotivosABM;
