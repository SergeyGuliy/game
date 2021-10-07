import { takeEvery, put, takeLatest, call } from "@redux-saga/core/effects";
import { actions } from "./";
import { restoreEmail } from "../../API";

function* restoreProcess({ payload }) {
  const { email } = payload;
  const res = yield call(restoreEmail, { email });
  yield put(actions.restoreUser(res.success));
}

function* restoreSaga() {
  yield takeLatest("RESTORE_EMAIL", restoreProcess);
}
3;
export default restoreSaga;
