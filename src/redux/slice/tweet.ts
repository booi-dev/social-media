/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TweetType } from "../../types";

type InitialStateType = {
  tweets: TweetType[];
};

const initialState: InitialStateType = {
  tweets: [],
};

const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    create: (state, action: PayloadAction<TweetType>) => {
      state.tweets.push(action.payload);
    },
    destroy: (state, action: PayloadAction<string>) => {
      state.tweets = state.tweets.filter(
        (tweet) => tweet.id !== action.payload
      );
    },
    replace: (state, action: PayloadAction<TweetType[]>) => {
      state.tweets = action.payload;
    },
  },
});

export default tweetSlice.reducer;
export const { create, destroy, replace } = tweetSlice.actions;
