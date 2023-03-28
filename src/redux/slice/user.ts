/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../types/UserType";

const userTemplate: UserType = {
  uid: "",
  displayName: "",
  displayPicURL:
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  userName: "",
  email: "",
  following: [],
  followers: [],
  verification: { state: false, type: "" },
};

const initialUser: { isAuthenticate: boolean; user: UserType } = {
  isAuthenticate: true,
  user: userTemplate,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {
    createUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    updateName: (state, action: PayloadAction<string>) => {
      state.user = { ...state.user, displayName: action.payload };
    },
  },
});

export default userSlice.reducer;
export const { createUser, updateName } = userSlice.actions;
