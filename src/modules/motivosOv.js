import { createSlice, configureStore } from "@reduxjs/toolkit";
import md5 from "md5";

const initialStateMotivosOv = {
    motivosOvART: [],
    motivosOvGenerales: [],
    motivosOvLife: []
};

export const motivosOvSlice = createSlice({
    name: 'motivosOv',
    initialState: initialStateMotivosOv,
    reducers: {
        addMotivoOv: (state, action) => {
            const { motivoInput, codigoRubro } = action.payload;
            const fecha = new Date().toISOString();
            const nuevoMotivo = {
                id: md5(motivoInput + fecha),
                descripcion: motivoInput,
                sn_activo: true,
                fecha_alta: fecha,
                motivos_submotivos_repositorio_asociados: []
            };

            // Actualizar el estado en función de la colección a la que pertenece motivoOv
            switch (codigoRubro) {
                case 1:
                    state.motivosOvART.unshift(nuevoMotivo);
                    break;
                case 2:
                    state.motivosOvGenerales.unshift(nuevoMotivo)
                    break;
                case 3:
                    state.motivosOvLife.unshift(nuevoMotivo);
                    break;
                default:
                    break;
            }
        },
        addMotivosSubmotivosToMotivoOv: (state, action) => {
            const { motivoOv, motivo, submotivo, codigoRubro } = action.payload;
            
            const nuevaAsociacion = {
                id: md5(motivoOv.id + motivo.id + submotivo.id),
                sn_activo: true,
                id_motivo_repositorio: motivo.id,
                descripcion_motivo_repositorio: motivo.descripcion,
                id_submotivo_repositorio: submotivo.id,
                descripcion_submotivo_repositorio: submotivo.descripcion,
                descripcion_submotivo_ov: ""
            };

            // Copiar el motivoOv actual del estado
            const motivoOvActualizado = {
                ...motivoOv,
                motivos_submotivos_repositorio_asociados: [
                    ...motivoOv.motivos_submotivos_repositorio_asociados,
                    nuevaAsociacion
                ]
            };

            // Actualizar el estado en función de la colección a la que pertenece motivoOv
            switch (codigoRubro) {
                case 1:
                    state.motivosOvART = state.motivosOvART.map((item) =>
                        item.id === motivoOvActualizado.id ? motivoOvActualizado : item
                    );
                    break;
                case 2:
                    state.motivosOvGenerales = state.motivosOvGenerales.map((item) =>
                        item.id === motivoOvActualizado.id ? motivoOvActualizado : item
                    );
                    break;
                case 3:
                    state.motivosOvLife = state.motivosOvLife.map((item) =>
                        item.id === motivoOvActualizado.id ? motivoOvActualizado : item
                    );
                    break;
                default:
                    break;
            }
        },
        editMotivoOv: (state, action) => {
            const { motivoOv, codigoRubro } = action.payload;

            // Actualizar el estado en función de la colección a la que pertenece motivoOv
            switch (codigoRubro) {
                case 1:
                    state.motivosOvART = state.motivosOvART.map((item) =>
                        item.id === motivoOv.id ? motivoOv : item
                    );
                    break;
                case 2:
                    state.motivosOvGenerales = state.motivosOvGenerales.map((item) =>
                        item.id === motivoOv.id ? motivoOv : item
                    );
                    break;
                case 3:
                    state.motivosOvLife = state.motivosOvLife.map((item) =>
                        item.id === motivoOv.id ? motivoOv : item
                    );
                    break;
                default:
                    break;
            }
        }
    },
});

export const { addMotivoOv, addMotivosSubmotivosToMotivoOv, editMotivoOv } =
    motivosOvSlice.actions;

export const store = configureStore({
    reducer: {
        motivosOv: motivosOvSlice.reducer
    },
});

export default motivosOvSlice.reducer;
