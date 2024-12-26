import { useSelector } from "react-redux";
import { RootState } from "@/store";

const OrderSummary = () => {
  const cart = useSelector((state: RootState) => state.product_cart.product);

  // Calculate totals
  const originalPrice = cart.reduce(
    (total, item) => total + item.products.price * item.quantity,
    0
  );
  const savings = cart.reduce(
    (total, item) =>
      total +
      (item.products.discountPercentage / 100) *
        item.products.price *
        item.quantity,
    0
  );

  const total = originalPrice - savings;

  return (
    <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
      <p className="text-xl font-semibold text-gray-900">Order summary</p>
      <div className="space-y-4">
        <div className="space-y-2">
          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500">
              Original price
            </dt>
            <dd className="text-base font-medium text-gray-900">
              ${originalPrice.toFixed(2)}
            </dd>
          </dl>
          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500">Savings</dt>
            <dd className="text-base font-medium text-green-600">
              -${savings.toFixed(2)}
            </dd>
          </dl>
        </div>
        <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
          <dt className="text-base font-bold text-gray-900">Total</dt>
          <dd className="text-base font-bold text-gray-900">
            ${total.toFixed(2)}
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default OrderSummary;
