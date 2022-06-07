import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "color",
  initialState: {
    value: { firstColor: "white", secondColor: "white" },
  },
  reducers: {
    changeFirstColor: (state, action) => {
      state.value.firstColor = action.payload;
    },
    changeSecondColor: (state, action) => {
      state.value.secondColor = action.payload;
    },
  },
});

export const { changeFirstColor, changeSecondColor } = colorSlice.actions;

export default colorSlice.reducer;
