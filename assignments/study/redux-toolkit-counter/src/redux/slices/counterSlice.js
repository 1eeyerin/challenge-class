import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  initialState,
  name: "counter",
  reducers: {
    //reducers : 공장 (state, action)
    // action.type은 : counter/increment
    // action.payload는 전달해준 값
    increment: (state, { payload }) => {
      state.count += payload;
    },
    decrement: (state, { payload }) => {
      state.count -= payload;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
