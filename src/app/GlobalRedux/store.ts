"use client";
import { configureStore } from "@reduxjs/toolkit";
import hospitalsReducer from "@/app/GlobalRedux/slice/hospitalSlice";

export const store = configureStore({
  reducer: {
    hospitals: hospitalsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
