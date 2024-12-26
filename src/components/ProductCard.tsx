import {
  AddToCart,
  Badge,
  Eye,
  HeartOutline,
  OutlineAdd,
  TrashCanOutline,
} from "@/assets/icons";
import React from "react";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  brand: string;
  originalPrice?: number;
  discount: number;
  onAddToCart: () => void;
  onQuickView: () => void;
  isHovered: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  originalPrice,
  discount,
  brand,
  onAddToCart,
  onQuickView,
  isHovered,
}) => {
  return (
    <div className="relative group max-w-[240px] rounded-lg hover:shadow-md bg-gray-50 p-1 overflow-hidden">
      {/* Discount Badge */}
      <div className="absolute top-2 -left-2 text-white text-xs px-2 py-1 z-10 rounded">
        <p className="absolute top-0 left-3">
          {" "}
          - <span className="text-xl">৳</span> {discount}
        </p>
        <Badge />
      </div>

      {/* Image */}
      <div className="w-full h-52 overflow-hidden rounded-md relative">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
        />
        {/* Hover Actions */}
        <div
          className={`absolute inset-0 bg-black/50 text-white gap-4 transition-opacity ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* save to favorite */}
          <div className="absolute top-0 right-0 p-3 inline-block z-30">
            <span className="text-2xl cursor-pointer relative hover:scale-110 ">
              <HeartOutline />
            </span>
          </div>
          {/* button controller */}
          <div className="w-full absolute bottom-0 mb-3 px-3">
            <div className="flex justify-between items-center gap-1  bg-green-500 rounded-md backdrop-blur-md text-white w-full  px-3 py-1">
              <span className="text-xl">
                <TrashCanOutline />
              </span>
              1 Added in Cart
              <span className="text-xl">
                <OutlineAdd />
              </span>
            </div>
            <button
              className=" mt-2 flex justify-center items-center gap-1 bg-white/5  hover:bg-white/40 ring-2 backdrop-blur-md ring-white/50 text-white w-full  py-1 rounded shadow"
              onClick={onAddToCart}
            >
              <span className="text-xl">
                <AddToCart />
              </span>
              Add to Cart
            </button>
            <button
              className="flex justify-center items-center gap-1 mt-3 bg-white/5  hover:bg-white/40 ring-2 backdrop-blur-md ring-white/50 text-white w-full  py-1 rounded shadow"
              onClick={onQuickView}
            >
              <span className="text-xl">
                <Eye />
              </span>
              Quick View
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-3 pt-3">
        <h2 className="text-gray-800 text-sm truncate">{brand || "brand"}</h2>
        <h3 className="text-gray-800 font-medium  overflow-ellipsis line-clamp-2">
          {title}
        </h3>
        <div className="mt-2 flex items-center">
          <span className="text-blue-600 text-lg font-semibold">৳ {price}</span>
          {originalPrice && (
            <span className="text-gray-500 text-sm line-through ml-2">
              ৳ {originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
