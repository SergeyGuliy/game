import { takeEvery, put, takeLatest, call } from "@redux-saga/core/effects";
import { authUser } from "../../API";
import { actions } from "./";

function* authProcess({ payload }) {
  const { email, password } = payload;

  const res = yield call(authUser, { email, password });

  if (res === "error") {
    yield put(actions.errorAuth());
  } else {
    yield put(actions.authorization());
    yield put(actions.setUser(res));
    localStorage.setItem("user", JSON.stringify({ email, password }));
    localStorage.setItem("token", JSON.stringify({ token: res.accessToken }));
  }
}

function* authSaga() {
  yield takeLatest("AUTH_PROCESSS", authProcess);
}

export default authSaga;
