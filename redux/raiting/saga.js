import { takeEvery, put, takeLatest, call } from "@redux-saga/core/effects";
import { actions } from "./";
import { getTopUsers } from "../../API";

function* getUserProcess({ payload }) {
  const { token } = payload;
  const res = yield call(getTopUsers, { token });

  if (res.success) {
    yield put(actions.getUsers({ users: res.top100 }));
  }
}

function* ratingSaga() {
  yield takeLatest("GET_TOP_USERS", getUserProcess);
}
3;
export default ratingSaga;
