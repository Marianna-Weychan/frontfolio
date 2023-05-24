import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import themeReducer from "../common/themeSlice"


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        theme: themeReducer,

    },

    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga)

export default store; 