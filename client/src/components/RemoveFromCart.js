import toast from "react-hot-toast";
import { useShoppingCart } from "use-shopping-cart";

const RemoveFromCart = ({ product }) => {
  const { removeItem, cartDetails } = useShoppingCart();

  const inCart = Object.keys(cartDetails).includes(product.id);

  const handleRemoveItem = () => {
    removeItem(product.id);
    toast.success(`${product.name} has been removed from your cart!`);
  };

  return (
    <button
      className="flex ml-2 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
      style={{
        opacity: !inCart ? ".5" : "1",
        cursor: !inCart ? "not-allowed" : "pointer",
      }}
      onClick={handleRemoveItem}
      disabled={!inCart}
    >
      Remove
    </button>
  );
};

export default RemoveFromCart;
