import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  length: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // loadCartRedux: (state, action) => {
    //   console.log("action?.payload ---------- ", action?.payload);
    //   state._id = action.payload?._id;
    //   state.courseDetails = action.payload?.courseDetails;
    // },
    // addToCartRedux: (state, action) => {
    //   state.courseDetails.push(action.payload);
    // },
    // removeFromCartRedux: (state, action) => {
    //   state.courseDetails = state.courseDetails.filter(
    //     (course) => course.courseId !== action.payload
    //   );
    // },
    setCartLength: (state, action) => {
      state.length = action?.payload;
    },
  },
});
export const { setCartLength } = cartSlice.actions;

export default cartSlice.reducer;
