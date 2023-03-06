/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TweetType = {
  id: string;
  tweet: string;
  timespan: number;
  createBy: string;
  likeCount: number;
  likeBy: [];
  retweetCount: number;
  retweeetBy: [];
  replies: [];
};

type InitialState = {
  tweets: TweetType[];
};

const initialState: InitialState = {
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
