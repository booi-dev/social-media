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
    destroy: (state, action: PayloadAction<TweetType>) => {
      state.tweets.filter((tweet) => tweet.id !== action.payload.id);
    },
  },
});

export default tweetSlice.reducer;
export const { create, destroy } = tweetSlice.actions;
