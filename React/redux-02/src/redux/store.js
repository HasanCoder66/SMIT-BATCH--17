import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

import {
  persistStore,
  persistReducer,
} from "redux-persist";

import storage from "redux-persist/lib/storage"; 

const persistConfig = {
  key: "root",
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