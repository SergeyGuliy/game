import { takeEvery, put, takeLatest, call } from "@redux-saga/core/effects";
import { actions } from "./";
import {
  addPoint,
  getRank,
  getPoints,
  getCountGame,
  checkRewardTaken,
} from "../../API";

function* addPointProcess({ payload }) {
  const { points, token } = payload;
  const res = yield call(addPoint, { points, token });
  if (res.success) {
    yield put(actions.addPoints({ points: res.points }));
  }
}

function* getRankProcess({ payload }) {
  const { token } = payload;

  const res = yield call(getRank, { token });
  if (res.rank) {
    yield put(actions.setRank(res.rank));
  } else {
    yield put(actions.setRank(0));
  }
}

function* setScopeNonAuthUser({ payload }) {
  const { points } = payload;
  yield put(actions.setNonAuthScope(points));
}

function* getPointsProcess({ payload }) {
  const { token } = payload;
  const res = yield call(getPoints, { token });
  if (res.success) yield put(actions.getPoints({ points: res.points }));
}

function* getCountGameProcess({ payload }) {
  const { token } = payload;
  const res = yield call(getCountGame, { token });
  if (res.success) {
    yield put(actions.getCountGame(res.user.gamesPlayed));
  }
}

function* checkRewardTakenProcess({ payload }) {
  const { token } = payload;
  const res = yield call(checkRewardTaken, { token });
  if (res.success) {
    yield put(actions.checkRewardTaken(res.user.rewardTaken));
  }
}

function* userSaga() {
  yield takeLatest("ADD_POINTS", addPointProcess);
  yield takeLatest("GET_RANK", getRankProcess);
  yield takeLatest("ADD_POINTS_NON_AUTH", setScopeNonAuthUser);
  yield takeLatest("GET_POINTS", getPointsProcess);
  yield takeLatest("GET_COUNT_GAME", getCountGameProcess);
  yield takeLatest("CHECK_REWARD_TAKEN", checkRewardTakenProcess);
}
export default userSaga;
