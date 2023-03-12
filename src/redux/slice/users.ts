/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../types";

type InitialUserType = {
  users: UserType[];
};

const initialUser: InitialUserType = {
  users: [],
};

const usersSlice = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {
    create: (state, action) => {
      state.users.push(action.payload);
    },
    destroy: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.uid !== action.payload);
    },
  },
});

export default usersSlice.reducer;
export const { create, destroy } = usersSlice.actions;
