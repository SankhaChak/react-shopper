const RemoveFromCart = () => {
  const handleRemoveItem = () => {};

  return (
    <button
      className="flex ml-2 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
      onClick={handleRemoveItem}
      //   disabled={!cartCount}
    >
      Remove
    </button>
  );
};

export default RemoveFromCart;
