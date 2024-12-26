interface PriceDetails {
  originalPrice: number; // Original price before discount
  discountPrice: number; // Price after discount
  reducedAmount: number; // The amount reduced due to the discount
}

function roundToTwoDecimalPlaces(num: number): number {
  return parseFloat(num.toFixed(2));
}

export function calculateDiscount(
  price: number,
  discountPercentage: number
): PriceDetails {
  // Calculate the discount amount
  const reducedAmount = roundToTwoDecimalPlaces(
    (price * discountPercentage) / 100
  );

  // Calculate the price after discount
  const discountPrice = roundToTwoDecimalPlaces(price - reducedAmount);

  // Return the details
  return {
    originalPrice: roundToTwoDecimalPlaces(price),
    discountPrice,
    reducedAmount,
  };
}
