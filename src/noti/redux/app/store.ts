import { configureStore } from "@reduxjs/toolkit";
import notiReducer from "../slice/notiSlice";

const store = configureStore({
  reducer: {
    notiStore: notiReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
