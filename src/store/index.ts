import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default: localStorage for web
import productReducer from "@/store/slices/modalSlice";
import FavSlice from "@/store/slices/favSlice";
import QuickSlice from "@/store/slices/QuickView";
import api from "./api/api";

// Persist configuration for the product slice
const persistConfig = {
  key: "product_cart",
  storage,
};

const persistedProductReducer = persistReducer(persistConfig, productReducer);
const persistedProductFavReducer = persistReducer(persistConfig, FavSlice);

const store = configureStore({
  reducer: {
    product_cart: persistedProductReducer,
    product_fav: persistedProductFavReducer,
    quick_view: QuickSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
