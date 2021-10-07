import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topUsers: [],
  error: false,
};

export const ratingSlice = createSlice({
  name: "raiting",
  initialState,
  reducers: {
    getUsers: (state, { payload }) => {
      const { users } = payload;
      state.topUsers = [...users];
    },
  },
});

export const { reducer, actions } = ratingSlice;
