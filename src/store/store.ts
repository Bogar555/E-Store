// store.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // localStorage for web
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "../slice";
 
const persistConfig = {
  key: "root",
  storage, 
};
 
const persistedReducer = persistReducer(persistConfig, rootReducer);

 
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true, 
      serializableCheck: false,
    }),
});

 
export const persistor = persistStore(store);

 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
