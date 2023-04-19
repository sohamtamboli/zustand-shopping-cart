const USD_RATE = 82.23; // $1 = ₹82.23 ATTOW

export const priceFormatter = (price: number) => {
  const INRPrice = price * USD_RATE;
  const INROptions = {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  };

  return new Intl.NumberFormat("en-IN", INROptions).format(INRPrice);
};
