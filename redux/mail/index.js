import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  success: false,
  error: false,
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    sendMail: (state, { payload }) => {
      // console.log("payload", payload);
      if (payload) {
        state.success = true;
        state.error = false;
      } else {
        state.success = false;
        state.error = true;
      }
    },
  },
});

export const { reducer, actions } = mailSlice;
