import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";

import saga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {

    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;