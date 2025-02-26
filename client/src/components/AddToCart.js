import toast from "react-hot-toast";
import { useShoppingCart } from "use-shopping-cart";

const AddToCart = ({ product }) => {
  const { addItem } = useShoppingCart();

  const handleAddItem = () => {
    addItem(product);
    toast.success(`${product.name} has been added to your cart`);
  };

  return (
    <button
      className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
      onClick={handleAddItem}
    >
      Add To Cart
    </button>
  );
};

export default AddToCart;
