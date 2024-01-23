import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";

import authSlice from "./slices/authSlice";

import cartSlice from "./slices/cartSlice";

const persistConfig = {
  key: "root",
  storage: localStorage,
  whitelist: ["auth"],
};
const rootReducer = combineReducers({
  auth: authSlice,
  cart: cartSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
