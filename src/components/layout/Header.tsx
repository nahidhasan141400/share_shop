import { Favorite, Logo, ShoppingCart } from "@/assets/icons";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

const Header = () => {
  const product_length = useSelector(
    (state: RootState) => state.product_cart.product.length
  );
  const product_fav_length = useSelector(
    (state: RootState) => state.product_fav.product_fav.length
  );
  return (
    <header className="text-blue-700 p-4">
      <div className="container mx-auto max-w-7xl flex justify-between items-center">
        <h1 className="text-xl cursor-pointer font-bold flex justify-start gap-2 items-center">
          <Logo />
          Share Shop
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <button className="flex items-center justify-center gap-1 bg-blue-100 px-4 py-2 rounded-lg">
                <span className="text-2xl ">
                  <ShoppingCart />
                </span>
                Cart
                {product_length > 0 && (
                  <span className="bg-red-500 rounded-full text-white size-6 text-xs p-1">
                    {product_length}
                  </span>
                )}
              </button>
            </li>
            {product_fav_length > 0 && (
              <li>
                <button className="flex items-center justify-center gap-1 bg-blue-100 px-4 py-2 rounded-lg">
                  <span className="text-2xl text-red-500">
                    <Favorite />
                  </span>
                  Favorite
                  <span className="bg-red-500 rounded-full text-white size-6 text-xs p-1">
                    {product_fav_length}
                  </span>
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
