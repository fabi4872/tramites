import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    motivosART: [],
    motivosGenerales: [
        {
            id: "Seguros - Modificaciones en póliza",
            descripcion: "Modificaciones en póliza",
            submotivos: [
                {
                    id: "76",
                    descripcion: "Conducto de pago"
                },
                {
                    id: "77",
                    descripcion: "Renovación"
                },
                {
                    id: "79",
                    descripcion: "Endoso modificación"
                },
            ]
        },
        {
            id: "Seguros - Copia de póliza",
            descripcion: "Copia de póliza",
            submotivos: [
                {
                    id: "22",
                    descripcion: "Copia física original"
                }
            ]
        },
        {
            id: "Seguros - Reclamo diferencia de costo cotización y emisión",
            descripcion: "Reclamo diferencia de costo cotización y emisión",
            submotivos: [
                {
                    id: "0",
                    descripcion: "Sin Submotivo"
                }
            ]
        },
        {
            id: "Seguros - Reclamo diferencia de datos",
            descripcion: "Reclamo diferencia de datos",
            submotivos: [
                {
                    id: "0",
                    descripcion: "Sin Submotivo"
                }
            ]
        },
        {
            id: "Seguros - Pedido de baja",
            descripcion: "Pedido de baja",
            submotivos: [
                {
                    id: "80",
                    descripcion: "Anulación de póliza"
                }
            ]
        },
        {
            id: "Seguros - Solicitud pendiente de emision",
            descripcion: "Solicitud pendiente de emision",
            submotivos: [
                {
                    id: "51",
                    descripcion: "Estado de inspección"
                },
                {
                    id: "50",
                    descripcion: "Pendiente de emisión"
                }
            ]
        },
        {
            id: "Seguros - Solicitud Certificados",
            descripcion: "Solicitud Certificados",
            submotivos: [
                {
                    id: "19",
                    descripcion: "Certificado de Libre Deuda"
                },
                {
                    id: "18",
                    descripcion: "Certificado de Póliza en Trámite"
                },
                {
                    id: "12",
                    descripcion: "Tarjeta de Circulación / Copia Tarjeta de Circulación"
                },
                {
                    id: "14",
                    descripcion: "Certificado de Cobertura por Siniestro"
                },
                {
                    id: "15",
                    descripcion: "Certificado de Cobertura"
                }
            ]
        },
        {
            id: "Seguros - Reclamo por asistencia",
            descripcion: "Reclamo por asistencia",
            submotivos: [
                {
                    id: "27",
                    descripcion: "Reintegro de gastos"
                },
                {
                    id: "26",
                    descripcion: "Negación servicio"
                }
            ]
        },
        {
            id: "Seguros - Denuncia de siniestro",
            descripcion: "Denuncia de siniestro",
            submotivos: [
                {
                    id: "4",
                    descripcion: "Ampliación de denuncia"
                },
                {
                    id: "5",
                    descripcion: "Denuncia con formulario"
                }
            ]
        },
        {
            id: "Seguros - Copia de denuncia",
            descripcion: "Copia de denuncia",
            submotivos: [
                {
                    id: "0",
                    descripcion: "Sin Submotivo"
                }
            ]
        }
    ],
    motivosLife: []
};

const motivosSlice = createSlice({
    name: 'motivos',
    initialState,
    reducers: {},
    extraReducers: {},
});

export const store = configureStore({
    reducer: {
        motivos: motivosSlice.reducer,
    },
});

export default motivosSlice.reducer;
