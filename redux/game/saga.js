import { takeEvery, put } from "@redux-saga/core/effects";
import { gameSlice } from "./";

function* startGame() {}

function* gameSaga() {
  // yield put(gameSlice.actions.shaffle(), startGame);
}

export default gameSaga;
