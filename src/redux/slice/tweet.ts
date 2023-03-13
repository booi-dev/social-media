/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TweetType } from "../../types";

const InitialTweets: TweetType[] = [];

const tweetSlice = createSlice({
  name: "tweet",
  initialState: InitialTweets,
  reducers: {
    create: (state, action: PayloadAction<TweetType>) => {
      state.push(action.payload);
    },
    destroy: (state, action: PayloadAction<string>) => {
      state = state.filter((tweet) => tweet.tid !== action.payload);
    },
    replace: (state, action: PayloadAction<TweetType[]>) => {
      state = action.payload;
    },
  },
});

export default tweetSlice.reducer;
export const { create, destroy, replace } = tweetSlice.actions;
