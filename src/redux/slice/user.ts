/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../types/UserType";

const initialUser: UserType = {
  uid: "03",
  // displayName: "x__x",
  // displayPic:
  //   "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  // userName: "o_o",
  displayName: "Santidas Gausa",
  displayPicURL:
    "https://images.pexels.com/photos/1036642/pexels-photo-1036642.jpeg?auto=compress&cs=tinysrgb&w=600",
  userName: "gausa",
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
