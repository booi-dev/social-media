/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const getClientDefaultTheme = () => {
  let defaultTheme: string;

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    defaultTheme = "dark";
  } else {
    defaultTheme = "light";
  }

  return defaultTheme;
};

getClientDefaultTheme();

const InitialTheme = {
  theme: getClientDefaultTheme(),
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
