import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  email: "",
  phone: "",
  password: "",
  accessToken: "",
  emailVerified: false,
  errorAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authorization: (state, { payload }) => {
      state.errorAuth = false;
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
      state.email = "";
      state.phone = "";
      state.password = "";
      state.accessToken = "";
      state.emailVerified = false;
      state.errorAuth = false;
    },
    errorAuth: (state, { payload }) => {
      state.isAuth = false;
      state.errorAuth = true;
    },
    setUser: (state, { payload }) => {
      const { user, accessToken } = payload;
      state.accessToken = accessToken;
      state.email = user.email;
      state.phone = user.metadata.phone;
      state.emailVerified = user.emailVerified;
    },
  },
});

export const { reducer, actions } = authSlice;
