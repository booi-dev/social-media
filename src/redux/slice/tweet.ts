/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TweetType } from "../../types";

type InitialTweetsType = {
  tweets: TweetType[];
};

const InitialTweets: InitialTweetsType = {
  tweets: [],
};

const tweetSlice = createSlice({
  name: "tweet",
  initialState: InitialTweets,
  reducers: {
    create: (state, action: PayloadAction<TweetType>) => {
      state.tweets.push(action.payload);
    },
    destroy: (state, action: PayloadAction<string>) => {
      state.tweets = state.tweets.filter(
        (tweet) => tweet.tid !== action.payload
      );
    },
    update: (state, action) => {
      console.log(action.payload);
      const updatedTweets = state.tweets.map((tweet) => {
        if (tweet.tid === action.payload.targetTId) {
          return {
            ...tweet,
            ...action.payload.tobeUpdateProperty,
          };
        }
        return tweet;
      });
      return {
        ...state,
        tweets: updatedTweets,
      };
    },

    replace: (state, action: PayloadAction<TweetType[]>) => {
      state.tweets = action.payload;
    },
  },
});

export default tweetSlice.reducer;
export const { create, destroy, update, replace } = tweetSlice.actions;
