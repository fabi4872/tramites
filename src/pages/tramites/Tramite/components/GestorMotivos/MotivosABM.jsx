import { Container, Tab, Tabs } from "react-bootstrap";
import { useSelector } from 'react-redux';
import TabRepositorio from "./TabRepositorio";

const MotivosABM = () => {
    const { motivosART, motivosGenerales, motivosLife } = useSelector((state) => state.motivos);
    const { motivosOvART, motivosOvGenerales, motivosOvLife } = useSelector((state) => state.motivosOv);
    
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
                        <TabRepositorio codigoRubro={ 1 } motivosOv={ motivosOvART } motivosRepositorio={ motivosART } />
                    </Tab>
                    <Tab eventKey="generales" title="Generales">
                        <TabRepositorio codigoRubro={ 2 } motivosOv={ motivosOvGenerales } motivosRepositorio={ motivosGenerales } />
                    </Tab>
                    <Tab eventKey="vida" title="Vida">
                        <TabRepositorio codigoRubro={ 3 } motivosOv={ motivosOvLife } motivosRepositorio={ motivosLife } /> 
                    </Tab>
                </Tabs>
            </Container>
        </>
    )
}

export default MotivosABM;
