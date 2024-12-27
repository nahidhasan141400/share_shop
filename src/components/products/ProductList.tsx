import { useGetAllProductQuery } from "@/store/api/product/ProductApi";
import Pagination from "../share/Pagination";
import usePagination from "@/hooks/Pagination";
import ProductCard from "./ProductCard";
import { calculateDiscount } from "@/util/Discount";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { ProductI } from "@/interfaces/product/product";
import { AddToCard } from "@/store/slices/modalSlice";

const ProductList = () => {
  const limit = 20;
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const dispatch = useDispatch();

  const { currentPage, skip, onPageChange } = usePagination({
    totalPages: 10, // Make sure this is dynamic based on total products
    limit: limit,
  });

  const { data, isLoading, error, isFetching } = useGetAllProductQuery({
    limit: limit,
    skip: skip,
    select: [
      "images",
      "brand",
      "title",
      "thumbnail",
      "price",
      "discountPercentage",
      "rating",
      "description",
    ],
  });

  if (isLoading) return <div className="text-center py-4">Loading...</div>;
  if (error)
    return (
      <div className="text-center py-4 text-red-500">
        Error loading products
      </div>
    );

  const handleAddToCart = (product: ProductI) => {
    dispatch(AddToCard({ id: product.id, products: product, quantity: 1 }));
  };

  return (
    <div className="w-full py-5">
      <h1 className="text-xl font-semibold mb-4 text-center">
        Select Your Product
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-4 max-w-7xl mx-auto px-2 justify-center">
        {data?.products?.map((product, index) => {
          // Added optional chaining here
          const { originalPrice, discountPrice, reducedAmount } =
            calculateDiscount(product.price, product.discountPercentage);

          return (
            <div
              key={product.id} // Use a unique ID if available, index is not ideal
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
            >
              <ProductCard
                discount={product.discountPercentage ? reducedAmount : false}
                onAddToCart={() => handleAddToCart(product)}
                price={originalPrice}
                originalPrice={discountPrice}
                loading={isFetching}
                isHovered={hoveredCardIndex === index}
                product={product}
              />
            </div>
          );
        })}
        {!data?.products?.length &&
          !isLoading &&
          !error && ( // Handle empty data
            <div className="text-center col-span-full py-4">
              No products found.
            </div>
          )}
      </div>

      <div className="mt-6 flex justify-center">
        {" "}
        {/* Center the pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil((data?.total || 0) / limit) || 1} // Correct totalPages calculation
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default ProductList;
