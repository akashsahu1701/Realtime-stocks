import { configureStore } from "@reduxjs/toolkit";
import stockReducer from "./stockSlice";

const store = configureStore({
  reducer: {
    stocks: stockReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
