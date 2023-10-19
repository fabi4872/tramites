import { createSlice, configureStore } from "@reduxjs/toolkit";
import md5 from "md5";

const initialStateMotivosOv = {
    motivosOv: []
};

export const motivosOvSlice = createSlice({
    name: "motivosOv",
    initialState: initialStateMotivosOv,
    reducers: {
        addMotivoOv: (state, action) => {
            const { motivoInput } = action.payload;
            const fecha = new Date().toISOString();
            const nuevoMotivo = {
                id: md5(motivoInput + fecha),
                descripcion: motivoInput,
                sn_activo: true,
                fecha_alta: fecha,
                motivos_submotivos_repositorio_asociados: [],
            };

            state.motivosOv.unshift(nuevoMotivo);
        },
        addAsociadoMotivoOv: (state, action) => {
            const { motivoOv, motivo, submotivo } = action.payload;

            const nuevaAsociacion = {
                id: md5(motivoOv.id + motivo.id + submotivo.id),
                sn_activo: true,
                id_motivo_repositorio: motivo.id,
                descripcion_motivo_repositorio: motivo.descripcion,
                id_submotivo_repositorio: submotivo.id,
                descripcion_submotivo_repositorio: submotivo.descripcion,
                descripcion_submotivo_ov: "",
            };

            const motivoOvActualizado = {
                ...motivoOv,
                motivos_submotivos_repositorio_asociados: [
                    ...motivoOv.motivos_submotivos_repositorio_asociados,
                    nuevaAsociacion,
                ],
            };

            state.motivosOv = state.motivosOv.map((item) =>
                item.id === motivoOvActualizado.id ? motivoOvActualizado : item
            );
        },
        editDescripcionMotivoOv: (state, action) => {
            const { motivoOv, descripcion } = action.payload;
            const motivoOvEncontrado = state.motivosOv.find((item) => item.id === motivoOv.id);
            if (motivoOvEncontrado) {
                motivoOvEncontrado.descripcion = descripcion;
            }
        },
        eliminarActivarMotivoOv: (state, action) => {
            const { motivoOv } = action.payload;
            const motivoOvEncontrado = state.motivosOv.find((item) => item.id === motivoOv.id);
            if (motivoOvEncontrado) {
                motivoOvEncontrado.sn_activo = !motivoOvEncontrado.sn_activo;
            }
        },
        editDescripcionAsociadoMotivoOv: (state, action) => {
            const { motivoOv, asociado, descripcion } = action.payload;
            const motivoOvEncontrado = state.motivosOv.find(
                (item) => item.id === motivoOv.id
            );
            if (motivoOvEncontrado) {
                const asociadoEncontrado =
                    motivoOvEncontrado.motivos_submotivos_repositorio_asociados.find(
                        (item) => item.id === asociado.id
                    );
                if (asociadoEncontrado) {
                    asociadoEncontrado.descripcion_submotivo_ov = descripcion;
                }
            }
        },
        eliminarActivarAsociadoMotivoOv: (state, action) => {
            const { motivoOv, asociado } = action.payload;
            const motivoOvEncontrado = state.motivosOv.find(
                (item) => item.id === motivoOv.id
            );
            if (motivoOvEncontrado) {
                const asociadoEncontrado =
                    motivoOvEncontrado.motivos_submotivos_repositorio_asociados.find(
                        (item) => item.id === asociado.id
                    );
                if (asociadoEncontrado) {
                    asociadoEncontrado.sn_activo =
                        !asociadoEncontrado.sn_activo;
                }
            }
        },
    },
});

export const { addMotivoOv, addAsociadoMotivoOv, editDescripcionMotivoOv, eliminarActivarMotivoOv, editDescripcionAsociadoMotivoOv, eliminarActivarAsociadoMotivoOv } =
    motivosOvSlice.actions;

export const store = configureStore({
    reducer: {
        motivosOv: motivosOvSlice.reducer
    },
});

export default motivosOvSlice.reducer;
