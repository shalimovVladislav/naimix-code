import { configureStore } from "@reduxjs/toolkit";
import compatibilityReducer from "./slices/compatibilitySlice";

export const store = configureStore({
  reducer: {
    compatibility: compatibilityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
