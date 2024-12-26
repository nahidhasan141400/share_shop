import { ProductI } from "@/interfaces/product/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IInitialState {
  product: ProductI | null;
}

const initialState: IInitialState = {
  product: null,
};

const QuickSlice = createSlice({
  name: "Quick_view",
  initialState,
  reducers: {
    show_Quick: (state, action: PayloadAction<ProductI | null>) => {
      state.product = action.payload;
    },
  },
});

export const { show_Quick } = QuickSlice.actions;
export default QuickSlice.reducer;
