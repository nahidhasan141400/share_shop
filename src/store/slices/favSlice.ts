import { ProductI } from "@/interfaces/product/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IInitialState {
  product_fav: ProductI[];
}

const initialState: IInitialState = {
  product_fav: [],
};

const FavSlice = createSlice({
  name: "product_fav",
  initialState,
  reducers: {
    AddToFav: (state, action: PayloadAction<ProductI>) => {
      state.product_fav.push(action.payload);
    },
    deleteProductFromFav: (state, action: PayloadAction<string>) => {
      state.product_fav = state.product_fav.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { AddToFav, deleteProductFromFav } = FavSlice.actions;
export default FavSlice.reducer;
