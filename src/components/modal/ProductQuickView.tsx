import { Favorite, HeartOutline, ShoppingCart } from "@/assets/icons";
import useFindProductById from "@/hooks/GetProductByIdFromCart";
import useFindProductByIdFromFav from "@/hooks/GetProductByIdFromFav";
import { RootState } from "@/store";
import { AddToFav, deleteProductFromFav } from "@/store/slices/favSlice";
import { AddToCard } from "@/store/slices/modalSlice";
import { show_Quick } from "@/store/slices/QuickView";

import { useDispatch, useSelector } from "react-redux";

const ProductQuickView = () => {
  const Dispatch = useDispatch();
  const product = useSelector((state: RootState) => state.quick_view.product);
  const productInFav = useFindProductByIdFromFav(product?.id || "");
  const productInCart = useFindProductById(product?.id || "");
  const handleAddFav = () => {
    if (product) {
      Dispatch(AddToFav(product));
    }
  };
  const handleRemoveFav = () => {
    if (product) {
      Dispatch(deleteProductFromFav(product?.id));
    }
  };
  const handleAddToCart = () => {
    Dispatch(
      AddToCard({
        // @ts-expect-error skip
        id: product.id,
        // @ts-expect-error skip
        products: product,
        quantity: 1, // Default quantity
      })
    );
  };

  if (!product) return null; // Do not render modal if it's not open

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen overflow-auto bg-black/50 z-50 flex justify-center sm:items-center p-5">
        <div className="w-full max-w-4xl p-5 bg-white rounded-md shadow-lg ring-2 ring-blue-300">
          <section className="py-8 bg-white md:py-16  antialiased">
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                  <img
                    className="w-full max-h-80 object-contain"
                    src={product.images[0]}
                    alt={""}
                  />
                </div>
                <div className="mt-6 sm:mt-8 lg:mt-0">
                  <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl ">
                    {product.title}
                  </h1>
                  <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                    <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl ">
                      ${product.price}
                    </p>
                  </div>
                  <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                    {productInFav ? (
                      <button
                        onClick={handleRemoveFav}
                        className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
                      >
                        <span className="text-2xl text-red-500">
                          <Favorite />
                        </span>
                        Remove From favorites
                      </button>
                    ) : (
                      <button
                        onClick={handleAddFav}
                        className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
                      >
                        <span className="text-2xl">
                          <HeartOutline />
                        </span>
                        Add to favorites
                      </button>
                    )}

                    {!productInCart && (
                      <button
                        onClick={handleAddToCart}
                        className="mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                      >
                        <span className="text-xl">
                          <ShoppingCart />
                        </span>
                        Add to cart
                      </button>
                    )}

                    <button
                      className="text-red-500"
                      onClick={() => {
                        Dispatch(show_Quick(null));
                      }}
                    >
                      Close
                    </button>
                  </div>
                  <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
                  <p className="mb-6 text-gray-500">{product.description}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProductQuickView;
