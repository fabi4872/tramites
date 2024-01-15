const formData = {
    secciones: [
        {
            id: 1,
            descripcion: "Suma Asegurada Solicitada",
            campos: [
                {
                    id: 1,
                    label: "Límite de Cobertura",
                    icon: "",
                    componente: "",
                    requerido: {
                        nuevoNegocio: true,
                        endoso: true,
                        renovacion: true
                    } 
                }
            ]
        }
    ],
};

export default formData;
