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

const card_section_traslado_pacientes = {
    titulo_seccion: "Traslado de Pacientes (cantidad mensual promedio de pacientes trasladados)",
    tabla: {
        titles: [
            { descripcion: "Inciso" },
            { descripcion: "Cantidad" }
        ],
        items: [
            { 
                inciso: "Ambulancias",
                componente: <InputFormulario
                    label=""
                    type="text" 
                    id="cantidad_mensual_promedio_ambulancias" 
                    ariaDescribedby="Cantidad mensual promedio de ambulancias"
                />  
            },
            { 
                inciso: "Remis",
                componente: <InputFormulario
                    label=""
                    type="text" 
                    id="cantidad_mensual_promedio_remis" 
                    ariaDescribedby="Cantidad mensual promedio de remis"
                />  
            }
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
                                    <Row>
                                        <Col
                                            xs={12} md={12}
                                        >
                                            <InputFormulario
                                                label="Límite de cobertura"
                                                type="text"
                                                id="limite_cobertura"
                                                ariaDescribedby="Límite de cobertura"
                                            />
                                        </Col>
                                    </Row>
                                </CardSectionFormulario>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} md={12} className="mt-4">
                                <CardSectionFormulario title="Centros Ambulatorios Especializados / Diálisis">
                                    <Container>
                                        <Row>
                                            <Col
                                                xs={12}
                                                md={4}
                                                className="mt-4 d-flex flex-column justify-content-center align-items-start"
                                            >
                                                <CheckFormulario
                                                    id="sn_dialisis"
                                                    label="Diálisis"
                                                />
                                            </Col>

                                            <Col
                                                xs={12}
                                                md={4}
                                                className="mt-4 d-flex flex-column justify-content-center align-items-start"
                                            >
                                                <CheckFormulario
                                                    id="sn_hemodialisis"
                                                    label="Hemodiálisis"
                                                />
                                            </Col>

                                            <Col
                                                xs={12}
                                                md={4}
                                                className="mt-4 d-flex flex-column justify-content-center align-items-start"
                                            >
                                                <CheckFormulario
                                                    id="sn_dialisis_peritoneal"
                                                    label="Diálisis Peritoneal"
                                                />
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col
                                                xs={12}
                                                md={12}
                                                className="mt-4 d-flex flex-column justify-content-center align-items-start"
                                            >
                                                <InputFormulario
                                                    label="Otros"
                                                    type="text"
                                                    id="otros_centros_ambulatorios_especializados"
                                                    ariaDescribedby="Otros centros ambulatorios especializados"
                                                />
                                            </Col>
                                        </Row>
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
                                        <Row>
                                            <Col 
                                                xs={12} md={12}
                                                className="mt-4 d-flex flex-column justify-content-center align-items-start"
                                            >
                                                <CheckFormulario
                                                    id="sn_medico_infectologo"
                                                    label="Médico infectólogo"
                                                />
                                            </Col>
                                        </Row>

                                        <Row>
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
                                        </Row>
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
                                        <Row>
                                            <Col 
                                                xs={12} md={12}
                                                className="mt-4 d-flex flex-column justify-content-center align-items-start"
                                            >
                                                <InputFormulario
                                                    label="Facturación del último ejercicio"
                                                    type="text"
                                                    id="facturacion_ultimo_ejercicio"
                                                    ariaDescribedby="Facturación del último ejercicio"
                                                />
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col
                                                xs={12} md={12}
                                            >
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
                                        </Row>
                                    </Container>
                                </CardSectionFormulario>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} md={12} className="mt-4">
                                <CardSectionFormulario title="Estudios Serológicos / Tratamiento de Agua">
                                    <Container>
                                        <Row>
                                            <Col
                                                xs={12}
                                                md={4}
                                                className="mt-4 d-flex flex-column justify-content-center align-items-start"
                                            >
                                                <CheckFormulario
                                                    id="sn_elisa"
                                                    label="Elisa"
                                                />
                                            </Col>

                                            <Col
                                                xs={12}
                                                md={4}
                                                className="mt-4 d-flex flex-column justify-content-center align-items-start"
                                            >
                                                <CheckFormulario
                                                    id="sn_biologia_molecular"
                                                    label="Biología Molecular"
                                                />
                                            </Col>

                                            <Col
                                                xs={12}
                                                md={4}
                                                className="mt-4 d-flex flex-column justify-content-center align-items-start"
                                            >
                                                <CheckFormulario
                                                    id="sn_tratamiento_agua"
                                                    label="Tratamiento de Agua"
                                                />
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col
                                                xs={12}
                                                md={12}
                                                className="mt-4 d-flex flex-column justify-content-center align-items-start"
                                            >
                                                <InputFormulario
                                                    label="Otros"
                                                    type="text"
                                                    id="otros_estudios_serologicos"
                                                    ariaDescribedby="Otras estudios serológicos"
                                                />
                                            </Col>
                                        </Row>
                                    </Container>
                                </CardSectionFormulario>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} md={12} className="mt-4">
                                <CardSectionFormulario
                                    title={
                                        card_section_traslado_pacientes.titulo_seccion
                                    }
                                >
                                    <Container>
                                        <Row>
                                            <Col 
                                                xs={12} md={12}
                                                className="mt-4 d-flex flex-column justify-content-center align-items-start"
                                            >
                                                <InputFormulario
                                                    label="Otros"
                                                    type="text"
                                                    id="otros_traslados"
                                                    ariaDescribedby="Otros traslados"
                                                />
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col
                                                xs={12} md={12}
                                            >
                                                <TableFormulario
                                                    titles={
                                                        card_section_traslado_pacientes
                                                            .tabla.titles
                                                    }
                                                    items={
                                                        card_section_traslado_pacientes
                                                            .tabla.items
                                                    }
                                                />
                                            </Col>
                                        </Row>
                                    </Container>
                                </CardSectionFormulario>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} md={12} className="mt-4">
                                <CardSectionFormulario title="Cobertura de RC Profesional Actual">
                                    <Container>
                                        <Row>
                                            <Col
                                                xs={12}
                                                md={6}
                                                className="mt-4"
                                            >
                                                <InputFormulario
                                                    label="Compañía aseguradora"
                                                    type="text"
                                                    id="compania_aseguradora"
                                                    ariaDescribedby="Descripción de compañía aseguradora"
                                                />
                                            </Col>

                                            <Col
                                                xs={12}
                                                md={3}
                                                className="mt-4"
                                            >
                                                <InputFormulario
                                                    label="Inicio de cobertura"
                                                    type="date"
                                                    id="inicio_cobertura"
                                                    ariaDescribedby="Fecha de inicio de cobertura"
                                                />
                                            </Col>

                                            <Col
                                                xs={12}
                                                md={3}
                                                className="mt-4"
                                            >
                                                <InputFormulario
                                                    label="Fin de cobertura"
                                                    type="date"
                                                    id="fin_cobertura"
                                                    ariaDescribedby="Fecha de fin de cobertura"
                                                />
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col
                                                xs={12}
                                                md={6}
                                                className="mt-4"
                                            >
                                                <InputFormulario
                                                    label="Monto asegurado"
                                                    type="text"
                                                    id="monto_asegurado"
                                                    ariaDescribedby="Monto asegurado"
                                                />
                                            </Col>

                                            <Col
                                                xs={12}
                                                md={6}
                                                className="mt-4"
                                            >
                                                <InputFormulario
                                                    label="Monto deducible"
                                                    type="text"
                                                    id="monto_deducible"
                                                    ariaDescribedby="Monto deducible"
                                                />
                                            </Col>
                                        </Row>
                                    </Container>
                                </CardSectionFormulario>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} md={12} className="mt-4">
                                <CardSectionFormulario title="Póliza D&O (Directores y Oficiales)">
                                    <Container>
                                        <Row>
                                            <Col 
                                                xs={12} md={12}
                                                className="mt-4 d-flex flex-column justify-content-center align-items-start"
                                            >
                                                <CheckFormulario
                                                    id="sn_posee_poliza_directores_oficiales"
                                                    label="¿Posee póliza D&O (Directores y Oficiales)?"
                                                />
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col
                                                xs={12}
                                                md={6}
                                                className="mt-4"
                                            >
                                                <InputFormulario
                                                    label="Monto"
                                                    type="text"
                                                    id="monto_directores_oficiales"
                                                    ariaDescribedby="Monto de directores y oficiales"
                                                />
                                            </Col>

                                            <Col
                                                xs={12}
                                                md={6}
                                                className="mt-4"
                                            >
                                                <InputFormulario
                                                    label="Compañía aseguradora"
                                                    type="text"
                                                    id="compania_aseguradora_directores_oficiales"
                                                    ariaDescribedby="Compañía aseguradora de directores y oficiales"
                                                />
                                            </Col>
                                        </Row>
                                    </Container>
                                </CardSectionFormulario>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} md={12} className="mt-4">
                                <CardSectionFormulario title="Historia Siniestral">
                                    <Container>
                                        <Row>
                                            <Col
                                                xs={12}
                                                md={12}
                                                className="mt-1"
                                            >
                                                <p
                                                    style={{
                                                        fontStyle: "italic",
                                                        fontSize: ".875rem",
                                                        color: "#FF947E",
                                                    }}
                                                >
                                                    * Estado actual: Reclamo no
                                                    judicial, Mediación, Juicio,
                                                    Terminado (indique fecha y
                                                    monto). Si fuera reclamo
                                                    judicial, indique fecha y
                                                    monto de la demanda inicial.
                                                </p>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col
                                                xs={12}
                                                md={6}
                                                className="mt-4"
                                            >
                                                <InputFormulario
                                                    label="Fecha del acto médico"
                                                    type="date"
                                                    id="fecha_acto_medico"
                                                    ariaDescribedby="Fecha del acto médico"
                                                />
                                            </Col>
                                            <Col
                                                xs={12}
                                                md={6}
                                                className="mt-4"
                                            >
                                                <InputFormulario
                                                    label="Fecha en la cual se notificó el reclamo a la aseguradora"
                                                    type="date"
                                                    id="fecha_notificacion_reclamo_aseguradora"
                                                    ariaDescribedby="Fecha en la cual se notificó el reclamo a la aseguradora"
                                                />
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col
                                                xs={12}
                                                md={12}
                                                className="mt-4"
                                            >
                                                <TextAreaFormulario
                                                    label="Descripción del hecho (siniestro)"
                                                    id="descripcion_hecho_siniestro"
                                                    ariaDescribedby="Descripción del siniestro"
                                                ></TextAreaFormulario>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col
                                                xs={12}
                                                md={4}
                                                className="mt-4"
                                            >
                                                <InputFormulario
                                                    label="Lugar dónde se produjo el hecho"
                                                    type="text"
                                                    id="lugar_siniestro"
                                                    ariaDescribedby="Lugar dónde se produjo el hecho"
                                                />
                                            </Col>

                                            <Col
                                                xs={12}
                                                md={4}
                                                className="mt-4"
                                            >
                                                <InputFormulario
                                                    label="Fecha de la demanda inicial"
                                                    type="date"
                                                    id="fecha_demanda_inicial"
                                                    ariaDescribedby="Fecha de la demanda inicial"
                                                />
                                            </Col>

                                            <Col
                                                xs={12}
                                                md={4}
                                                className="mt-4"
                                            >
                                                <InputFormulario
                                                    label="Monto de la demanda inicial"
                                                    type="text"
                                                    id="monto_demanda_inicial"
                                                    ariaDescribedby="Monto de la demanda inicial"
                                                />
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col
                                                xs={12}
                                                md={12}
                                                className="mt-4"
                                            >
                                                <TextAreaFormulario
                                                    label="Indique a quién/enes se le/s asigna responsabilidad: médicos, otro profesional de la salud, institución que solicita el seguro, otra institución. Especialidades involucradas"
                                                    id="responsabilidades_siniestro"
                                                    ariaDescribedby="Responsabilidades del siniestro"
                                                ></TextAreaFormulario>
                                            </Col>
                                        </Row>
                                    </Container>
                                </CardSectionFormulario>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} md={12} className="mt-4">
                                <CardSectionFormulario title="Futuras Acciones Legales">
                                    <Container>
                                        <Row>
                                            <Col
                                                xs={12} md={12} 
                                                className="mt-4 d-flex flex-column justify-content-center align-items-start"
                                            >
                                                <CheckFormulario
                                                    id="sn_hecho_futuras_acciones_legales"
                                                    label="¿Tiene conocimiento de algún hecho o incidente que pudiera derivar en futuras acciones legales contra la Institución?"
                                                />
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col
                                                xs={12}
                                                md={12}
                                                className="mt-4"
                                            >
                                                <TextAreaFormulario
                                                    label="En caso de responder afirmativamente, descríbalo en forma detallada, señalando fecha del acto profesional, lugar del hecho, descripción de lo acontecido"
                                                    id="descripcion_hecho_futuras_acciones_legales"
                                                    ariaDescribedby="Descripción de hecho o incidente que pudiera derivar en futuras acciones legales contra la Institución"
                                                ></TextAreaFormulario>
                                            </Col>
                                        </Row>
                                    </Container>
                                </CardSectionFormulario>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} md={12} className="mt-4">
                                <CardSectionFormulario title="Abogados o Estudio Jurídico Asesor">
                                    <Container>
                                        <Row>
                                            <Col
                                                xs={12}
                                                md={12}
                                                className="mt-1"
                                            >
                                                <p
                                                    style={{
                                                        fontStyle: "italic",
                                                        fontSize: ".875rem",
                                                        color: "#FF947E",
                                                    }}
                                                >
                                                    * Especifique el nombre de
                                                    la persona a contactar por
                                                    nuestro Administrador de
                                                    Riesgo Médico para realizar
                                                    un análisis de campo en su
                                                    institución.
                                                </p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col
                                                xs={12}
                                                md={4}
                                                className="mt-4"
                                            >
                                                <InputFormulario
                                                    label="Nombre y apellido"
                                                    type="text"
                                                    id="nombre_apellido_asesor_juridico"
                                                    ariaDescribedby="Nombre y apellido de asesor jurídico"
                                                />
                                            </Col>
                                            <Col
                                                xs={12}
                                                md={4}
                                                className="mt-4"
                                            >
                                                <InputFormulario
                                                    label="Cargo"
                                                    type="text"
                                                    id="cargo_apellido_asesor_juridico"
                                                    ariaDescribedby="Cargo de asesor jurídico"
                                                />
                                            </Col>

                                            <Col
                                                xs={12}
                                                md={4}
                                                className="mt-4"
                                            >
                                                <InputFormulario
                                                    label="Teléfono"
                                                    type="text"
                                                    id="telefono_apellido_asesor_juridico"
                                                    ariaDescribedby="Teléfono de asesor jurídico"
                                                />
                                            </Col>
                                        </Row>
                                    </Container>
                                </CardSectionFormulario>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} md={12} className="mt-4">
                                <CardSectionFormulario title="Documentación Médica (Historia Clínica)">
                                    <Container>
                                        <Row>
                                            <Col
                                                xs={12} md={12} 
                                                className="mt-4 d-flex flex-column justify-content-center align-items-start"
                                            >
                                                <CheckFormulario
                                                    id="sn_registro_escrito_historia_clinica_con_evolucion_medica_paciente"
                                                    label="¿Conserva el establecimiento un sistema de registro escrito de historias clínicas con la evolución médica completa de cada paciente,
                                                    desde su ingreso a la Institución hasta su derivación, óbito o alta definitiva?"
                                                />
                                            </Col>

                                            <Col
                                                xs={12} md={12} 
                                                className="mt-4 d-flex flex-column justify-content-center align-items-start"
                                            >
                                                <CheckFormulario
                                                    id="sn_documentacion_medica_procedimientos_tratamientos"
                                                    label="¿Contiene la documentación médica antedicha la firma de los profesionales involucrados en los procedimientos y tratamientos?"
                                                />
                                            </Col>

                                            <Col
                                                xs={12} md={12} 
                                                className="mt-4 d-flex flex-column justify-content-center align-items-start"
                                            >
                                                <CheckFormulario
                                                    id="sn_consentimiento_informado_dialisis"
                                                    label="¿Los pacientes firman un Consentimiento Informado para dializarse?"
                                                />
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col
                                                xs={12}
                                                md={12}
                                                className="mt-4"
                                            >
                                                <TextAreaFormulario
                                                    label="Historia Clínica"
                                                    id="historia_clinica"
                                                    ariaDescribedby="Descripción de historia clínica"
                                                ></TextAreaFormulario>
                                            </Col>
                                        </Row>
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
