import { Col, Container, Row } from "react-bootstrap";
import AccordionFormulario from "../Generales/AccordionFormulario";
import TextAreaFormulario from "../Generales/TextAreaFormulario";
import InputFormulario from "../Generales/InputFormulario";
import CardSectionFormulario from "../Generales/CardSectionFormulario";
import TableFormulario from "../Generales/TableFormulario";
import CheckFormulario from "../Generales/CheckFormulario";

const card_section_indicadores_estadistica = {
    titulo_seccion: "Indicadores / Estadística",
    tabla: {
        titles: [
            { descripcion: "Inciso" },
            { descripcion: "Cantidad" }
        ],
        items: [
            { 
                inciso: "Cantidad total de Directores/Gerentes",
                componente: <InputFormulario
                    label=""
                    type="text" 
                    id="cantidad_total_directores_gerentes" 
                    ariaDescribedby="Cantidad total de directores y gerentes"
                />  
            },
            { 
                inciso: "Cantidad total de médicos",
                componente: <InputFormulario
                    label=""
                    type="text" 
                    id="cantidad_total_medicos" 
                    ariaDescribedby="Cantidad total de médicos"
                />  
            },
            { 
                inciso: "Cantidad de médicos en relación de dependencia",
                componente: <InputFormulario
                    label=""
                    type="text" 
                    id="cantidad_medicos_relacion_dependencia" 
                    ariaDescribedby="Cantidad de médicos en relación de dependencia"
                />  
            },
            { 
                inciso: "Cantidad de médicos autónomos o contratados",
                componente: <InputFormulario
                    label=""
                    type="text" 
                    id="cantidad_medicos_autonomos_contratados" 
                    ariaDescribedby="Cantidad de médicos autónomos o contratados"
                />  
            },
        ]
    }
}

const card_section_ejercicio_profesional = {
    titulo_seccion: "Ejercicio Profesional",
    tabla: {
        titles: [
            { descripcion: "Inciso" },
            { descripcion: "Cantidad" }
        ],
        items: [
            { 
                inciso: "Cantidad mensual de pacientes",
                componente: <InputFormulario
                    label=""
                    type="text" 
                    id="cantidad_mensual_pacientes" 
                    ariaDescribedby="Cantidad mensual de pacientes"
                />  
            },
            { 
                inciso: "Cantidad de sillones",
                componente: <InputFormulario
                    label=""
                    type="text" 
                    id="cantidad_sillones" 
                    ariaDescribedby="Cantidad de sillones"
                />  
            },
            { 
                inciso: "Cantidad total mensual de sesiones de Diálisis",
                componente: <InputFormulario
                    label=""
                    type="text" 
                    id="cantidad_total_mensual_sesiones_dialisis" 
                    ariaDescribedby="Cantidad total mensual de sesiones de Diálisis"
                />  
            },
            { 
                inciso: "Cantidad total mensual de estudios de laboratorio",
                componente: <InputFormulario
                    label=""
                    type="text" 
                    id="cantidad_total_mensual_estudios_laboratorio" 
                    ariaDescribedby="Cantidad total mensual de estudios de laboratorio"
                />  
            },
            { 
                inciso: "Cantidad total mensual de cirugías",
                componente: <InputFormulario
                    label=""
                    type="text" 
                    id="cantidad_total_mensual_cirugias" 
                    ariaDescribedby="Cantidad total mensual de cirugías"
                />  
            },
            { 
                inciso: "Cantidad de transfusiones",
                componente: <InputFormulario
                    label=""
                    type="text" 
                    id="cantidad_transfusiones" 
                    ariaDescribedby="Cantidad de transfusiones"
                />  
            },
            { 
                inciso: "Cantidad anual de unidades de sangre que utiliza",
                componente: <InputFormulario
                    label=""
                    type="text" 
                    id="cantidad_anual_unidades_sangre" 
                    ariaDescribedby="Cantidad anual de unidades de sangre que utiliza"
                />  
            },
        ]
    }
}

const ClinicasSinInternacionCAADialisis = () => {
    return (
        <>
            <Container>
                <AccordionFormulario title="Clínicas sin internación">
                    <Container>
                        <Row>
                            <Col xs={12} md={12} className="mt-4">
                                <TextAreaFormulario
                                    label="Listado y dirección de las ubicaciones de riesgo para los que se requiere cobertura"
                                    id="listado_ubicaciones_riesgo"
                                    ariaDescribedby="Descripción de listado y dirección de las ubicaciones de riesgo"
                                ></TextAreaFormulario>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} md={12} className="mt-4">
                                <TextAreaFormulario
                                    label="Razones sociales con las que operó la sociedad anteriormente"
                                    id="razones_sociales"
                                    ariaDescribedby="Descripción de razones sociales"
                                ></TextAreaFormulario>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} md={4} className="mt-4">
                                <InputFormulario
                                    label="Nombre del Director Médico"
                                    type="text"
                                    id="nombre_director_medico"
                                    ariaDescribedby="Nombre del director médico"
                                />
                            </Col>

                            <Col xs={12} md={2} className="mt-4">
                                <InputFormulario
                                    label="Matrícula"
                                    type="text"
                                    id="matricula_director_medico"
                                    ariaDescribedby="Matrícula del director médico"
                                />
                            </Col>

                            <Col xs={12} md={2} className="mt-4">
                                <InputFormulario
                                    label="CUIL"
                                    type="text"
                                    id="cuil_director_medico"
                                    ariaDescribedby="Cuil del director médico"
                                />
                            </Col>

                            <Col xs={12} md={4} className="mt-4">
                                <InputFormulario
                                    label="Especialidad"
                                    type="text"
                                    id="especialidad_director_medico"
                                    ariaDescribedby="Especialidad del director médico"
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} md={4} className="mt-4">
                                <InputFormulario
                                    label="Domicilio"
                                    type="text"
                                    id="domicilio"
                                    ariaDescribedby="Descripción del domicilio"
                                />
                            </Col>

                            <Col xs={12} md={2} className="mt-4">
                                <InputFormulario
                                    label="C.P."
                                    type="text"
                                    id="codigo_postal"
                                    ariaDescribedby="Descripción del código postal"
                                />
                            </Col>

                            <Col xs={12} md={3} className="mt-4">
                                <InputFormulario
                                    label="Provincia"
                                    type="text"
                                    id="provincia"
                                    ariaDescribedby="Descripción de la provincia"
                                />
                            </Col>

                            <Col xs={12} md={3} className="mt-4">
                                <InputFormulario
                                    label="Localidad"
                                    type="text"
                                    id="localidad"
                                    ariaDescribedby="Descripción de la localidad"
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} md={6} className="mt-4">
                                <InputFormulario
                                    label="Teléfono"
                                    type="text"
                                    id="telefono"
                                    ariaDescribedby="Descripción del teléfono"
                                />
                            </Col>

                            <Col xs={12} md={6} className="mt-4">
                                <InputFormulario
                                    label="Correo Electrónico"
                                    type="email"
                                    id="correo_electronico"
                                    ariaDescribedby="Descripción del correo electrónico"
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} md={12} className="mt-4">
                                <CardSectionFormulario title="Suma Asegurada Solicitada">
                                    <Col>
                                        <InputFormulario
                                            label="Límite de cobertura"
                                            type="text"
                                            id="limite_cobertura"
                                            ariaDescribedby="Límite de cobertura"
                                        />
                                    </Col>
                                </CardSectionFormulario>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} md={12} className="mt-4">
                                <CardSectionFormulario title="Centros Ambulatorios Especializados / Diálisis">
                                    <Container>
                                        <Col className="d-flex flex-column justify-content-center align-items-start">
                                            <CheckFormulario
                                                id="sn_dialisis"
                                                label="Diálisis"
                                            />
                                        </Col>

                                        <Col className="mt-4 d-flex flex-column justify-content-center align-items-start">
                                            <CheckFormulario
                                                id="sn_hemodialisis"
                                                label="Hemodiálisis"
                                            />
                                        </Col>

                                        <Col className="mt-4 d-flex flex-column justify-content-center align-items-start">
                                            <CheckFormulario
                                                id="sn_dialisis_peritoneal"
                                                label="Diálisis Peritoneal"
                                            />
                                        </Col>

                                        <Col className="mt-4 d-flex flex-column justify-content-center align-items-start">
                                            <InputFormulario
                                                label="Otros"
                                                type="text"
                                                id="otros"
                                                ariaDescribedby="Otras actividades"
                                            />
                                        </Col>
                                    </Container>
                                </CardSectionFormulario>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} md={12} className="mt-4">
                                <CardSectionFormulario
                                    title={
                                        card_section_indicadores_estadistica.titulo_seccion
                                    }
                                >
                                    <Container>
                                        <Col className="d-flex flex-column justify-content-center align-items-start">
                                            <CheckFormulario
                                                id="sn_medico_infectologo"
                                                label="Médico infectólogo"
                                            />
                                        </Col>

                                        <Col>
                                            <TableFormulario
                                                titles={
                                                    card_section_indicadores_estadistica
                                                        .tabla.titles
                                                }
                                                items={
                                                    card_section_indicadores_estadistica
                                                        .tabla.items
                                                }
                                            />
                                        </Col>
                                    </Container>
                                </CardSectionFormulario>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} md={12} className="mt-4">
                                <CardSectionFormulario
                                    title={
                                        card_section_ejercicio_profesional.titulo_seccion
                                    }
                                >
                                    <Container>
                                        <Col className="d-flex flex-column justify-content-center align-items-start">
                                            <InputFormulario
                                                label="Facturación del último ejercicio"
                                                type="text"
                                                id="facturacion_ultimo_ejercicio"
                                                ariaDescribedby="Facturación del último ejercicio"
                                            />
                                        </Col>

                                        <Col>
                                            <TableFormulario
                                                titles={
                                                    card_section_ejercicio_profesional
                                                        .tabla.titles
                                                }
                                                items={
                                                    card_section_ejercicio_profesional
                                                        .tabla.items
                                                }
                                            />
                                        </Col>
                                    </Container>
                                </CardSectionFormulario>
                            </Col>
                        </Row>
                    </Container>
                </AccordionFormulario>
            </Container>
        </>
    );
}

export default ClinicasSinInternacionCAADialisis;
