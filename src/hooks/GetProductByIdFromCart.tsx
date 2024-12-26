import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { ProductCartI } from "@/interfaces/product/product";

const useFindProductById = (id: string) => {
  const product = useSelector((state: RootState) =>
    state.product_cart.product.find((item: ProductCartI) => item.id === id)
  );
  return product || null;
};

export default useFindProductById;
