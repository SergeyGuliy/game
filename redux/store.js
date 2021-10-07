import { applyMiddleware, combineReducers, createStore } from "redux";
import { fork } from "@redux-saga/core/effects";
import createSagaMiddleware from "redux-saga";

// Slices
import { authSlice } from "./auth";
import { gameSlice } from "./game";
import { regSlice } from "./register";
import { userSlice } from "./user";
import { ratingSlice } from "./raiting";
import { restoreSlice } from "./restore";
import { mailSlice } from "./mail";

// Sagas
import authSaga from "./auth/saga";
import gameSaga from "./game/saga";
import regSaga from "./register/saga";
import userSaga from "./user/saga";
import ratingSaga from "./raiting/saga";
import restoreSaga from "./restore/saga";
import mailSaga from "./mail/saga";

function* rootSaga() {
  yield fork(authSaga);
  yield fork(gameSaga);
  yield fork(regSaga);
  yield fork(userSaga);
  yield fork(ratingSaga);
  yield fork(restoreSaga);
  yield fork(mailSaga);
}

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  game: gameSlice.reducer,
  reg: regSlice.reducer,
  user: userSlice.reducer,
  rating: ratingSlice.reducer,
  restore: restoreSlice.reducer,
  mail: mailSlice.reducer,
});

const sagaMiddleware = createSagaMiddleware();

export const makeStore = (initialState) => {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

  store.runSaga = sagaMiddleware.run(rootSaga);

  store.close = () => store.dispatch(END);
  return store;
};
