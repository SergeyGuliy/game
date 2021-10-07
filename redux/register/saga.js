import { takeEvery, put, takeLatest, call } from "@redux-saga/core/effects";
import { actions } from "./";
import {
  lazyRegisterUser,
  registerUser,
  autogeneratePasswrodRegister,
} from "../../API";

function* registerProcess({ payload }) {
  const { email, phone } = payload;
  const res = yield call(autogeneratePasswrodRegister, { email, phone });
  if (res.error === "EMAIL_TAKEN") {
    yield put(actions.reg({ error: "EMAIL_TAKEN" }));
  } else {
    yield put(actions.reg({ error: "" }));
  }
}

function* regSaga() {
  yield takeLatest("REG_PROCESS", registerProcess);
}
3;
export default regSaga;
