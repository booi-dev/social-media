/* eslint-disable no-param-reassign */

import { createSlice } from "@reduxjs/toolkit";
import { NotiType } from "../../type/notiType";

const initialNoti: NotiType = {
  open: false,
  text: "noti",
  timeout: 3,
  position: "top-center",
};

const notiSlice = createSlice({
  name: "notification",
  initialState: initialNoti,
  reducers: {
    open: (state) => {
      state.open = true;
    },
    close: (state) => {
      state.open = false;
    },
    createProperty: (state, action) => {
      state.text = action.payload.text;
      state.timeout = action.payload.timeout;
      state.position = action.payload.position;
    },
  },
});

export default notiSlice.reducer;
export const { open, close, createProperty } = notiSlice.actions;
