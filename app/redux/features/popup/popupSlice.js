import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  route: 0,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    showLogin: (state) => {
      state.route = 1;
    },
    showSignup: (state) => {
      state.route = 2;
    },
    closePopup: (state) => {
      state.route = 0;
    },
  },
});

export const { showLogin, showSignup, closePopup } = popupSlice.actions;
export default popupSlice.reducer;
