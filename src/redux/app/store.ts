import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/user";
import postReducer from "../slice/post";
import themeReducer from "../slice/theme";
import { notiReducer } from "../../noti";

const store = configureStore({
  reducer: {
    userStore: userReducer,
    postStore: postReducer,
    themeStore: themeReducer,
    notiStore: notiReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
