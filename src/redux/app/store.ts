import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/user";
import tweetReducer from "../slice/tweet";

const store = configureStore({
  reducer: {
    userReducer,
    tweetStore: tweetReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
