import { RootState } from "@/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../products/ProductCard";
import { AddToCard } from "@/store/slices/modalSlice";
import { ProductI } from "@/interfaces/product/product";
import { calculateDiscount } from "@/util/Discount";

const FavList = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const dispatch = useDispatch();
  const productInFav = useSelector(
    (state: RootState) => state.product_fav.product_fav
  );

  const handleAddToCart = (product: ProductI) => {
    dispatch(
      AddToCard({
        id: product.id,
        products: product,
        quantity: 1, // Default quantity
      })
    );
  };
  return (
    <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
      {productInFav?.map((product, index) => {
        const { originalPrice, discountPrice, reducedAmount } =
          calculateDiscount(product.price, product.discountPercentage);

        return (
          <div
            key={index}
            onMouseEnter={() => setHoveredCardIndex(index)}
            onMouseLeave={() => setHoveredCardIndex(null)}
          >
            <ProductCard
              discount={product.discountPercentage ? reducedAmount : false}
              onAddToCart={() => handleAddToCart(product)}
              price={originalPrice}
              originalPrice={discountPrice}
              loading={false}
              isHovered={hoveredCardIndex === index}
              product={product}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FavList;
