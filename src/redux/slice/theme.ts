/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const InitialTheme = "dark";

const themeSlice = createSlice({
  name: "theme",
  initialState: InitialTheme,
  reducers: {
    toggleTheme: (state) => {
      if (state === "dark") state = "light";
      if (state === "light") state = "dark";
    },
  },
});

export default themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;
