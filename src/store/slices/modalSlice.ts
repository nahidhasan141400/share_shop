import { ProductCartI } from "@/interfaces/product/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IInitialState {
  product: ProductCartI[];
}

const initialState: IInitialState = {
  product: [],
};

const ModalSlice = createSlice({
  name: "product_cart",
  initialState,
  reducers: {
    AddToCard: (state, action: PayloadAction<ProductCartI>) => {
      state.product.push(action.payload);
    },
    AddQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const product = state.product.find(
        (item) => item.id === action.payload.id
      );
      if (product) {
        product.quantity += action.payload.quantity;
      }
    },
    RemoveQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const product = state.product.find(
        (item) => item.id === action.payload.id
      );
      if (product) {
        product.quantity -= action.payload.quantity;
        if (product.quantity <= 0) {
          state.product = state.product.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
    deleteProductFromCart: (state, action: PayloadAction<string>) => {
      state.product = state.product.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { AddToCard, AddQuantity, RemoveQuantity, deleteProductFromCart } =
  ModalSlice.actions;
export default ModalSlice.reducer;
