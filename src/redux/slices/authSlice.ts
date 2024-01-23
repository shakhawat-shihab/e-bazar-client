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
      state.userData = {
        token: action?.payload?.token,
        userId: action?.payload?.authData?.userId,
        email: action?.payload?.authData?.email,
        _id: action?.payload?.authData?._id,
      };
    },
    removeUserData: (state) => {
      console.log("removing user data");
      state.userData = {};
    },
  },
});
export const { loadUserInfo, addUserData, removeUserData } = authSlice.actions;

export default authSlice.reducer;
