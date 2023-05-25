import { all } from "redux-saga/effects";
import { personalHomepageSaga } from "../features/PersonalHomepage/personalHomepageSaga";

export function* saga() {
    yield all([
        personalHomepageSaga(),
    ]);
};