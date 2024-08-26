import { configureStore } from "@reduxjs/toolkit";

import filtersReducer from "./features/filterSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      filters: filtersReducer,
    },
  });
};

// Type inference utilities
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
