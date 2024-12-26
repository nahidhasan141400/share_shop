import FavList from "@/components/Fav/FavList";
import CartProductCard from "@/components/products/CartProductCard";
import OrderSummary from "@/components/products/CartSum";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

const Cart = () => {
  const productInCart = useSelector(
    (state: RootState) => state.product_cart.product
  );

  return (
    <section className="bg-white py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
          Shopping Cart
        </h2>
        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              {/* start cart */}
              {productInCart?.map((product) => {
                return <CartProductCard product={product} />;
              })}

              {/* end cart */}
            </div>
            <div className="hidden xl:mt-8 xl:block">
              <h3 className="text-2xl font-semibold text-gray-900 ">
                You also Like
              </h3>
              <FavList />
            </div>
          </div>
          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <OrderSummary />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
