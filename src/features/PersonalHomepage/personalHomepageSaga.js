import { call, delay, put, takeLatest } from "redux-saga/effects";
import { personalHomepageAPI } from "./personalHomepageAPI";
import { fetchRepositories, fetchRepositoriesError, fetchRepositoriesSuccess } from "./personalHomepageSlice";

const loadingDelay = 2_000;

function* fetchRepositoriesHandler({ payload: username }) {
    try {
        yield delay(loadingDelay);
        const repositories = yield call(personalHomepageAPI, username);
        yield put(fetchRepositoriesSuccess(repositories));
    } catch (error) {
        yield put(fetchRepositoriesError());
    }
};

export function* personalHomepageSaga() {
    yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
};
