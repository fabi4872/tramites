import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
};

const globalsSlice = createSlice({
    name: 'globals',
    initialState,
    reducers: {},
});

export const globalsStore = configureStore({
    reducer: {
        globals: globalsSlice.reducer,
    },
});

export default globalsSlice.reducer;
