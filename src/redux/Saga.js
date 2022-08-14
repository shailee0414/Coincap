import { call, put, takeLatest } from "redux-saga/effects";
import { fetchAssets, setReduxState } from "./Actions";

export function* getRequest(url) {
  try {
    const res = yield fetch(url, { method: "GET" });
    const response = yield res.json();
    return response;
  } catch (error) {}
}

function* fetchAssets$(action) {
  const url = "https://api.coincap.io/v2/assets";
  const res = yield call(getRequest, url);
  if (res?.data?.length) {
    yield put(setReduxState({ assetsData: res?.data }));
  } else {
    console.log("@@@@@error");
  }
}

export default function* rootSaga() {
  yield takeLatest(fetchAssets, fetchAssets$);
}
