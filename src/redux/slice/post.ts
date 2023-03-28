/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PostType } from "../../types";

const InitialPosts: { posts: PostType[] } = {
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState: InitialPosts,
  reducers: {
    create: (state, action: PayloadAction<PostType>) => {
      state.posts.push(action.payload);
    },
    destroy: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter((post) => post.pid !== action.payload);
    },
    update: (state, action) => {
      console.log(action.payload);
      const updatedPosts = state.posts.map((post) => {
        if (post.pid === action.payload.targetTId) {
          return {
            ...post,
            ...action.payload.tobeUpdateProperty,
          };
        }
        return post;
      });
      return {
        ...state,
        posts: updatedPosts,
      };
    },
    replace: (state, action: PayloadAction<PostType[]>) => {
      state.posts = action.payload;
    },
  },
});

export default postSlice.reducer;
export const { create, destroy, update, replace } = postSlice.actions;
