interface PriceDetails {
  originalPrice: number;
  discountPrice: number;
  reducedAmount: number;
}

function roundToTwoDecimalPlaces(num: number): number {
  return parseFloat(num.toFixed(2));
}
export function calculateDiscount(
  price: number,
  discountPercentage: number
): PriceDetails {
  const reducedAmount = roundToTwoDecimalPlaces(
    (price * discountPercentage) / 100
  );
  const discountPrice = roundToTwoDecimalPlaces(price - reducedAmount);
  return {
    originalPrice: roundToTwoDecimalPlaces(price),
    discountPrice,
    reducedAmount,
  };
}
