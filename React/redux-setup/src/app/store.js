import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import rootReducer from "../redux/rootReducer";

const persistConfig = {
    key: "root",
    storage: storage.default ? storage.default : storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,
    },)
})

export const persistor = persistStore(store)