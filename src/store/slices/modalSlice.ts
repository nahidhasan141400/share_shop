import { ProductI } from "@/interfaces/product/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IInitialState {
  product: ProductI | null;
}

const initialState: IInitialState = {
  product: null,
};

const ModalSlice = createSlice({
  name: "product", // Slice name
  initialState,
  reducers: {
    ProductModal: (state, action: PayloadAction<ProductI>) => {
      // Directly mutate state using Immer
      state.product = action.payload;
    },
  },
});

export const { ProductModal } = ModalSlice.actions;
export default ModalSlice.reducer;
