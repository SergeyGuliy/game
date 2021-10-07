import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: 0,
  rank: 0,
  totalWeekScore: 0,
  nonAuthScore: 0,
  countGame: 0,
  rewardTaken: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addPoints: (state, { payload }) => {
      const { points } = payload;
      state.points = points;
      state.nonAuthScore = 0;
    },
    setRank: (state, { payload }) => {
      const rank = payload;
      state.rank = rank;
    },
    setNonAuthScope: (state, { payload }) => {
      const points = payload;
      state.nonAuthScore = points;
    },
    getPoints: (state, { payload }) => {
      const { points } = payload;
      state.points = points;
    },
    getCountGame: (state, { payload }) => {
      state.countGame = payload;
    },
    checkRewardTaken: (state, { payload }) => {
      state.rewardTaken = payload;
    },
  },
});

export const { reducer, actions } = userSlice;
