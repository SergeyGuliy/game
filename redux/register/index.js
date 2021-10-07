import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRegister: false,
  errorRegister: false,
};

export const regSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    reg: (state, { payload }) => {
      const { error } = payload;
      if (error === "EMAIL_TAKEN") {
        state.isRegister = false;
        state.errorRegister = true;
      } else {
        state.isRegister = true;
        state.errorRegister = false;
      }
    },
  },
});

export const { reducer, actions } = regSlice;
