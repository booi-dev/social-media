/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserType = {
  id: string;
  displayName: string;
  displayPic: string;
  userName: string;
  email: string;
};

const initialUser: UserType = {
  id: "",
  displayName: "Booi Mangang",
  displayPic:
    "https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=600",
  userName: "bo_ma",
  email: "booimangang@gmail.com",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {
    createUser: (state, action: PayloadAction<UserType>) => {
      state = action.payload;
    },
    updateName: (state, action: PayloadAction<string>) => {
      state = { ...state, displayName: action.payload };
    },
  },
});

export default userSlice.reducer;
export const { createUser, updateName } = userSlice.actions;
