import { configureStore } from "@reduxjs/toolkit";
import { tasksAPI } from "../service/tasks";

export const store = configureStore({
  reducer: {
    [tasksAPI.reducerPath]: tasksAPI.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tasksAPI.middleware)
})