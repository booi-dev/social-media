/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const InitialTheme = {
  theme: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState: InitialTheme,
  reducers: {
    toggleTheme: (state) => {
      if (state.theme === "dark") state.theme = "light";
      else if (state.theme === "light") state.theme = "dark";
    },
  },
});

export default themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;
