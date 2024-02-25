import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/features/cart/cartSlice";
const AddToCart = ({ product, qty }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  console.log(product);
  const handleAddToCart = () => {
    dispatch(addToCart({ product, productQty: qty }));
  };
  return (
    <div
      className="flex items-center gap-1 bg-primaryBlack px-5 cursor-pointer hover:opacity-80 py-3 text-white font-bold text-[15px]"
      onClick={handleAddToCart}
    >
      <div>
        <MdOutlineShoppingBag size={24} className="mb-1" />
      </div>
      <div>ADD TO CART</div>
    </div>
  );
};

export default AddToCart;
