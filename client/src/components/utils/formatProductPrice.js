import { formatCurrencyString } from "use-shopping-cart";

const formatProductPrice = (product) => {
  return formatCurrencyString({
    value: product.price,
    currency: product.currency,
    language: navigator.language,
  });
};

export default formatProductPrice;
