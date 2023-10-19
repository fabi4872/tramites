import { Container, Tab, Tabs } from "react-bootstrap";
import TabRepositorio from "./TabRepositorio";

const MotivosABM = () => {    
    return (
        <>
            <Container className="tabs-margin-top">
                <Tabs
                    mb={3}
                    className="gestor-tramite-abm-tab"
                    defaultActiveKey="generales"
                    id="fill-tab-example"
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
