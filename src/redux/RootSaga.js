import { all } from "redux-saga/effects";
import saga from "./Saga";

export default function* rootSaga() {
  yield all([saga()]);
}
