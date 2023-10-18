import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { BiEraser } from "react-icons/bi";

const SimuladorCombosEtiquetas = ({ motivosOv }) => {
    const [selectedMotivoOv, setSelectedMotivoOv] = useState([]);
    const [selectedMotivoRepositorio, setSelectedMotivoRepositorio] = useState([]);
    const [selectedSubmotivoRepositorio, setSelectedSubmotivoRepositorio] = useState([]);
    const [motivosOvCombo, setMotivosOvCombo] = useState([]);
    const [motivosRepositorioCombo, setMotivosRepositorioCombo] = useState([]);
    const [submotivosRepositorioCombo, setSubmotivosRepositorioCombo] = useState([]);

    // Handlers
    const handleChange = (items, tipo) => {
        if (tipo === "motivoOv") {
            setSelectedMotivoOv(items);
        } else if (tipo === "motivoRepositorio") {
            setSelectedMotivoRepositorio(items);
        }
        else if (tipo === "submotivoRepositorio") {
            setSelectedSubmotivoRepositorio(items);
        }
    }
    
    // useEffect
    useEffect(() => {
        setSelectedMotivoOv([]);
        setSelectedMotivoRepositorio([]);
        setSelectedSubmotivoRepositorio([]);
        setMotivosRepositorioCombo([]);
        setSubmotivosRepositorioCombo([]);
        const uniqueMotivosOv = [...new Set(motivosOv
            .filter(item => item.sn_activo)
            .map((item) => ({
                id: item.id,
                descripcion: item.descripcion,
                asociados: item.motivos_submotivos_repositorio_asociados
        })))];
    
        setMotivosOvCombo(uniqueMotivosOv);
    }, [motivosOv]);

    useEffect(() => {
        if (selectedMotivoOv.length > 0) {
            const motivosRepositorio = selectedMotivoOv[0].asociados.reduce((accumulator, item) => {
                if (!accumulator.some(existingItem => existingItem.id === item.id_motivo_repositorio)) {
                    accumulator.push({
                        id: item.id_motivo_repositorio,
                        descripcion: item.descripcion_motivo_repositorio
                    });
                }
                return accumulator;
            }, []);
        
            setMotivosRepositorioCombo(motivosRepositorio);
        }        
    }, [selectedMotivoOv]);

    useEffect(() => {
        if (selectedMotivoRepositorio.length > 0) {
            const submotivosRepositorio = [...new Set(selectedMotivoOv[0].asociados
                .filter(item => item.id_motivo_repositorio === selectedMotivoRepositorio[0].id && item.sn_activo)
                .map(item => ({
                    id: item.id_submotivo_repositorio,
                    descripcion: item.descripcion_submotivo_repositorio
                }))
            )];
    
            setSubmotivosRepositorioCombo(submotivosRepositorio);
        }
    }, [selectedMotivoRepositorio]);
    
    return (
        <>
            <h5 style={{ fontStyle: "italic", color: "#A1A1A1", fontWeight: "400" }}>Combos de etiquetas</h5>
            <Col xs={12} lg={4}>
                <Form.Label
                    className="nuevo-tramite-label mt-3"
                    htmlFor={`typeahead-motivos_ov`}
                >
                    Motivos OV
                </Form.Label>
                <div className="d-flex justify-content-between align-items-center">
                    <Typeahead
                        style={{ width: "100%" }}
                        labelKey="descripcion"
                        id={`typeahead-motivos_ov`}
                        name={`typeahead-motivos_ov`}
                        options={motivosOvCombo}
                        placeholder="Seleccione"
                        onChange={(e) => handleChange(e, "motivoOv")}
                        selected={selectedMotivoOv ? selectedMotivoOv : []}
                    ></Typeahead>
                    <Button
                        style={{ border: "none" }}
                        variant="default"
                        className="btn-limpiar-submotivo"
                        onClick={() => {
                            setSelectedMotivoOv([]);
                            setSelectedMotivoRepositorio([]);
                            setSelectedSubmotivoRepositorio([]);
                            setMotivosRepositorioCombo([]);
                            setSubmotivosRepositorioCombo([]);
                        }}
                        disabled={!selectedSubmotivoRepositorio}
                    >
                        <BiEraser className="repositorio-icon" size={22} />
                    </Button>
                </div>
            </Col>
            <Col xs={12} lg={4}>
                <Form.Label
                    className="nuevo-tramite-label mt-4"
                    htmlFor={`typeahead-motivos_repositorio`}
                >
                    Motivos Repositorio
                </Form.Label>
                <div className="d-flex justify-content-between align-items-center">
                    <Typeahead
                        style={{ width: "100%" }}
                        labelKey="descripcion"
                        id={`typeahead-motivos_repositorio`}
                        name={`typeahead-motivos_repositorio`}
                        options={motivosRepositorioCombo}
                        placeholder="Seleccione"
                        onChange={(selectedOptions) =>
                            handleChange(selectedOptions, "motivoRepositorio")
                        }
                        selected={
                            selectedMotivoRepositorio
                                ? selectedMotivoRepositorio
                                : []
                        }
                    ></Typeahead>
                    <Button
                        style={{ border: "none" }}
                        variant="default"
                        className="btn-limpiar-submotivo"
                        onClick={() => {
                            setSelectedMotivoRepositorio([]);
                            setSelectedSubmotivoRepositorio([]);
                            setSubmotivosRepositorioCombo([]);
                        }}
                        disabled={!selectedMotivoRepositorio}
                    >
                        <BiEraser className="repositorio-icon" size={22} />
                    </Button>
                </div>
            </Col>
            <Col
                xs={12}
                lg={4}
                className="d-flez justify-content-center align-items-center"
            >
                <Form.Label
                    className="nuevo-tramite-label mt-4"
                    htmlFor={`typeahead-submotivos_repositorio`}
                >
                    Submotivos Repositorio
                </Form.Label>
                <div className="d-flex justify-content-between align-items-center">
                    <Typeahead
                        style={{ width: "100%" }}
                        labelKey="descripcion"
                        id={`typeahead-submotivos_repositorio`}
                        name={`typeahead-submotivos_repositorio`}
                        options={submotivosRepositorioCombo}
                        placeholder="Seleccione"
                        onChange={(selectedOptions) =>
                            handleChange(
                                selectedOptions,
                                "submotivoRepositorio"
                            )
                        }
                        selected={
                            selectedSubmotivoRepositorio
                                ? selectedSubmotivoRepositorio
                                : []
                        }
                    ></Typeahead>
                    <Button
                        style={{ border: "none" }}
                        variant="default"
                        className="btn-limpiar-submotivo"
                        onClick={() => {
                            setSelectedSubmotivoRepositorio([]);
                        }}
                        disabled={!selectedMotivoRepositorio}
                    >
                        <BiEraser className="repositorio-icon" size={22} />
                    </Button>
                </div>
            </Col>
        </>
    );
};

SimuladorCombosEtiquetas.propTypes = {
    motivosOv: PropTypes.array,
};

export default SimuladorCombosEtiquetas;
