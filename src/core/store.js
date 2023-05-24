import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import themeReducer from "../common/themeSlice";
import fetchRepositoriesAPIReducer from "../features/PersonalHomepage/fetchRepositoriesSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        theme: themeReducer,
        myRepositories: fetchRepositoriesAPIReducer,
    },

    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga)

export default store; 