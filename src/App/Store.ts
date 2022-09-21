import { configureStore } from "@reduxjs/toolkit";
import { dataApi } from "../Services/FetchData";
import { setupListeners } from "@reduxjs/toolkit/query";
import PockemonReducer from "./Features";

export const store = configureStore({
  reducer: {
    pockemons: PockemonReducer,
    [dataApi.reducerPath]: dataApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(dataApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
