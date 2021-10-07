import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restore: false,
  error: false,
};

export const restoreSlice = createSlice({
  name: "restore",
  initialState,
  reducers: {
    restoreUser: (state, { payload }) => {
      if (payload) {
        state.restore = true;
        state.error = false;
      } else {
        state.restore = false;
        state.error = true;
      }
    },
  },
});

export const { reducer, actions } = restoreSlice;
