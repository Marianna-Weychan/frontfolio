import { all } from "redux-saga/effects";
import myRepositoriesSaga from "../features/PersonalHomepage/fetchRepositoriesSaga";

export default function* rootSaga() {
    yield all([myRepositoriesSaga()]);
}