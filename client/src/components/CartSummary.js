import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { CartIcon } from "./Icons";

const CartSummary = () => {
  const [isOpen, setOpen] = useState(false);
  const { formattedTotalPrice, cartCount } = useShoppingCart();

  const toggleModal = () => setOpen((current) => !current);

  return (
    <>
      <nav
        onClick={toggleModal}
        className="md:ml-auto flex flex-wrap items-center text-base justify-center"
      >
        <span className="mr-5 hover:text-white flex items-center">
          <CartIcon />
          <span className="ml-3">
            {formattedTotalPrice} ({cartCount})
          </span>
        </span>
      </nav>
      {/* <CartModal isOpen={isOpen} toggleModal={toggleModal} /> */}
    </>
  );
};

export default CartSummary;
