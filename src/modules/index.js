import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import globals from "./globals";
import motivos from "./motivos";
import motivosOv from "./motivosOv";

const rootReducer = combineReducers({
    globals,
    motivos,
    motivosOv
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
