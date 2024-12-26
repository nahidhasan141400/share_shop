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

  const dispatch = useDispatch(); // Hook to dispatch Redux actions

  // Use the usePagination hook to manage pagination state
  const { currentPage, skip, onPageChange } = usePagination({
    totalPages: 10,
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
    ],
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  // Function to handle adding a product to the cart
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
    <div className="w-full pb-5 pt-5">
      <h1 className="text-xl font-semibold mb-4 text-center">
        Select Your Product
      </h1>

      {/* Render your product list here */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto p-2">
        {data?.products.map((product, index) => {
          const { originalPrice, discountPrice, reducedAmount } =
            calculateDiscount(product.price, product.discountPercentage);

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
            >
              <ProductCard
                brand={product.brand}
                discount={product.discountPercentage ? reducedAmount : false}
                onAddToCart={() => handleAddToCart(product)} // Pass product to add to cart
                onQuickView={() => console.log("Quick View:", product)}
                price={originalPrice}
                originalPrice={discountPrice}
                loading={isFetching}
                isHovered={hoveredCardIndex === index}
                product={product}
              />
            </div>
          );
        })}
      </div>

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(data?.total || 0 / limit || 1)}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default ProductList;
