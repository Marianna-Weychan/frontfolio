import { takeLatest, put, call, delay } from "redux-saga/effects";
import {
    fetchRepositoriesStart,
    fetchRepositoriesSuccess,
    fetchRepositoriesFailure,
} from "./fetchRepositoriesSlice";
import { fetchRepositoriesAPI } from "./fetchRepositoriesAPI";

const loadingDelay = 2000;

function* fetchRepositoriesHandler({ payload: username }) {
    try {
        yield put(fetchRepositoriesStart());
        yield delay(loadingDelay);
        const repositories = yield call(fetchRepositoriesAPI, username);
        yield put(fetchRepositoriesSuccess(repositories));
    } catch (error) {
        yield put(fetchRepositoriesFailure());
    }
}

export function* myRepositoriesSaga() {
    yield takeLatest(fetchRepositoriesStart.type, fetchRepositoriesHandler);
}
