import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { ProductI } from "@/interfaces/product/product";

const useFindProductByIdFromFav = (id: string) => {
  const product = useSelector((state: RootState) =>
    state.product_fav.product_fav.find((item: ProductI) => item.id === id)
  );
  return product || null;
};

export default useFindProductByIdFromFav;
