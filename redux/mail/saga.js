// mailSlice;
import { takeEvery, put, takeLatest, call } from "@redux-saga/core/effects";
import { actions } from "./";
import { sendMail } from "../../API";

function* sendMailProcess({ payload }) {
  // console.log(payload);
  const { token } = payload;
  const res = yield call(sendMail, { token });
  // console.log(res.success, "res");
  if (res.success) {
    yield put(actions.sendMail(true));
  } else {
    yield put(actions.sendMail(false));
  }
}

function* mailSaga() {
  yield takeLatest("SEND_MAIL", sendMailProcess);
}
export default mailSaga;
