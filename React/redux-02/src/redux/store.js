import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

import {
  persistStore,
  persistReducer,
} from "redux-persist";

const persistConfig = {
  key: "root",
  // storage: typeof window !== "undefined" ? localStorage : undefined,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
});

export const persistor = persistStore(store);