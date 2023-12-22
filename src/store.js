import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import dataUser from "./features/counter/userSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user : dataUser,
  },
});
