import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  tweets: object[];
};

const initialState: InitialState = {
  tweets: [],
};

const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    create: (state, action: PayloadAction<object>) => {
      state.tweets.push(action.payload);
    },
  },
});

export default tweetSlice.reducer;
export const { create } = tweetSlice.actions;
