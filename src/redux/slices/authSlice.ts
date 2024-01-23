import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUserInfo: (state, action) => {
      state.userData = action.payload;
    },
    addUserData: (state, action) => {
      console.log("adding user data", action.payload);
      state.userData = action.payload;
    },
    removeUserData: (state) => {
      console.log("removing user data");
      state.userData = {};
    },
  },
});
export const { loadUserInfo, addUserData, removeUserData } = authSlice.actions;

export default authSlice.reducer;
