const persistConfig = {
    key: "root",
    storage: typeof window !== "undefined" ? localStorage : undefined,
}

export const persistedReducer = (rootReducer) => persistReducer(persistConfig, rootReducer)