export const PriceFormatter = (value) => {
  // Format the price using Intl.NumberFormat
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD", // You can change the currency as needed
    minimumFractionDigits: 2,
  }).format(value);

  return <span>{formattedPrice}</span>;
};
