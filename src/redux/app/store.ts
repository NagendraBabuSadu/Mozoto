import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../../features/Cart/cartSlice";
import userSlice from "../../features/User/userSlice";
import filterSlice from "../features/filterItemsSlice";
// create store
export const store = configureStore({
  reducer: {
    allCart: cartSlice,
    userReducer: userSlice,
    filterItemsReducer: filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
